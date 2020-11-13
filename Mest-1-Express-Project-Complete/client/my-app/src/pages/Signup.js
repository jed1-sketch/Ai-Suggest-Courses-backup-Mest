

import React, { useState } from 'react';
import axios from 'axios';

export default function Signup(){


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
    
    
    axios.post(`/api/signup`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    
    }
    
    
    
    
return (
	
	
	 <div>
        <form onSubmit={handleSubmit}>
        
           <label>
            Person Name:
            <input type="text" name={firstname}  value={firstname}  onChange={handlefirstChange} />
            </label>
            
            <label>
            Last Name:
            <input type="text" name={lastname}   value= {lastname} onChange={handlelastChange} />
          </label>
          
          <button type="submit">Add</button>
        </form>
     	 </div>


)
}
