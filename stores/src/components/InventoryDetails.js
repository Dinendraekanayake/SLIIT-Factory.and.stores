import React, { Component } from "react";
import axios from 'axios';
import swal from 'sweetalert';

export default class InventoryDetails extends Component{

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
    // alert("deleted succcess");
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this product detail!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Your product detail has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your product detail is safe!");
      }
    });
    this.retrievePosts();
  })
}
  render(){
    return(

      <body className="invbg">
      
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
<div className="containe1">
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
            <th scope="col">Action</th>       
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
       
       
       <td>
        <a className="btn btn-warning" href={`/smanager/update/${invposts._id}`}>
          <i className="fas fa-edit"></i>&nbsp;Edit
        </a>
        &nbsp;
        <a className="btn btn-danger" href="#" onClick={()=>this.onDelete(invposts._id)} >
          <i className="far fa-trash-alt"></i>&nbsp;Delete
        </a>
        &nbsp;
        &nbsp;
        
       </td>
     </tr>

    ))}
   
   
  </tbody>
  
</table>

<button type="button" className="btn btn-success"><a href="/create"
 style={{textDecoration:'none',color:'white'}}>+ Add New Product</a></button>


       

      </div>
      
        
      </div>
      </div>
      
      <div className="pdfcss">
      <a class="btn btn-link" href="/inpdf"  >
          <i ></i>&nbsp;
        </a>
        </div>
      </body>
    )
  }
}