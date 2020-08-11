import React , {Component,useStyles} from "react";
import CustomNavbar from "../components/navbar";
import fire from "../fire";
import Login from "./login";
import { Button, Row,Col ,Modal} from "react-bootstrap";
import user from '../assets/test.png';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange } from '@material-ui/core/colors';
import classes from "../CSS/account.module.css"
import { Divider } from "@material-ui/core";
import {connect} from "react-redux";
import * as actions from "../entities/action";
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import InputLabel from '@material-ui/core/InputLabel';
import { Input } from 'antd';



class Account extends Component{
    constructor(props){
        super(props)
        this.state={
            user:{},
            year:'',
            open:false,
            fname:'',
            lname:'',
            file:null,
            show:false,
            email:JSON.parse(localStorage.getItem('isAuth')).user_profile.email,
            st:JSON.parse(localStorage.getItem('isAuth')).st,
            oldpass:'',
            newpass:'',
            confirmpass:'',
            showpass:false
          }
    }
    // filechange=(e)=>{
    //     this.setState({[e.target.name]:e.target.files[0]})
    //     console.log(this.state)
    // }
    handlepass=()=>{
        if(this.state.showpass){
            this.setState({showpass:false})
        }else{
            this.setState({showpass:true})
        }
    }
    
    handleSaveChanges=()=>{
        this.props.changepassword(this.state);
        this.setState({show:false})
        
    }
    handleChange2=(e)=>{
        this.setState({[e.target.name]:e.target.value})
      
    }
    handleShow=()=>{
        this.setState({show:true})
    }
    handleClose2=()=>{
        this.setState({show:false,oldpass:'',newpass:'',confirmpass:''})
    }
    handleFileClick=(e)=> {
        this.refs.fileUploader.click();
        this.setState({file:e.target.files})
        
    }
   
    handleClick=()=>{
        
        this.props.updateProfile(this.state)
        console.log(this.state)
    }

    namechange = (e)=>{
        this.setState({[e.target.name]:e.target.value})
        
    }
     handleChange = (event) => {
        this.setState({year:event.target.value});
      };
    
     handleClose = () => {
        this.setState({open:false});
      };
    
     handleOpen = () => {
        this.setState({open:true});
      };
      componentWillMount(){
        if(localStorage!==null){
            // const userDetails=JSON.parse(localStorage.getItem('isAuth'))
            // console.log(userDetails)
            // this.setState({user:userDetails})
           console.log('LOCAL RESP',JSON.parse(localStorage.getItem('isAuth')))
            if(this.state.user===null){
                this.setState({user:undefined})
              this.props.history.push('/login')
            }
            // console.log("USER ACK",userDetails.ack)
          }else{
            window.location.reload()
            this.props.history.push('/login')
          }
      }
      componentDidUpdate(){
        console.log("changepass msg",this.props.changepass);
        if(Object.keys(this.props.changepass).length!==0){
            if(this.props.changepass.ack===1){
                alert(this.props.changepass.msg+'! Please login again with your new password')
                this.props.history.push('/login')
                
            }else{
                alert(this.props.changepass.msg)
                window.location.reload()
            }
            
        }
      }
    render(){
        console.log("my props",this.props)
        const userDetails = JSON.parse(localStorage.getItem('isAuth'));
        
        // console.log("Yayyyyyy",userDetails)
        return(
            <>
            
                <div>
                    <CustomNavbar/>
                    <div className="container-fluid" style={{backgroundColor:"#F6F9FB",fontFamily:"Raleway"}}><br/>
                        <center><h2>Account Settings</h2></center>
                        <div className="container" style={{backgroundColor:"#FBFCFD",padding:"20px"}}>
                            <h4>Account Info</h4><br/>
                           
                           {/* <p> <i style={{marginRight:"30px"}} class="fas fa-user-circle fa-3x"></i>
                            <Button style={{position:"relative",top:"-11px",backgroundColor:"#E9680A",border:"none",padding:"10px",marginRight:"30px"}}>Upload Images</Button>
                            <span style={{fontSize:"4vw",textDecoration:"underline #889094",color:"#889094",position:"relative",top:"-11px"}}>Upload student Id(optional)</span>
                            </p> */}
                            <div>
                                <Row>
                                    <Col xs={6} sm={2} lg={2}>
                                    {/* <img style={{width:"3rem",marginBottom:"10px"}} src={user}/>  */}
                                    <Avatar src={userDetails.user_profile.profile_image} className={classes.orange}/>
                                    </Col>
                                    <Col style={{padding:"0"}} xs={6} sm={5} lg={2}>
                                       <center> <Button onClick={this.handleFileClick} style={{backgroundColor:"#E9680A",border:"none",padding:"10px",marginRight:"20px"}}>Upload Images</Button></center>
                                       
                                    <center><input style={{display:"none"}} accept="image/*" ref="fileUploader" name="file" onChange={this.filechange} type="file"></input></center>
                                    </Col>
                                    {/* <Col style={{paddingLeft:"15px"}} xs={12} sm={4} lg={3}>
                                   <p style={{textDecoration:"underline #889094",color:"#889094",position:"relative",top:"7px"}}>Upload student Id(optional)</p>
                                    </Col> */}
                                </Row>
                            </div><br/><br/>
                            <div >
                                <Row>
                                    <Col xs={6} sm={2} lg={2}> 
                                        <p>Email:</p>
                                    </Col>
                                    <Col style={{padding:"0"}} xs={6} sm={5} lg={2}>
                                       <center> <p> {userDetails.user_profile.email} </p></center>
                                    </Col>
                                   
                                </Row>
                            </div>
                            <div >
                                <Row>
                                    <Col xs={6} sm={2} lg={2}> 
                                        <p>Billing Info:</p>
                                    </Col>
                                    <Col style={{padding:"0"}} xs={6} sm={5} lg={2}>
                                       <center> <p>{userDetails.user_profile.email}</p></center>
                                    </Col>
                                    
                                </Row>
                            </div>
                            <div >
                                <Row>
                                    <Col xs={6} sm={2} lg={2}> 
                                        <p>Password :</p>
                                    </Col>
                                    <Col style={{padding:"0"}} xs={6} sm={5} lg={2}>
                                        <center>{
                                            this.state.showpass?(
                                                <>
                                                 <center> 
                                                <p> {localStorage.getItem('pass')} </p>
                                            </center>
                                            </>
                                            ):'*'.repeat(localStorage.getItem('pass').length)
                                            }</center>
                                    </Col>
                                    <Col style={{paddingLeft:"15px"}} xs={12} sm={4} lg={3}>
                                            {
                                                this.state.showpass?
                                                
                                                 <p onClick={this.handlepass} style={{textDecoration:"underline #889094",color:"#889094",cursor:"pointer"}}>Hide Password</p>
                                                : <p onClick={this.handlepass} style={{textDecoration:"underline #889094",color:"#889094",cursor:"pointer"}}>Show Password</p>
                                            }
                                    </Col>
                                    
                                </Row><br/>
                                <Row>
                                    <Col lg={6} sm={10} xs={12}>
                                       <Row>
                                       <Col style={{marginLeft:"10px",padding:"0",marginBottom:"10px"}} lg={5} md={5} sm={12}>
                                            <center><Button onClick={this.handleShow} className={classes.changebutton}>Change password</Button></center>
                                        </Col>
                                        <Modal centered show={this.state.show} onHide={this.handleClose2}>
                                            <Modal.Header>
                                            <Modal.Title>Change your password</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                            <Input name="oldpass" onChange={this.handleChange2} className={classes.input} placeholder="Enter current password"  type="text"/>
                                            <Input name="newpass" onChange={this.handleChange2} className={classes.input} placeholder="Enter new password"  type="text"/>
                                            <Input name="confirmpass" onChange={this.handleChange2} className={classes.input} placeholder="Confirm new password"  type="text"/>
                                            </Modal.Body>
                                            <Modal.Footer>
                                            <Button variant="secondary" onClick={this.handleClose2}>
                                                Close
                                            </Button>
                                            <Button variant="primary" style={{backgroundColor:"#E9680A",border:"none"}} onClick={this.handleSaveChanges} >
                                                Save Changes
                                            </Button>
                                            </Modal.Footer>
                                        </Modal>
                                        <Col style={{marginLeft:"10px",padding:"0"}} lg={5} md={5} sm={12}>
                                        <center><Button className={classes.changebutton}>Edit Email</Button></center>
                                        </Col>
                                       </Row>
                                    </Col>
                                </Row>
                            </div><br/>
                            <Divider/><br/>
                            <div className="container" style={{backgroundColor:"#FBFCFD",marginTop:"10px"}}>
                            <div>
                                <Row>
                                    <Col xs={6}>
                                        <h4 style={{float:"left"}}>Personal Details</h4>
                                    </Col>
                                    <Col  xs={6}>
                                        <Button className={classes.saveChanges} onClick={this.handleClick} style={{backgroundColor:"#E9680A",border:"none",padding:"10px",float:"right"}}>Save Changes</Button>
                                    </Col>
                                </Row><br/>
                                <Row>
                                <Col xs={12} sm={4}>
                                        <p>First Name</p>
                                        <Input name="fname" onChange={this.namechange} type="text" className={classes.input} placeholder="Rohit" />
                                    </Col>
                                    <Col  xs={12} sm={4}>
                                    <p>Last Name</p>
                                    <Input name="lname" type="text" onChange={this.namechange} className={classes.input} placeholder="Sharma" />
                                    </Col>
                                </Row><br/>
                                <Row>
                                {/* <Col xs={12} sm={4}>
                                        <p>User Name</p>
                                        <Input name="Username" type="text" className={classes.input} placeholder="username" />
                                    </Col> */}
                                    <Col  xs={12} sm={4}>
                                    <p>Phone Number</p>
                                            
                                        <Input name="Phone Number" type="text" style={{marginRight:"0"}} placeholder={userDetails.user_profile.mobile} className={classes.input}  />
                                        
                                      </Col>
                                      {/* <Col xs={12} sm={4}>
                                         <br/><br/>
                                        <Button className={classes.otp} style={{backgroundColor:"#E9680A",border:"none",padding:"10px"}}>Get otp</Button>
                                    </Col> */}
                                </Row><br/>
                            </div><br/>
                            </div>
                            <Divider/><br/>
                            <div className="container" style={{backgroundColor:"#FBFCFD",marginTop:"10px"}}>
                            <div>
                                <Row>
                                    <Col xs={12}>
                                        <h4 style={{float:"left"}}>College Details</h4>
                                    </Col>
                                    {/* <Col  xs={6}>
                                        <Button className={classes.saveChanges} style={{backgroundColor:"#E9680A",border:"none",padding:"10px",float:"right"}}>Save Changes</Button>
                                    </Col> */}
                                </Row><br/>
                                <Row>
                                <Col xs={12} sm={12}>
                                        <p>College Name</p>
                                        <Input name="college" type="text" disabled={true} className={classes.input2} placeholder="Balbharati Maghanmal J. Pancholia College of Commerce, Borivali" />
                                </Col>
                                    
                                </Row><br/>
                                <Row>
                                <Col xs={12} sm={5}>
                                        <p>Course</p>
                                        <Input name="Course" className={classes.input} disabled={true} placeholder={userDetails.education_details.course_name}  type="text"/>
                                    </Col>
                                    <Col  xs={12} sm={5}>
                                    <p>Stream</p>
                                    <Input name="Stream" disabled={true} className={classes.input} placeholder={userDetails.education_details.stream_name} type="text"/>
                                    </Col>
                                </Row><br/>
                                <Row>
                                <Col xs={12} sm={5}>
                                        <p>Year</p>
                                        <Input name="Year" disabled={true} className={classes.input} placeholder={userDetails.education_details.year_name}   type="text"/>    
                                        {/* <FormControl style={{width:"80%"}} className={classes.formControl}>
                                        
                                            <Select
                                            style={{backgroundColor:"whitesmoke",
                                        height:"50px",marginBottom:"15px"}}
                                            labelId="demo-controlled-open-select-label"
                                            id="demo-controlled-open-select"
                                            open={this.state.open}
                                            onClose={this.handleClose}
                                            onOpen={this.handleOpen}
                                            value={this.state.year}
                                            onChange={this.handleChange}
                                            >
                                            
                                            <MenuItem value={1}>First</MenuItem>
                                            <MenuItem value={2}>Second</MenuItem>
                                            <MenuItem value={3}>Third</MenuItem>
                                            <MenuItem value={4}>Fourth</MenuItem>
                                            </Select>
                                        </FormControl><br/> */}
                                    </Col><br/>
                                    <Col  xs={12} sm={5}>
                                    <p>Semester</p>
                                    <Input name="Semester" disabled={true} className={classes.input} placeholder={userDetails.education_details.semester_name===null?"NA":userDetails.education_details.semester_name}  type="text"/>
                                    </Col>
                                </Row><br/>
                            </div>
                            
                            </div>
                        </div><br/><br/>
                    </div>
                </div>
            
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
      changepass:state.changepass
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        updateProfile:(data)=>{
            dispatch(actions.updateProfile(data))
        },
        changepassword:(data)=>{
            dispatch(actions.changepassword(data))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Account)