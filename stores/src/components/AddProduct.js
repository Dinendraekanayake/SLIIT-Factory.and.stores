import React, { Component } from "react";
import axios from "axios";

import swal from 'sweetalert';

const initialst={
      Category:"",
      Product_Name:"",
      Price:"",
      Quantity:"",
      Manufacture:"",
      Expiry:"",
      ErrorCategory:"",
      ErrorProduct_Name:"",
}

export default class AddProduct extends Component{

 
  constructor(props){
    
    super(props);
    this.state=initialst;
  }

  handleInputChange= (e) =>{
    const {name,value}=e.target;

    this.setState({
      ...this.state,
      [name]:value
    })
  }


  validate=()=>{
    let ErrorCategory="";
    let ErrorProduct_Name="";

    var Categoryname=/^[A-Za-z\s]*$/; 
    if(!this.state.Category.match(Categoryname)){
      ErrorCategory='Please Enter the Letter Only...'

    } 
    var pn=/^[A-Za-z\s]*$/;
    if(!this.state.Product_Name.match(pn)){
      ErrorProduct_Name='Please Enter the Letter Only...'
    }
    if(ErrorCategory||ErrorProduct_Name){
      this.setState({ErrorCategory,ErrorProduct_Name});
      return false;
    }

    return true;
  }




  onSubmit=(e)=>{
    e.preventDefault();

    const{Category,Product_Name,Price,Quantity,Manufacture,Expiry}=this.state;

    const data={
      Category:Category,
      Product_Name:Product_Name,
      Price:Price,
      Quantity:Quantity,
      Manufacture:Manufacture,
      Expiry:Expiry
    }

    const isvalid=this.validate();
    if(isvalid){
      console.log(this.state)

      this.setState(initialst);

      axios.post("http://localhost:8000/smanager/save",data).then((res)=>{
        if(res.data.success){
          swal("Add successfuly !", "You clicked the button!", "success");

          this.setState(
            {
              Category:"",
              Product_Name:"",
              Price:"",
              Quantity:"",
              Manufacture:"",
              Expiry:"",
            
            }
  
          )
          
        }
      })
    }
    

  
  }
    render(){
        return(
          <body className="addproductbg">
        <h1>&nbsp;</h1>
        <h4>&nbsp;</h4>
        
        <div className="contain1">
          
        <form>
            <div class="productTopic">
            <h2> Add New Products</h2>
            
            </div>
            <center>
            <div >
                <input type="text" class="productinput-box2"  placeholder="Enter product Category" name="Category"
                 value={this.state.Category}onChange={this.handleInputChange}/>
                 <div style={{fontSize:12, color:"red"}}>{this.state.ErrorCategory}</div>
            </div>
            <div>    
                <input type="text" class="productinput-box2" placeholder="Enter Product Name" name="Product_Name"
                 value={this.state.Product_Name}onChange={this.handleInputChange}/>
                <div style={{fontSize:12, color:"red"}}>{this.state.ErrorProduct_Name}</div>
            </div>
            </center>
            <label>
                <input type="number" class="productinput-box2" placeholder="Enter product Price" name="Price" 
                value={this.state.Price}onChange={this.handleInputChange}/>
                <input type="text" class="productinput-box2" placeholder="Enter Product Quantity" name="Quantity"
                 value={this.state.Quantity}onChange={this.handleInputChange}/>
            </label>
        
            <center>
            <label>
                Manufacture Date :-
                <input type="date" class="productinput-box1" placeholder="Manufacture Date" name="Manufacture" 
                value={this.state.Manufacture}onChange={this.handleInputChange}/>
            </label>
            <label>
                E x p i r y D a t e  :-
                <input type="date" class="productinput-box1" placeholder=" Enter Expiry Date" name="Expiry"
                 value={this.state.Expiry}onChange={this.handleInputChange}/>
            </label>
            </center>
            <button type="submit" class="productsumbit-btn" onClick={this.onSubmit}>Submit</button>
            
        </form>
    </div>
    
      </body>
        )
    }
}