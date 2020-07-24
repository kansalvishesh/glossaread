import React from "react";
import CustomNavbar from "../components/navbar";
import Subjects from "../components/subjects";
import logo from "../assets/logo.png"

import { Button } from "react-bootstrap";



const Home=()=>{
    return(
        <>
            <CustomNavbar/>
            <div className="container-fluid" style={{
                display:"flex",
                alignItems:"center",
                flexDirection:"column",
                paddingTop:"15px"
                }}>
                    <img src={logo}/><br/>
                    <h1 style={{fontFamily: 'Raleway'}}>Welcome, Rohit</h1>
                    
                    <p><Button variant="light">Syllabus</Button><Button variant="dark">Subjects</Button> </p>
                 
                        <div className="container">
                            <Subjects/>
                        </div>
                       
                            
                      

                


        </div>
        </>
    )
}
export default Home;