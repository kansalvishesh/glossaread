import React, { Component } from "react";
import logo from "../assets/logo.png";
import topLogo from "../assets/topLogo.png";
import { Input } from 'antd';
import { Button } from "react-bootstrap";
import classes from "../CSS/login.module.css";
import {connect} from "react-redux";
import * as actions from "../entities/action";
import Account from "./account"
import { WindowsFilled } from "@ant-design/icons";

class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            ack:'',
            msg:'',
            isAuth:false
        }
    }
    componentDidMount(){
        localStorage.clear();
        if(this.props.ack===1){
            window.location.reload(true);
        }
    }

    login=(e)=>{
        // console.log("MY STATE",this.state.msg)
        this.props.fixedlogin(this.state)
        this.setState({ack:this.props.ack})
       localStorage.setItem('pass',this.state.password)
        console.log("msg",this.props.msg)
        console.log('my PASSWORD',this.state.password)
        if(this.state.email.length===0){
            alert('Please enter an Email Id to continue')
        }
    }
    forgotpasswordlink=()=>{
        this.props.forgotpass(this.state.email)
        // if(this.state.email.length===0){
        //     alert('Please enter an Email Id to continue')
        //     window.location.reload(true)
        // }
    }

    handleChange1 = (e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    handleChange2 = (e)=>{
        this.setState({[e.target.name]:e.target.value})
     
        
    }
    componentDidUpdate(){
           
            if(this.props.ack===1){
                console.log(this.props.userData)
                localStorage.setItem('isAuth',JSON.stringify(this.props.userData))
                console.log('IS AUTH',localStorage.getItem('isAuth'))
                this.props.history.push('/') 
           }else if(this.props.ack===0){
               if(this.props.msg!==undefined){
                alert(this.props.msg)
               }
              
               window.location.reload(true)
           }else if(this.props.ack2===1){
                alert(this.props.msg2)
                window.location.reload(true)
           }else  if(this.props.ack2===0){
            if(this.state.email.length===0){
                alert('Please enter an Email Id to continue')
                window.location.reload(true)
            }else{
                alert('This Email Id is not registered')
                window.location.reload(true)
            }
              
           }
        
    }
    render(){
        
        // console.log(this.props)

    return(
        <>
            {
                this.state.ack===2?(<Account email={this.state.email} password={this.state.password} />):(<>
                <div className="container-fluid">
            <left><img src={topLogo}/> </left>
        </div>
        <div style={{display:"flex",
    alignItems:"center",
    flexDirection:"column",
    }} className="container-fluid">
            <img style={{margin:"20px"}} src={logo}/>
            <center><h2 className={classes.header} style={{fontFamily: 'Work Sans'}}>Login to your account</h2></center>
            <br/>
            <div className="container">
            <center><Input value={this.state.email} onChange={this.handleChange1} name="email" className={classes.myinput} placeholder="Email Id" /></center><br/>
            <center>
            
            <Input value={this.state.password} onChange={this.handleChange2} name="password" type="password" className={classes.myinput} placeholder="Password" />
            </center><br/>
            <center><Button variant="dark" onClick={this.login} className={classes.myButton} >Login</Button></center><br/>
            <center><p onClick={this.forgotpasswordlink} className={classes.forgotpasswordlink} style={{textDecoration:"underline #889094",cursor:"pointer"}}>Forgot password?</p></center>
          
            </div>
        </div>
                </>)
            }
        </>
    )
}
}
const mapStateToProps = (state) => {
    return {
      loading:state.loading,
      userData:state.userData ,
      ack:state.ack,
      msg:state.msg,
      ack2:state.ack2,
      msg2:state.msg2,
      contentresponse:state.contentresponse
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        fixedlogin:(data)=>{
            dispatch(actions.login(data))
        },
        forgotpass:(data)=>{
            dispatch(actions.forgotpassword(data))
        },
        getcontent:(data)=>{
            dispatch(actions.getcontent(data))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)

