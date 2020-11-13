// Require Express Router
const Router = require('express').Router;
// Require Books Route
// const booksRouter = require('./books');


const pythonRouter= require('./pythonroutes');


// Instantiate Router
const router = Router();

//we need this package to be able to fetch with async await 
const fetch = require("node-fetch");







// Home Route
router.all('/', (req, res) => {
  res.send('Welcome To Students Api ');
});



// An api endpoint that returns a short list of items
router.get('/api/getList', (req,res) => {
    var list = { item : { "firstitem" : "item1", "seconditem":"item2", "third" :"item3"}
    
    
    
    
     };
    
    
    var courselist = { data : [ { "id":32, subject:"English",
    						"rating":"3.5", "people" :45 , "status":"not added"}  ,
    						
    						
    						
    				  { "id":33, subject :"Chemistry",
    						"rating":"2.5", "people" :35 , "status":"added"}  ,
    				
    				{ "id":34 , subject :"Biology",
    						"rating":"1.5", "people" :15 , "status":"not added"}
    						
    		 
    		 
    				   ]  }
    						 
    						 
    						 
    						 
    
    
    
    res.json(courselist);
    console.log(courselist)
    console.log('Sent list of items');
});



// An api endpoint that returns a short list of items used for signup for now 
//but can be used for anyhting i can specify whether signup or not with sofware 


router.post('/api/signup', (req,res) => {
    var fname = req.body["firstnamex"]
    var lname = req.body["lastnamex"]
     
    console.log(req.body)
    console.log(req.body["user"]["firstnamex"])
    
    console.log('Got list of items');
    
});



// post to python api 
router.use('/python', pythonRouter );













// get json data from user 
router.post('/pythonapipostfromuser',async (req, res) => {
  const data =''
  url=`https://mest-python-api-first-trail.herokuapp.com/postjson`
  
  try{
  
	var userpost = req.body ;
  
  
  
  
  
    console.log(userpost)
    const config = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userpost)
    }
    
    const response = await fetch(url, config)
    const json = await response.json()
    
    
    if (response.ok) {
        
        newmsg = "data is sent"
        res.json(newmsg)
        
     }  else {
    
        
        res.json(response)
   	} 
   }catch(error){
   	console.log(error)
        //
}
 
  
  
} );





module.exports = router;



