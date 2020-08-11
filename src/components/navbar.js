import React,{useState} from "react";
import {Navbar, Nav, Button} from "react-bootstrap";
import classes from "../CSS/navbar.module.css";
import { NavLink, Link, Redirect} from "react-router-dom";
import {  UserOutlined } from '@ant-design/icons';
import navlogo from "../assets/navlogo.png";
import {Grid, AppBar, Menu, MenuItem} from '@material-ui/core';
import fire from "../fire";
import user from '../assets/user.png';


const CustomNavbar = (props)=>{
    
    const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(null);
    return(
        <>
        <div>
        <Navbar className={classes.Navbar} variant="dark" expand="md">
            <Navbar.Brand href="#home">
            <span style={{color:"white"}}><img src={navlogo}/></span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <NavLink to="/home" className={classes.Link}><Nav  href="#home"><p>Get Skilled</p></Nav></NavLink>
                <NavLink to="/" className={classes.Link}><Nav  href="#home"><p>Books</p></Nav></NavLink>
                <NavLink to="/" className={classes.Link}><Nav  href="#home"><p>Study Material</p></Nav></NavLink>
                <NavLink to="/" className={classes.Link}><Nav  href="#home"><p>Search</p></Nav></NavLink>
                <NavLink to="/account" className={classes.Link}><Nav  href="#home"><p><i style={{paddingTop:"4px",paddingRight:"1px"}} class="fas fa-user-circle"></i> Account</p></Nav></NavLink>
                <NavLink to="/login"><Nav  className={classes.Link}><p>Logout</p></Nav></NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </div>
        </>
    )
}
export default CustomNavbar;