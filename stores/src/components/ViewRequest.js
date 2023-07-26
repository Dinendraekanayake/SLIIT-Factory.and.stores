import React, { Component } from "react";
import axios from 'axios';
import swal from 'sweetalert';


export default class ViewRequest extends Component{

 
  constructor(props){
    super(props);

    this.state={
        invRequest:[]
    };
}

componentDidMount(){
    this.retrieveinvRequest();
}
retrieveinvRequest(){
    axios.get("http://localhost:8000/request/get").then(res=>{
        if(res.data.success){
            this.setState({
                invRequest:res.data.extginvRequest
            });
            console.log(this.state.invRequest)
        }

    });
}
handleClick=async ()=>{
    const response=await fetch()
  }
  
onDelete = (id)=>{
    axios.delete(`http://localhost:8000/request/delete/${id}`).then((res)=>{
    //   alert("deleted succcess");

    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this maintainance detail!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Your maintainance detail has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your maintainance detail is safe!");
        }
      });




      this.retrievePosts();
    })
  }



  render(){
    return(
        <body className="reqbg">
        <h1>&nbsp; </h1>
          <div className="cantainer">
        <div class="reqtopic">
        <h1 style={{textDecoration:'none',color:'ButtonFace' }}>View Requests </h1>
        
        </div>
         
        <div className="reqcontaine">

        <table className="table">
            <thead>
                <tr className="tr">
                <th scope="col" className>NO</th>
                    <th scope="col">Category</th>
                    <th scope="col">Product_Name</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">date</th>
                    <th scope="col">Action</th>
                   
                </tr>
            </thead>
            <tbody>
                  {this.state.invRequest.map((invRequest,index)=>(
                    <tr>
                        <th scope="row">{index+1}</th>
                        <td>{invRequest.Category}</td>
                        <td>{invRequest.Product_Name}</td>
                        <td>{invRequest.Quantity}</td>
                        <td>{invRequest.date}</td>
                        <td>
        
                    <a className="btn btn-danger" href="#" onClick={()=>this.onDelete(invRequest._id)} >
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                    </a>
       
                     </td>

                    </tr>
                
                 ))}   
                
            </tbody> 
            
            
        </table>
        {/* <button type="button" className="btn btn-success">
            <a href="/add" style={{textDecoration:'none',color:'white'}}>Add Maintenance</a></button> */}
    </div>

   


</div>
       
</body>
    )
  }
}