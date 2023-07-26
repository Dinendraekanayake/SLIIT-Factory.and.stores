import React, { useContext, useEffect, useState } from 'react'
import {  useParams,useNavigate } from 'react-router-dom'
import { updatedata } from './context/ContextProvider'

import swal from 'sweetalert';

const InvUpdate  = () => {
    const {updata, setUPdata} = useContext(updatedata)

    const history = useNavigate("");
    const [inpval,setINP] = useState({
        Category:"",
        Product_Name:"",
        Price:"",
        Quantity:"",
        Manufacture:"",
        Expiry:"",
    })

    const setdata = (e)=>{
        console.log(e.target.value);
        const {name,value} = e.target;
        setINP((preval)=>{
            return{
                ...preval,
                [name]:value
            }
        })
    }
    const { id } = useParams("");
    console.log(id);

    const getdata = async () => {

        const res = await fetch(`http://localhost:8000/smanager/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setINP(data)
            console.log("get data");

        }
    }

    useEffect(() => {
        getdata();
    }, []);


    const updateuser = async(e)=>{
        e.preventDefault();

        const  {Category,Product_Name,Price,Quantity,Manufacture,Expiry} = inpval;

        const res2 = await fetch(`http://localhost:8000/smanager/update/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                Category,Product_Name,Price,Quantity,Manufacture,Expiry
            })
        });

        const data2 = await res2.json();
        console.log(data2);

        if(res2.status === 422 || !data2){
            alert("fill the data");
        }else{
            // alert("update success")
            swal("Update successfuly !", "", "success");
            history("/inv")
            setUPdata(data2);
        }

    }

    return (
        <div >
              <h1>&nbsp;</h1>
              <h4>&nbsp;</h4>
            <div className="contain1">
            <form >
            <div class="productTopic">
            <h2> Update Products</h2>
            
            </div>

                    <label>
                       
                        <input type="text"placeholder="Enter Product Category" value={inpval.Category} 
                        onChange={setdata} name="Category" className="productinput-box2" />

                        <input type="text"placeholder="Enter Product Name" value={inpval.Product_Name} 
                        onChange={setdata} name="Product_Name" className="productinput-box2" />

                    </label>

                    <label>
                       
                        <input type="text"placeholder="Enter Product price" value={inpval.Price} 
                        onChange={setdata} name="Price" className="productinput-box2" />

                        <input type="text"placeholder="Enter Product Quantity" value={inpval.Quantity} 
                        onChange={setdata} name="Quantity" className="productinput-box2" />

                    </label>
                    <center>
                    <label>
                     Manufacture Date :-
                    <input type="date" class="productinput-box1" onChange={setdata} value={inpval.Manufacture}
                    name="Manufacture" />

                   </label>

                   <label>
                     E x p i r y &nbsp; D a t e  :-
                    <input type="date" class="productinput-box1" onChange={setdata} value={inpval.Expiry}
                    name="Expiry"  />

                   </label>
                
                   </center>
                
                <button type="submit" class="productsumbit-btn" onClick={updateuser} >update</button>
                
            </form>
        </div>
        </div>
    )
}

export default InvUpdate 