
const { randomBytes } = require('crypto');
const { default: migrate } = require('node-pg-migrate');
const format = require('pg-format');

const pool = require('../pool');

const DEFAULT_OPTIONS = {
       host: 'localhost',
       port: 5432,
       database: 'socialnetwork-test',
       user: 'postgres',
       password: 'Aviation@2621'
}

class Context {
     static async build(){
         
  // generate a random name to connect to PG AS
   const roleName = 'a' + randomBytes(4).toString('hex');
   // connect to PG as usual
   await pool.connect(DEFAULT_OPTIONS);
   // create a new role 
    await pool.query(
      format('CREATE ROLE %I WITH LOGIN PASSWORD %L;', roleName, roleName)
    );
   // create a schema with the same name
    await pool.query(
      format('CREATE SCHEMA %I AUTHORIZATION %I;', roleName, roleName)
    );
   // disconnect entirey from PG
    await pool.close();
   // run migration in new schema
    await migrate({
       schema: roleName,
       direction: 'up',
       log: () => {},
       noLock: true,
       dir: 'migrations',
       databaseUrl: {
         host: 'localhost',
         port: 5432,
         database: 'socialnetwork-test',
         user: roleName,
         password: roleName
       }
    });
   // connect to PG as newly created role
    await pool.connect({
       host: 'localhost',
       port: 5432,
       database: 'socialnetwork-test',
       user: roleName,
       password: roleName
    });

    return new Context(roleName);
     }

     constructor(roleName){
         this.roleName = roleName;
     }
     
     async reset(){
       // if u also have like orders to delete you write below DELETE as DELETE FROM posts ...
       return pool.query(`
        DELETE FROM users;
       `);
     }
     async close(){
       // disconnect from PG
          await pool.close();
       // reconnect as route user
          await pool.connect(DEFAULT_OPTIONS);
       // delete the role and schema we created
          await pool.query(
            format('DROP SCHEMA %I CASCADE;', this.roleName)
          );
          await pool.query(
            format('DROP ROLE %I;', this.roleName)
          );
       // disconnect
         await pool.close();
     }
}

module.exports = Context;