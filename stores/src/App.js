import React,{Component} from "react";
import{BrowserRouter,Route, Routes} from 'react-router-dom';
import InventoryDetails from './components/InventoryDetails'
import './components/css/home.css';
import './components/css/style.css'

import AddProduct from "./components/AddProduct";
import Login from "./components/Login";
import Choose from "./components/Choose";
import AssetsAndMaintainance from "./components/AssetsAndMaintainance";
import Nav from "./components/Nav";

import AddMaintainance from "./components/AddMaintainance";
import Request from "./components/Request";
import ViewRequest from "./components/ViewRequest";
import InvUpdate from "./components/InvUpdate";
import InvPDF from "./components/InvPDF";
import InvReport from "./components/InvReport";
import ExampleInv from "./components/ExampleInv";


export default class App extends Component{
  render(){
    
    return(
      <BrowserRouter>
      
      <div>
      <Nav/>
      
        <Routes>
        <Route path="/" element={<Login/>}/> 
        <Route path="/storeslog" element={<Login/>}/> 
        <Route path="/ch" element={<Choose/>}/> 
        <Route path="/inv" element={<InventoryDetails/>}/>
        <Route path="/ass" element={<AssetsAndMaintainance/>}/>
        <Route path="/create" element={<AddProduct/>}/>
        <Route path="/smanager/update/:id" element={<InvUpdate/>}/>
        <Route path="/add" element={<AddMaintainance/>}/>
        <Route path="/req" element={<Request/>}/>
        <Route path="/greq" element={<ViewRequest/>}/>
        <Route path="/pdf" element={<InvPDF/>}/>
        <Route path="/inpdf" element={<InvReport/>}/>
        <Route path="/expdf" element={<ExampleInv/>}/>
        
        </Routes>


      </div>
      <div></div>
      
      
      </BrowserRouter>
      
     
    )
  }
}