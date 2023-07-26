 import React, { Component, useState } from "react";



 export default class Login extends Component{
     
    
     render(){
         return(
            <body>
            <div class="containerlogin">
        <div class="loginimage">
            
        </div>
        
        <div class="login">
            
            
                <h1>Login</h1>
                <div class="Logininput icon">
                <input type="email"  class="Logininput-box" placeholder="Enter Your Email" /> 
                
                <input type="password" class="Logininput-box" placeholder="Enter Your Password"/>
                </div>
                
                <button type="button"className="btn btn-success"><a href="/ch" 
                style={{textDecoration:'none',color:'white'}}>Login</a></button>

        </div>
        
        </div>
    
            
      </body>
         )
     }
 }