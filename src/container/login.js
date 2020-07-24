import React from "react";
import logo from "../assets/logo.png";
import topLogo from "../assets/topLogo.png";
import { Input } from 'antd';
import {EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login=()=>{
    return(
        <>
        <div className="container-fluid">
            <left><img src={topLogo}/> </left>
        </div>
        <div style={{display:"flex",
    alignItems:"center",
    flexDirection:"column",
    }} className="container-fluid">
            <img style={{margin:"20px"}} src={logo}/>
            <h1 style={{fontFamily: 'Work Sans',fontWeight:"800"}}>Login to your account</h1>
            <br/>
            <div className="container">
            <center><Input style={{backgroundColor:"#F2F2F2",width:"35%",height:"50px"}} placeholder="Email Id" /></center><br/>
            <center>
            
            <Input type="password" style={{backgroundColor:"#F2F2F2",width:"35%",height:"50px"}} placeholder="Password" />
            </center><br/>
            <center><Link to="/"><Button style={{width:"35%",height:"50px"}} variant="dark" >Login</Button></Link></center>
            </div>
        </div>
        </>
    )
}
export default Login;