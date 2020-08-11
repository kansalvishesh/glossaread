import React, { Component } from "react";
import CustomNavbar from "../components/navbar";
import logo from "../assets/logo.png"
import fire from "../fire"
import { Button } from "react-bootstrap";
import {Grid, Tabs, Tab, CircularProgress} from '@material-ui/core';
import response from '../response';
import CourseCardView from '../components/CourseCardView';
import StudyMaterialView from '../components/StudyMaterialView';
import "../Tab.css";
import {connect} from "react-redux";
import * as actions from "../entities/action";
// const { TabPane } = Tabs;

// function callback(key) {
//   console.log(key);
// }

var gutter = function(height) {
    return {
      display: 'block',
      height: height 
    }
  }
  const tab_root_styles = {
    background: '#FFF 0% 0% no-repeat padding-box',
    border: '2px solid #E8E8E8',
  }
  const tab_button_styles = {
    paddingTop: '12px',
  }

class Home extends Component{
    // const logout = ()=>{
    //     fire.auth().signOut().then(function() {
    //         console.log("Sign-out successful.")
    //       }).catch(function(error) {
    //         console.log("An error happened.")
    //       });

    // }
    constructor(props){
      super(props);
      const token = localStorage.getItem('isAuth')?JSON.parse(localStorage.getItem('isAuth')).st:''
      this.state={
        tabValue:1,
        st:token || "",
        content:null,
        myloader:true
        
      }
    }
    
    
    
    componentDidMount(){
      this.props.getcontent(this.state)
        
      localStorage.setItem('StudyContent',JSON.stringify(this.props.contentresponse))
      this.setState({myloader:false})
      console.log("Session",JSON.parse(localStorage.getItem('StudyContent')))
    
    }
    componentWillMount(){
      if(localStorage.getItem('isAuth')===null){
        this.props.history.push('/login')
      }
      if(localStorage!==null){
        const userDetails=JSON.parse(localStorage.getItem('isAuth'));

       
        
        if(userDetails===null){
          this.props.history.push('/login')
        }
        else if(userDetails.ack!==1){
          this.props.history.push('/login')
        }
        // console.log("USER ACK",userDetails.ack)
      }
      
    }
    componentDidUpdate(){
      // if(response){
      //   console.log(response)
      // }
      console.log(this.props.contentresponse)
      localStorage.setItem('StudyContent',JSON.stringify(this.props.contentresponse))
      console.log(this.props.loading2)
      if(this.props.loading2===false){
        
        console.log('GOT RESPONSE from api')
      }
      console.log(response)
      console.log(JSON.parse(localStorage.getItem('StudyContent')))
    }
    checkreload=()=>{
      
    }
  render(){
    console.log("props",this.props)
          // console.log(JSON.parse(localStorage.getItem('StudyContent')))
          // console.log(response);
          // console.log(response.contents.length);

          var getTabs = () => {
            return (
              <>
                <div className="container">
                <Tabs
                  value={this.state.tabValue}
                  onChange={(e,tabValue) => {
                    this.setState({tabValue:tabValue})
                  }}
                  indicatorColor="secondary"
                  textColor="inherit"
                  variant="fullWidth"
                  style={tab_root_styles}
                >
                  <Tab style={tab_button_styles} label={<p>Syllabus</p>} />
                  <Tab style={tab_button_styles} label={<p>Study Material</p>} />
                </Tabs>
                </div>
              </>
            );
          };
          if(this.props.loading===false){
            return(
              <>
                  <CustomNavbar/><br/>
                  {/* <p><Button style={{marginRight:"10px",marginLeft:"10px"}} onClick={logout} >Logout</Button>
                      Welcome, {props.currentUser} </p> */}
                  <div className="container-fluid" style={{
                      display:"flex",
                      alignItems:"center",
                      flexDirection:"column",
                      paddingTop:"15px"
                      }}>
                          <img src={logo}/><br/>
                         <center> <h1 style={{fontFamily: 'Raleway'}}>Welcome, Rohit</h1></center>
                          
                          {/* <p><Button variant="light">Syllabus</Button><Button variant="dark">Subjects</Button> </p>
                          <Tabs type="card" centered defaultActiveKey="1" onChange={callback}>
                              <TabPane  tab="Syllabus" key="1" >
                                  <p>subjects</p>
                              </TabPane>
                              <TabPane  tab="Subjects" key="2" >
                              <div className="container">
                                  <Subjects/>
                              </div>
                              </TabPane>
                          </Tabs> */}
                <span style={gutter("30px")}/>
                <Grid container className='welcome-tab'>
                  <Grid item xs={0} md={3}/>
                  <Grid item xs={12} md={6}>
                    {/*
                    <Tabs
                      value={tabValue}
                      onChange={(e,tabValue) => {
                        setTabValue(tabValue);
                      }}
                      indicatorColor="secondary"
                      textColor="inherit"
                      variant="fullWidth"
                      style={tab_root_styles}
                    >
                      <Tab style={tab_button_styles} label={<p>Syllabus</p>} />
                      <Tab style={tab_button_styles} label={<p>Study Material</p>} />
                    </Tabs>
                    */}
                    {getTabs()}
                  </Grid>
                  {/* <Grid item xs={0} md={3}/>
                </Grid>
              </Grid>
              <Grid item xs={2}/> */}
            </Grid>
            <span style={gutter("30px")}/>
            {this.state.tabValue == 0 && <CourseCardView courses={response.contents}/>}
            {this.state.tabValue == 1 && <StudyMaterialView courses={response.contents}/>}
            <span style={gutter("30px")}/>
             
              </div>
              </>
          )
            
          }else{
            return(
              <>
              <div className="container" style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",height:"100vh"}}>
              <CircularProgress color="secondary" />
                {
                setInterval(function(){ window.location.reload()}, 3000)
          }{
              response?clearInterval():null
          }
                  
                
                
                </div>
                
              </>
            )
            
          }
          
    }
  }

  const mapStateToProps = (state) => {
    return {
      loading:state.loading,
      ack:state.ack,
      msg:state.msg,
      ack2:state.ack2,
      msg2:state.msg2,
      loading2:state.loading2,
      contentresponse:state.contentresponse
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
      getcontent:(data)=>{
            dispatch(actions.getcontent(data))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)