import React, { Component } from "react";

 export default class Choose extends Component{
     
  
     render(){
         return(
            <body className="chos">
            <div >
            <lable className="chlable">
        <button class="pushable">
        <span class="front"><a href="/inv" 
                style={{textDecoration:'none',color:'white'}}>Inventory Details</a>
          
        </span>
      </button>

      <button class="pushable">
        <span class="front1"><a href="/ass" 
                style={{textDecoration:'none',color:'white'}}>Assets and Maintenance</a>
             
        </span>
      </button>

      <button class="pushable">
        <span class="front1"><a href="/req" 
                style={{textDecoration:'none',color:'white'}}>Request</a>
             
        </span>
      </button>
    </lable>
            
    </div>
    </body>
         )
     }
 }