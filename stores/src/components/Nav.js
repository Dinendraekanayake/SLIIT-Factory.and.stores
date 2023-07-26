import React, { Component } from "react";



export default class Nav extends Component{
    render(){
        return(
  
                 <html>
       
       <div className="nav1">
       
       
               <h1 className="dash">Nihon system</h1>
               <img src="./images/Nihon Logo-01.png" alt="" className="logoo"/>
               
       
       
           </div>
           <nav className="nav2">
               <ul>
                   <li>
                       <a href="#" className="logo">
                           <img src="./images/dottt.png" alt="" />
                       </a>
                   </li>
                   <li><a href="#" className="a1"><img src="../images/2144.png" alt="" className="imge"/><span className="nav-item">Home</span></a></li>
                   <li><a href="#" className="a1"><img src="./images/hr.png" alt=""className="imge"/><span className="nav-item">Human&nbsp;Resource&nbsp;Management</span></a></li>
                   <li><a href="#" className="a1"><img src="./images/pro.png" alt="" className="imge"/><span className="nav-item">Procuments&nbsp;Management</span></a></li>
                   <li><a href="#" className="a1"><img src="./images/sales-pipeline.png" alt="" className="imge"/><span className="nav-item">Sales&nbsp;and&nbsp;Marketing</span></a></li>
                   <li><a href="#" className="a1"><img src="./images/research.png" alt="" className="imge"/><span className="nav-item">Research&nbsp;and&nbsp;Development</span></a></li>
                   <li><a href="#" className="a1"><img src="./images/acccount.png" alt="" className="imge"/><span className="nav-item">Accounts&nbsp;and&nbsp;Finance</span></a></li>
                   <li><a href="#" className="a1"><img src="./images/legal.png" alt=""className="imge"/><span className="nav-item">Legal&nbsp;and&nbsp;Regulatory</span></a></li>
                   <li><a href="/storeslog" className="a1"><img src="./images/warehouse.png" alt="" className="imge"/><span className="nav-item">Factory&nbsp;and&nbsp;Stores</span></a></li>
                   <li><a href="#" className="a1"><img src="./images/transportation-management-system.png" alt="" className="imge"/><span className="nav-item">Travel&nbsp;and&nbsp;Transport</span></a></li>
                   {/* <li><a href="/expdf" className="a1"><img src="./images/pdf.png" alt="" className="imge"/><span className="nav-item"></span></a></li> */}
               </ul>
       
       
       
           </nav>
           </html>
       
        
        )
    }
}