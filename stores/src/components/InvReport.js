import React, { Component } from "react";
import axios from 'axios';
export default class InvReport extends Component{

  constructor(props){
    super(props);

    this.state={
      invposts:[]
    };
  }

componentDidMount(){
  this.retrieveinvposts();
}

retrieveinvposts(){
  axios.get("http://localhost:8000/smanager/get").then(res=>{
    if(res.data.success){
      this.setState({
        invposts:res.data.extistingEmp
      });
      console.log(this.state.invposts)
    }
  });
}


handleClick=async ()=>{
  const response=await fetch()
}

filterData(invposts,searchKey){
  const result=invposts.filter((invposts)=>
  invposts.Product_Name.includes(searchKey)
  
  
  )
  this.setState({invposts:result})
}
handleSearchArea= (e) =>{
  const searchKey=e.currentTarget.value;

  axios.get("http://localhost:8000/smanager/get").then(res=>{
    if(res.data.success){

    this.filterData(res.data.extistingEmp,searchKey)
     }
  });
}

  render(){
    return(

      <body className="reportbg">
      <div className="container">
      <div>
      <nav className="navbar">
      <div className="container-fluid">
      <form className="d-flex">
           <input className="invsearchR" type="search" 
           aria-label="Search" name="searchQuery" onChange={this.handleSearchArea}/>
 
       </form>
       </div>
      </nav> 
<br/>
<div className="containe1R">
      <table className="table">
       
  <thead >
    <tr className="tr">
      <th scope="col" className>NO</th>
            <th scope="col">Category</th>
            <th scope="col">Product_Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity( Kg / L)</th>
            <th scope="col">Manufacture</th>
            <th scope="col">Expiry</th>         
    </tr>
  </thead>
  <tbody >
    {this.state.invposts.map((invposts,index)=>(
       <tr>
       <th scope="row">{index+1}</th>
       <td>{invposts.Category}</td>
       <td>
          
          {invposts.Product_Name}
       
       </td>
       <td>{invposts.Price}</td>
       <td>{invposts.Quantity}</td>
       <td>{invposts.Manufacture}</td>
       <td>{invposts.Expiry}</td>
       
       
     </tr>

    ))}
   
   
  </tbody>
  
</table>

      </div>
 
      </div>
      </div>
      
       <div className="pdfcssR">
       <a class="btn btn-link" href="/expdf"  >
          <i ></i>&nbsp;
        </a>
      
        </div> 
      </body>
    )
  }
}