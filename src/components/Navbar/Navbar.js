import React,{Component} from "react";
import { Button } from "../Button";
import {MenuItems} from "./MenuItems"
import'./Navbar.css'


class Navbar extends Component {
    state = {clicked:false}
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
            <nav className="Navbarlogo">   
                <div className="Navbar-items">
                <h1 className="navbar-logo">Government Of Karnataka</h1>
                <h4 className="dept">Department of Public Grievance</h4>
                <h4 className="city">Mysore City</h4>
                </div>
                <div className="menu-icon" onClick={this.handleClick}>
                <i className={this.state.clicked ? 'fas fa-times' :  'fas fa-bars'}></i>  
                </div>
                <ul className = {this.state.clicked ? 'nav-menu active' : 'nav-menu'} > 
                   {MenuItems.map((item, index) => {
                       return(
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                            {item.title}
                            
                            </a>
                        </li> 
                       )
                   })}

                   
                </ul>
                

            </nav>
        )
    }
}

export default Navbar