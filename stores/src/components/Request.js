import React, { Component } from "react";
import axios from "axios";
import swal from 'sweetalert';

export default class Request extends Component{

    constructor(props){
        super(props);
        this.state={
          Category:"",
          Product_Name:"",
          Quantity:"",
          date:""
          
         
        }
    }

    handleInputChange= (e) =>{
        const {name,value}=e.target;
        
        this.setState({
          ...this.state,
          [name]:value
        })
      }

      onSubmit=(e)=>{
        e.preventDefault();
    
         const{Category,Product_Name,Quantity,date}=this.state;
    
        const data={
           Category:Category,
           Product_Name:Product_Name,
           Quantity:Quantity,
           date:date
       
        }

        console.log(data)

        axios.post("http://localhost:8000/request/save",data).then((res)=>{
          if(res.data.success){
            this.setState(
              {
                 Category:"",
                 Product_Name:"", 
                 Quantity:"",
                 date:""
                 
              
              }
    
            )
            // alert("successfuly added");
            swal("Request Success !");
          }
        })
    
      
      }
      render(){
        return(
          <body className="reqbody">

            <div class="row d-flex justify-content-center">
            <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
                
                <div class="card">
                    <h5 class="text-center mb-4">Request Items</h5>
                    <form class="form-card" onsubmit="event.preventDefault()">
                        <div class="row justify-content-between text-left">
                            <div class="form-group col-sm-6 flex-column d-flex"> 
                                <label class="form-control-label px-3">Category<span class="text-danger"> *</span></label>
                                <input type="text" pattern="[A-Za-z]" id="Category" name="Category"
                                 placeholder="Enter Item Category" onblur="validate(1)"
                                value={this.state.Category}onChange={this.handleInputChange}/> 
                            </div>

                            <div class="form-group col-sm-6 flex-column d-flex">
                                 <label class="form-control-label px-3">Item name<span class="text-danger"> *</span></label>
                                  <input type="text" id="Item" name="Product_Name" placeholder="Enter Item name" onblur="validate(2)"
                                  value={this.state.Product_Name}onChange={this.handleInputChange}/> 
                            </div>
                        </div>
                        
                        <div class="row justify-content-between text-left">
                            <div class="form-group col-sm-6 flex-column d-flex"> 
                                <label class="form-control-label px-3">Quantity( Kg / L)<span class="text-danger"> *</span></label> 
                                <input type="number" id="quantity" name="Quantity" placeholder="Enter Quantity" onblur="validate(3)"
                                value={this.state.Quantity}onChange={this.handleInputChange}/> 
                            </div>

                            <div class="form-group col-sm-6 flex-column d-flex"> 
                                <label class="form-control-label px-3">Required date<span class="text-danger"> *</span></label> 
                                <input type="date" id="date" name="date" placeholder="" onblur="validate(5)"
                                value={this.state.date}onChange={this.handleInputChange}/> 
                            </div>
                           
                        </div>

                     
                    
                        

                        <div class="row justify-content-end">
                           
                            <div class="form-group col-sm-6"> 
                                <button type="submit" class="btn-block btn-primary"><a href="/greq" 
                                 style={{textDecoration:'none',color:'white'}}>Get Request</a></button>
                                
                            </div>

                            <div class="form-group col-sm-6"> 
                                <button type="submit" class="btn-block btn-primary" onClick={this.onSubmit}>Request </button>
                            </div>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    

       
        </body>  
        )
    }
}


