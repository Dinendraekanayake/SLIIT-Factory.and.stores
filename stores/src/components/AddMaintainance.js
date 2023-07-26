import React, { Component } from "react";
import axios from "axios";
import swal from 'sweetalert';

const maintinlist={
  item:"",
  department:"",
  date:"",
  cost:"",
  Erroritem:"",
}

export default class AddMaintainance extends Component{

  constructor(props){
    super(props);
    this.state=maintinlist;   
    
  }

  handleInputChange= (e) =>{
    const {name,value}=e.target;

    this.setState({
      ...this.state,
      [name]:value
    })
  }

  mvalitade=()=>{
    let Erroritem="";

    var Itemname=/^[A-Za-z\s]*$/; 
    if(!this.state.item.match(Itemname)){
      Erroritem='Please Enter the Letter Only...'

    } 
   
    if(Erroritem){
      this.setState({Erroritem});
      return false;
    }

    return true;
  }

  onSubmit=(e)=>{
    e.preventDefault();

    const{item,department,date,cost}=this.state;

    const data={
      item:item,
      department:department,
      date:date,
      cost:cost,
      
    }
    const ismvalidate=this.mvalitade();
    if(ismvalidate){
      console.log(this.state)

      this.setState(maintinlist);

      axios.post("http://localhost:8000/maintaince/save",data).then((res)=>{
        if(res.data.success){
          this.setState(
            {
              item:"",
              department:"",
              date:"",
              cost:"",
              
            }
  
          )
          // alert("successfuly added");
          swal({
            title: "Successfuly added",
            icon: "success",
            button: "OK .",
          });
  
        }
      })
    }

  }
    render(){
        return(
          <body className="AddMainainbg">

         <div className="">
               <h1>&nbsp; </h1>    
          </div>
         <div className="containe5">
         <form >        
         <div className="maintaintopic">
               
               <h1>Add Maintenance </h1>
          </div>
            <label >
               
                <input type="text" className="productinput-box3" placeholder="Enter Item Name" name="item"
                 value={this.state.item}onChange={this.handleInputChange}/>
                <div style={{fontSize:12, color:"red"}}>{this.state.Erroritem}</div>
            </label>
            
            <label >
               
               <input type="number" className="productinput-box3" placeholder="Enter Cost" name="cost" 
               value={this.state.cost}onChange={this.handleInputChange}/>
           
           </label>
            <center>
            <label className="AddMainForm">
            
            <select className="productinput-box4" name="department" 
            value={this.state.department}onChange={this.handleInputChange}>
                    <option value="" disabled selected hidden>Select Department . . </option>
                    <option value="Factory and Stores">F a c t o r y &nbsp;&nbsp; a n d &nbsp;&nbsp; S t o r e s</option>
                    </select>      
            </label >           
            <label className="AddMainForm">               
                <input type="date" className="productinput-box3" placeholder=" Date" name="date" 
                value={this.state.date}onChange={this.handleInputChange}/>
            </label>
            </center>
            <button type="submit" className="" onClick={this.onSubmit}>Submit</button>
           
        </form>

      </div>
      </body>
      
        )
    }
}