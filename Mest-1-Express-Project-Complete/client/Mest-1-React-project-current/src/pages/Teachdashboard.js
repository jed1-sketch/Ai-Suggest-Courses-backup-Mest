


import React from 'react';
import Navbar from '../component/Navbar';


import Container from '../component/Container';
import Footer from '../component/Footer';



import chem from '../images/chem.jpg';
import math from '../images/math.jpg';
import biology from '../images/biolog.jpg';




export default function Teachdashboard() {
  
  let left = false;

  return (
    <>
      <Navbar />
    
      
     
      <Container>
        
        
				<div className="container mx-auto my-5">
       		 <h1 className="  ml-5 ">  Teachers Portal</h1>
        			</div>
        <div className="container-fluid h-100 w-100" style={{ maxWidth: "800px", margin: "auto" }} >
        
        
        <div class="card-deck">
        
  <div className="card">
    <img className="card-img-top" src={chem} alt="Card image cap"/>
		    <div className="card-body">
		      <h5 className="card-title">Chemistry</h5>
			<h3 className="card-title">4.5~<small class="text-muted">ratings</small></h3>
			
			<div className="btn-group-toggle  w-50 mx-auto " data-toggle="buttons">
  	   		   <label className="btn btn-secondary active">
    		              <input type="checkbox" checked autocomplete="off"  /> Added
  	                  </label>
	              </div>
	              
		      <p className="card-text"><small className="text-muted">3.5k people  registered for this course</small></p>
		    </div>
  </div>
  
  <div className="card">
    <img className="card-img-top" src={math} alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">Math</h5>
	<h3 className="card-title">4.0~<small class="text-muted">ratings</small></h3>
	
	<div className="btn-group-toggle  w-50 mx-auto " data-toggle="buttons">
  	   <label className="btn btn-secondary active">
    		<input type="checkbox" checked autocomplete="off"  /> Added
  	  </label>
	</div>
	
       <p className="card-text"><small className="text-muted">3.5k people  registered for this course</small></p>	
    </div>
  </div>
  
  <div className="card">
    <img className="card-img-top" src={biology} alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">Biology</h5>
	<h3 className="card-title">4.2~<small class="text-muted">ratings</small></h3> 
			<div className="btn-group-toggle  w-50 mx-auto " data-toggle="buttons">
  	   		   <label className="btn btn-primary active">
    		              <input type="checkbox" checked autocomplete="off"  /> Add
  	                  </label>
	              </div>	
       <p className="card-text"><small className="text-muted">3.5k people  registered for this course</small></p>	
    </div>
  </div>
  
    
  </div>
        <div  className="container mx-auto my-5">
        <button type="button" className="btn btn-primary btn-lg btn-block mx-auto ">Add a course </button>
        <button type="button" className="btn btn-secondary btn-lg btn-block mx-auto ">Delete a course </button>
        </div>
</div>
        
        
      </Container>
      <Footer />
    </>
  )
}
