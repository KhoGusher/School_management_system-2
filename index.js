require('./src/middlewares/requireAuth');
const app = require('./src/App');
const pool = require('./src/pool');
const PORT = process.env.PORT || 5000;


pool.connect({
  host: 'localhost',
  database: 'skylabs',
  user: 'postgres',      
  port: 5432,
  password: 'Aviation@2621'
})

    .then( ()=> {
       
     app().listen(PORT, () => {
      console.log(`Still Listening on ${ PORT }`)
     });   
   
 })
 .catch( err => console.log(err));


   




