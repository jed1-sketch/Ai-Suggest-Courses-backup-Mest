

import React, { useState,useEffect, Component } from 'react';
import axios from 'axios';


export default function List(props) {





const [list, setList ] = useState([])

useEffect(() => {

    setTimeout(function () {
      getslist()


    }, 2000)

  }, []);
  
  


  

 

  // Retrieves the list of items from the Express app
  const getslist = () => {
  
  
  
	    axios.get('/api/getList',{

           }).then(function (response) {
           
           console.log( response);
           
           })
	    .catch(function (error) {
             console.log(error);
            })

	    
	    
	  }

  




    return (
    
    
      <div className="App">
      
      
        <h1>List of Items</h1>
        {/* Check to see if any items are found*/}
        {list.length ? (
          <div>
            {/* Render the list of items */}
            {list.map((item) => {
              return(
                <div>
                  {item}
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <h2>No List Items Found</h2>
          </div>
        )
      }
      </div>
    );
  }


;
