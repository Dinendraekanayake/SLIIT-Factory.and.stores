import React, { Component } from "react";
import axios from 'axios';

export default class AssetsAndMaintainance extends Component{

  constructor(props){
    super(props);

    this.state={
        store:[]
    };
}

componentDidMount(){
    this.retrievestore();
}
retrievestore(){
    axios.get("http://localhost:8000/maintaince/get").then(res=>{
        if(res.data.success){
            this.setState({
                store:res.data.extgstore
            });
            console.log(this.state.store)
        }

    });
}

  render(){
    return(
        <body className="ambg">
        <h1>&nbsp; </h1>
          <div className="cantainer">
        <div class="assetstopic">
        <h1>Assets And Maintenance </h1>
        </div> 
        <div className="containe4">

        <table className="table">
            <thead>
                <tr className="tr">
                <th scope="col" className>NO</th>
                    <th scope="col">Item</th>
                    <th scope="col">Department</th>
                    <th scope="col">Date</th>
                    <th scope="col">Cost( Rs.)</th>  
                </tr>
            </thead>
            <tbody>
                  {this.state.store.map((store,index)=>(
                    <tr>
                        <th scope="row">{index+1}</th>
                        <td>{store.item}</td>
                        <td>{store.department}</td>
                        <td>{store.date}</td>
                        <td>{store.cost}</td>
                    </tr>       
                 ))}   
                
            </tbody>
            
        </table>
        <button type="button" className="btn btn-success">
            <a href="/add" style={{textDecoration:'none',color:'white'}}>Add Maintenance</a></button>
    </div>
</div>       
</body>
    )
  }
}