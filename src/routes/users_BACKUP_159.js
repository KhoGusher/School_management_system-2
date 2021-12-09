require('dotenv').config();
var client = require('twilio')(
  process.env.TWILIO_ACCOUNT_SID,
   process.env.TWILIO_TOKEN);

require('../middlewares/requireAuth');
  const express = require('express');
  const UserRepo = require('../repository/user-repo');
  const pool = require('../pool');
const { response } = require('express');
  const router = express.Router();


  router.get('/', function(req, res, next) {  
    res.status(200).send("Hi, It works!");  
}); 


router.get('/apparel', async (req, res, next) => {
  try {
<<<<<<< HEAD
  const users = await UserRepo.getApparel();
=======
 // run a query to get all users
  const users = await UserRepo.findApparel();
// send the result back to the person who made this request
>>>>>>> 04a459803f7aa5af902dbf36a361483a168a942c
    if(users){
      res.status(200).send(users);
    }
 }
   catch(error) {
     return res.status(422).send({error: 'Something went wrong'});        
    } 
} );


<<<<<<< HEAD

router.get('/allApparel', async (req, res, next) => {
   try {
   const users = await UserRepo.getAllApparel();
=======
// get bags router.get('/', requireAuth,  async (req, res) => { // FOR requireAuth middleware
router.get('/apparelAll', async (req, res, next) => {
   try {
  // run a query to get all users
   const users = await UserRepo.findApparelAll();
  // send the result back to the person who made this request
>>>>>>> 04a459803f7aa5af902dbf36a361483a168a942c
        if(users){          
          res.status(200).send(users);
        }
  }
     catch(error) {
      return res.status(422).send({error: 'Something went wrong'});        
     }

} );

<<<<<<< HEAD

router.get('/electronics', async (req, res, next) => {
   try {
const users = await UserRepo.getElectronics();
     if(users){
         res.status(200).send(users);
     }
  }
    catch(error) {
      return res.status(422).send({error: 'Something went wrong'});        
     } 
} );


  router.get('/allElectronics', async (req, res, next) => {
    try {
 const users = await UserRepo.getAllElectronics();
      if(users){
         res.status(200).send(users);
      }
   }
     catch(error) {
       return res.status(422).send({error: 'Something went wrong'});        
      } 
 } );


router.get('/houses', async (req, res, next) => {
  try {
const users = await UserRepo.getHouses();
     if(users){
      res.status(200).send(users);
     }
   }
  catch(error) {
    return res.status(422).send({error: 'Something went wrong'});        
   } 
} );


router.get('/allHouses', async (req, res) => {
  try {
const users = await UserRepo.getAllHouses();
     if(users){
        res.status(200).send(users);
     }
   }
  catch(error) {
    return res.status(422).send({error: 'Something went wrong'});        
   } 
} );


router.get('/locomotives', async (req, res, next) => {
  try {
  const users = await UserRepo.getLocomotives();
    if(users){
      res.status(200).send(users);
    }
 }
   catch(error) {
     return res.status(422).send({error: 'Something went wrong'});        
    } 
} );


router.get('/allLocomotives', async (req, res, next) => {
   try {
   const users = await UserRepo.getAllLocomotives();
        if(users){          
          res.status(200).send(users);
        }
  }
     catch(error) {
      return res.status(422).send({error: 'Something went wrong'});        
     }

} );


router.get('/homeOffice', async (req, res, next) => {
   try {

const users = await UserRepo.getHomeOffice();

=======
// get shoes
router.get('/locomotive', async (req, res, next) => {
   try {
  // run a query to get all users
const users = await UserRepo.findLocomotive();
// send the result back to the person who made this request
>>>>>>> 04a459803f7aa5af902dbf36a361483a168a942c
     if(users){
         res.status(200).send(users);
     }
  }
    catch(error) {
      return res.status(422).send({error: 'Something went wrong'});        
     } 
} );


  // get all shoes
<<<<<<< HEAD
  router.get('/allHomeOffice', async (req, res, next) => {
    try {
 const users = await UserRepo.getAllHomeOffice();
=======
  router.get('/locomotiveAll', async (req, res, next) => {
    try {
   // run a query to get all users
 const users = await UserRepo.findLocomotiveAll();
 // send the result back to the person who made this request
>>>>>>> 04a459803f7aa5af902dbf36a361483a168a942c
      if(users){
         res.status(200).send(users);
      }
   }
     catch(error) {
       return res.status(422).send({error: 'Something went wrong'});        
      } 
 } );

<<<<<<< HEAD

router.get('/foods', async (req, res, next) => {
  try {
const users = await UserRepo.getFoods();

=======
// get furniture
router.get('/electronic', async (req, res, next) => {
  try {
  // run a query to get all users
const users = await UserRepo.findElectronic();
// send the result back to the person who made this request
>>>>>>> 04a459803f7aa5af902dbf36a361483a168a942c
     if(users){
      res.status(200).send(users);
     }
   }
  catch(error) {
    return res.status(422).send({error: 'Something went wrong'});        
   } 
} );


<<<<<<< HEAD
router.get('/allFoods', async (req, res) => {
  try {
  // run a query to get all users
const users = await UserRepo.getAllFoods();
=======
router.get('/electronicAll', async (req, res) => {
  try {
  // run a query to get all users
const users = await UserRepo.findElectronicAll();
>>>>>>> 04a459803f7aa5af902dbf36a361483a168a942c
// send the result back to the person who made this request
     if(users){
        res.status(200).send(users);
     }
   }
  catch(error) {
    return res.status(422).send({error: 'Something went wrong'});        
   } 
} );








<<<<<<< HEAD
=======


router.get('/food', async (req, res, next) => {
  try {
    const { rows } = await pool.query(`SELECT * FROM products WHERE category='bag';`);
 // run a query to get all users
  const users = await UserRepo.findFood();
// send the result back to the person who made this request
    if(users){
      res.status(200).send(users);
    }
 }
   catch(error) {
     return res.status(422).send({error: 'Something went wrong'});        
    } 
} );


// get bags router.get('/', requireAuth,  async (req, res) => { // FOR requireAuth middleware
router.get('/foodAll', async (req, res, next) => {
   try {
  // run a query to get all users
   const users = await UserRepo.findFoodAll();
  // send the result back to the person who made this request
        if(users){          
          res.status(200).send(users);
        }
  }
     catch(error) {
      return res.status(422).send({error: 'Something went wrong'});        
     }

} );

// get shoes
router.get('/house', async (req, res, next) => {
   try {
  // run a query to get all users
const users = await UserRepo.findHouse();
// send the result back to the person who made this request
     if(users){
         res.status(200).send(users);
     }
  }
    catch(error) {
      return res.status(422).send({error: 'Something went wrong'});        
     } 
} );


  // get all shoes
  router.get('/houseAll', async (req, res, next) => {
    try {
   // run a query to get all users
 const users = await UserRepo.findHouseAll();
 // send the result back to the person who made this request
      if(users){
         res.status(200).send(users);
      }
   }
     catch(error) {
       return res.status(422).send({error: 'Something went wrong'});        
      } 
 } );



>>>>>>> 04a459803f7aa5af902dbf36a361483a168a942c
router.get('/get/detailed/:id', async (req, res) => {

  try {
 const { id } = req.params;
 const supplier = await UserRepo.findIdForDetailed(id);
   if(supplier){
      res.status(200).send(supplier);
    }
   }
  catch(error) {
   return res.status(422).send({error: 'Something went wrong'});        
  }
} 
);


  // get supplier detail and goods
  router.get('/detailed/supplier/:suppId', async (req, res) => {
    
     try {
    const { suppId } = req.params;
    const supplier = await UserRepo.findSupplierWithGoods(suppId);
      if(supplier){
         res.status(200).send(supplier);
       }
      }
     catch(error) {
      return res.status(422).send({error: 'Something went wrong'});        
     }
  } 
  );



  router.post('/singleItem', async (req, res) => {
    const userId = req.body.userId;
    const formValues = req.body.formValues;
    var addedItem = req.body.addedItem;
     
    const { rows } = await pool.query("SELECT * FROM suppliers WHERE id = $1;", [addedItem.supplierId])
     if(rows[0]){  
      twilioSms(addedItem, rows[0].phone_number, formValues, res);
     }
  });

  
  router.post('/wholesale', async (req, res) => {

    const userId = req.body.userId;
    const formValues = req.body.formValues;
    var addedItems = req.body.addedItems;
    
    const nowSend = addedItems.map( item => {
              const {productName, quantity} = item;
              return {
                productName,
                quantity
              }
        });
    
     twilioSmsForProducts(nowSend, formValues, res);
     
  });
  
  
    // signup route
    router.post('/signup', async (request, response) => {
    
      try {
      if(!request.body.email || !request.body.password){
        return response.status(422).send({error: 'Email and password needed'});
      }

      const { rows } = await pool.query("SELECT * FROM users WHERE email = $1", [request.body.email]);                  
        if(rows.length !== 0){
          //  throw('Email exists');
          response.status(422).json("Something went wrong");
          }
          if(rows.length == 0){
      
                  const user = await UserRepo.insert(request, response);    
                  if(user){ 
                    response.status(200).send(user);       
                  }
                }
          }

          catch(error) {
            return response.status(422).send({error: 'Something went wrong'});        
           }

        } );

    
      // user verify
  router.post('/user/verify', async (request, response) => {
    /* console.log(request.body.toke.token); */
    const { rows } = await pool.query("SELECT * FROM users WHERE token = $1",[request.body.toke.token]);
                
          if(rows.length !== 0){
            //  throw('Email exists');     
            const userRegistrationVerify = await UserRepo.userVerifyRegister(response, rows[0]);
                
                if(userRegistrationVerify){
               response.status(200).send(userRegistrationVerify);
               }
            }
            if(rows.length === 0){
              response.status(422).json("Something went wrong");
              }   
          } );

            // sign in 
  router.post('/signin', async (request, response) => {

     try {
    if(!request.body.email || !request.body.password){
      return response.status(422).send({error: 'Email and password needed'});
    }
    
    const { rows } = await pool.query("SELECT * FROM users WHERE email = $1", [request.body.email]);
                
              if(rows[0]){
                  var is_authenticated = rows[0].is_authenticated; 
                }                    
      if((rows.length !== 0) && is_authenticated ){
          //  throw('Email exists');
          
          const user = await UserRepo.signInVerification(request, response);
              if(user){
                response.status(200).send(user);
              }
       }
      if(rows.length == 0){
        return response.status(422).send({error: 'Confirm in your email for successful login'});
          }
     
        }
        catch (error){
          return response.status(422).send({error: 'Something went wrong'});
        }
          } );

    // password reset first time details
    router.post('/forgot/password', async (request, response) => {
    
       try {
      if(!request.body.email || !request.body.firstname || !request.body.lastname){
        return response.status(422).send({error: 'Email and password needed'});
      } 

      const { firstname, lastname, email } = request.body;
      const { rows } = await pool.query(`SELECT * FROM users WHERE email = $1 AND firstname = $2 AND lastname = $3 `
      ,[email, firstname, lastname]);
            
            if(rows.length !== 0){
              //  throw('Email exists');
              const resetPass = await UserRepo.passwordReset(request, response, rows[0]);
                 if(resetPass){
                  response.status(200).send(resetPass);
              }
            }
             /*
              if(rows.length == 0){
                  response.sendStatus(404).json("You have to signup for an account");
                  response.status(400).end();
                }
               */ 
              }

              catch(error) {
                return response.status(422).send({error: 'Something went wrong'});        
               }

              });



  // user confirm password reset second phase
  router.post('/passwordreset/confirm', async (request, response) => {
        
     try {
    let { email, password, firstname, lastname, token } = request.body;
    
    const { rows } = await pool.query(`
    SELECT * FROM users WHERE email = $1 AND firstname = $2 AND lastname = $3 AND token = $4` ,
    [email, firstname, lastname, token]);
          
          if(rows.length !== 0){
            //  throw('Email exists');
            const updatePassword = await UserRepo.passwordUpdateInProcess(request, response, rows[0], password);
                if(updatePassword){
                  response.status(200).send(updatePassword);
               }
             }
            if(rows.length == 0){
                response.status(404).json("Something went wrong");
              }
              
            }

            catch(error) {
              return response.status(422).send({error: 'Something went wrong'});        
             }

            });         


  router.get('/users/:id', async (req, res) => {
      try {  
    // take id from url
      const { id } = req.params;
      const user = await UserRepo.findById(id);
      
      if(user){
        response.status(200).send(user);
        } else {
            res.sendStatus(404);
        }

      }
      catch(error) {
        return res.status(422).send({error: 'Something went wrong'});        
       }
  } );


  // for updating
  router.put('/users/:id', async (req, res) => {
      const { id } = req.params;
      const { username, bio } = req.body;

    
      const user = await UserRepo.update(id, username, bio);

      if(user){
        response.status(200).send(user);
      }
      else {
          res.sendStatus(404);
      }
  } );

const twilioSms = (addedItem, sellerPhone,  phoneNumber, res) => {
  const {productName, quantity} = addedItem;
  const { PhoneNumber } = phoneNumber;

    client.messages.create({
      from: +16504463400,
      to: `${sellerPhone}`,
      body: `Name: ${productName}  Quantity: ${quantity}  Contact: ${PhoneNumber}`
},
function(err, message){
   if(err){
    return res.status(422).send('Something went wrong, please try again');
   }
   if(message){
      return res.status(200).send('Message successfully delivered');
   }
});
  }

  var body='';
  const twilioSmsForProducts = (nowSend, phone, res) => {
    const { PhoneNumber } = phone;
     
    for(let i=0; i<nowSend.length; i++){
       body += `${ PhoneNumber }  ${ nowSend[i].productName }   ${ nowSend[i].quantity }` 
   }
    
client.messages.create({
  from: +16504463400,
  to: 265885311818,
  body: body
  },
  function(err, message){
     if(err){
      console.log(err);
     }
     if(message){
      return res.status(200).send('Message successfully delivered');
     }
  });
  
    }

  module.exports = router;

