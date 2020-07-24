import React from "react";
import {Navbar, Nav, Button} from "react-bootstrap";
import classes from "../CSS/navbar.module.css";
import { NavLink} from "react-router-dom";
import {  UserOutlined } from '@ant-design/icons';
import navlogo from "../assets/navlogo.png";

const CustomNavbar = ()=>{
    return(
        <>
        <div>
        <Navbar className={classes.Navbar} variant="dark">
            <Navbar.Brand href="#home">
            <span style={{color:"white"}}><img src={navlogo}/></span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <NavLink to="/login" className={classes.Link}><Nav  href="#home"><UserOutlined style={{margin:"3px 10px 0 0"}} /> Account</Nav></NavLink>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </div>
        </>
    )
}
export default CustomNavbar;