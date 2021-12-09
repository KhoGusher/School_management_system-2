require('dotenv').config();
const jwt = require( 'jsonwebtoken');

const pool = require('../pool');


module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if(!authorization){
      return res.status(401).send({error: 'You should login first'});
  }
   const tok = authorization.replace('Bearer', '');    

   const secret = Buffer.from('b67ec320131d728efe107bd179c106e3bd24e621aed03a9e8e2004d9b3c0f6a1', 'hex')
   const token = tok.trim();
   jwt.verify(token, process.env.BIG_DEE, async (err, payload) => {
    if(err){
          return res.status(401).send({error: 'You should login firsts'}); 
        }
         const { email } = payload;
       
         const { rows } = await pool.query("SELECT * FROM manager WHERE email = $1" ,[email])
        
         // req.user = user;
        if(rows){
            next();
        }
        
     });
};