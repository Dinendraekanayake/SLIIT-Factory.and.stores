import React, { Component } from "react";
import axios from 'axios';


export default class InvPDF extends Component{

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

onDelete = (id)=>{
  axios.delete(`http://localhost:8000/smanager/delete/${id}`).then((res)=>{
    alert("deleted succcess");
    this.retrievePosts();
  })
}
  render(){
    return(

      <body className="invpdfbg">
      
    
   
      <div className="container">
        
        
      <div>

        
      <nav className="navbar">
        <div className="container-fluid">
        <form className="d-flex">
             <input className="invsearch" type="search" placeholder="Search" 
             aria-label="Search" name="searchQuery" onChange={this.handleSearchArea}/>

          <button type="button" class="btn btn-primary">
              <i class="fas fa-search"></i>
            </button>
         </form>
         </div>
        </nav>  
<br/>
<div className="containepdf">
      <table className="table">
       
  <thead>

 
    <tr className="tr">
            <th class="table-info" scope="col" >NO</th>
            <th class="table-info" scope="col">Category</th>
            <th class="table-info" scope="col">Product_Name</th>
            <th class="table-info" scope="col">Price</th>
            <th class="table-info" scope="col">Quantity( Kg / L)</th>
            <th class="table-info" scope="col">Manufacture</th>
            <th class="table-info" scope="col">Expiry</th>
      
    </tr>
  </thead>
  <tbody >
    {this.state.invposts.map((invposts,index)=>(
       <tr>
       <th class="table-info" scope="row">{index+1}</th>
       <td class="table-active">{invposts.Category}</td>
       <td>
          
          {invposts.Product_Name}
       
       </td>
       <td class="table-active">{invposts.Price}</td>
       <td>{invposts.Quantity}</td>
       <td class="table-active">{invposts.Manufacture}</td>
       <td>{invposts.Expiry}</td>
       
       
       
     </tr>

    ))}
   
   
  </tbody>

</table>

       

      </div>
      </div>
      </div>
      </body>
    )
  }
}