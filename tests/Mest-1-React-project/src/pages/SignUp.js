




import React, { useState,useEffect } from 'react';

import axios from 'axios';
import Navbar from '../component/Navbar';

import Carousel from '../component/Carousel';
import Container from '../component/Container';
import Footer from '../component/Footer';
import ArticleCard from '../component/ArticleCard';
import Hero from '../component/Hero';

import chem from '../images/chem.jpg';
import math from '../images/math.jpg';
import biology from '../images/biolog.jpg';




export default function SignUp() {
  
  
  
  
  
  //start of linked code from simple fullstack 
  
  
  const [firstname ,setFirstname] = useState('')
  const [lastname ,setLastname] = useState('')


   const handlefirstChange = event => {
    setFirstname(event.target.value);
  }
  
  
  const handlelastChange = event => {
    setLastname(event.target.value);
  }


 const handleSubmit = event => {
 
    event.preventDefault();

    // only json can be passed so you have to pass the json as a params to the json 
     
     console.log( firstname )
     
    const user = {
      firstnamex : firstname ,
      lastnamex : lastname 
      
    };
    
    
    axios.post(`http://localhost:5000/api/signup`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    
    }
    


// end of fullstack 










  return (
    <>
      <Navbar />
    
      
     
      <Container>
        
        <form onSubmit={handleSubmit}>
        
  <div className="row">
    <div className="col">
    	<label for="firstname">First Name</label>
    	
      <input type="text" className="form-control" id="firstname" name={firstname}  value={firstname}  onChange={handlefirstChange} />
      
    </div>
    <div className="col">
    	<label for="lastname">Last Name</label>
      <input type="text" className="form-control" id="lastname" name={lastname}   value= {lastname} onChange={handlelastChange} />
    </div>
  </div>      
        
  
  <button type="submit" className ="btn btn-primary" >Sign Up</button>
</form>

        
        
        
      </Container>
      <Footer />
    </>
  )
}
