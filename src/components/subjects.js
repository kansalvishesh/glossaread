import { Tabs } from 'antd';
import React from "react";
import { Progress } from 'antd';
import { Collapse } from 'antd';
import { Divider } from 'antd';
import { Col,Row } from 'react-bootstrap';
import article from "../assets/article.png";
import classes from "../CSS/subject.module.css";

const { Panel } = Collapse;
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const Subject = () => {
    return(
        <>
        <div  style={{fontFamily:"Work Sans"}}>
        <Tabs tabBarStyle={{color:"#889094"}} defaultActiveKey="1" onChange={callback}>
        <TabPane  tab="COM V" key="1" >
        
        <div className="container-fluid" style={{backgroundColor:"#EFF5F8",padding:"20px",marginBottom:"30px"}}>
        <center><p style={{fontWeight:"bold"}}>COMMERCE - V MARKETING</p></center>
      <Progress percent={20} status="active" />
      <center>20 % Completed</center><br/>
      <Collapse accordion>
      <Panel header="Important Q&A" key="1">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
    </Panel>
      </Collapse>
      <Divider style={{color:"black"}} />
      <Collapse accordion>
    <Panel header="Unit 1 - Introduction to Marketing" key="1">
        <center><p>Click below to see inside content</p></center>
      <Row>
          <Col sm={4} lg={2}>
              <div style={{
                  boxShadow: "0px 5px 15px #1B1D1E24",
                  border: "1px solid #FFFFFF",
                  borderRadius: "10px",
                  marginBottom:"10px"
              }} className="container">
                  <center><img alt="" src={article}/>
                  <p>NOTES</p></center>
              </div>
          </Col>
          <Col sm={4} lg={2}>
              <div style={{
                  boxShadow: "0px 5px 15px #1B1D1E24",
                  border: "1px solid #FFFFFF",
                  borderRadius: "10px",
                  marginBottom:"10px"
              }} className="container">
                  <center><img src={article}/>
                  <p>PPT</p></center>
              </div>
          </Col>
          <Col sm={4} lg={2}>
              <div style={{
                  boxShadow: "0px 5px 15px #1B1D1E24",
                  border: "1px solid #FFFFFF",
                  borderRadius: "10px",
                  marginBottom:"10px"
              }} className="container">
                  <center><img src={article}/>
                  <p>M.C.Q</p></center>
              </div>
          </Col>
          <Col sm={4} lg={2}>
              <div style={{
                  boxShadow: "0px 5px 15px #1B1D1E24",
                  border: "1px solid #FFFFFF",
                  borderRadius: "10px",
                  marginBottom:"10px"
              }} className="container">
                  <center><img src={article}/>
                  <p>Question Bank</p></center>
              </div>
          </Col>
          <Col sm={4} lg={2}>
              <div style={{
                  boxShadow: "0px 5px 15px #1B1D1E24",
                  border: "1px solid #FFFFFF",
                  borderRadius: "10px",
                  marginBottom:"10px"
              }} className="container">
                  <center><img src={article}/>
                  <p>M.C.Q Test</p></center>
              </div>
          </Col>
          <Col sm={4} lg={2}>
              <div style={{
                  boxShadow: "0px 5px 15px #1B1D1E24",
                  border: "1px solid #FFFFFF",
                  borderRadius: "10px",
                  marginBottom:"10px"
              }} className="container">
                  <center><img src={article}/>
                  <p>Reference Video</p></center>
              </div>
          </Col>
      </Row>
    </Panel>
    <Panel header="Unit 2 - Introduction to Marketing" key="2">
    <center><p>Click below to see inside content</p></center>
      <Row>
          <Col sm={4} lg={2}>
              <div style={{
                  boxShadow: "0px 5px 15px #1B1D1E24",
                  border: "1px solid #FFFFFF",
                  borderRadius: "10px",
                  marginBottom:"10px"
              }} className="container">
                  <center><img alt="" src={article}/>
                  <p>NOTES</p></center>
              </div>
          </Col>
          <Col sm={4} lg={2}>
              <div style={{
                  boxShadow: "0px 5px 15px #1B1D1E24",
                  border: "1px solid #FFFFFF",
                  borderRadius: "10px",
                  marginBottom:"10px"
              }} className="container">
                  <center><img src={article}/>
                  <p>PPT</p></center>
              </div>
          </Col>
          <Col sm={4} lg={2}>
              <div style={{
                  boxShadow: "0px 5px 15px #1B1D1E24",
                  border: "1px solid #FFFFFF",
                  borderRadius: "10px",
                  marginBottom:"10px"
              }} className="container">
                  <center><img src={article}/>
                  <p>M.C.Q</p></center>
              </div>
          </Col>
          <Col sm={4} lg={2}>
              <div style={{
                  boxShadow: "0px 5px 15px #1B1D1E24",
                  border: "1px solid #FFFFFF",
                  borderRadius: "10px",
                  marginBottom:"10px"
              }} className="container">
                  <center><img src={article}/>
                  <p>Question Bank</p></center>
              </div>
          </Col>
          <Col sm={4} lg={2}>
              <div style={{
                  boxShadow: "0px 5px 15px #1B1D1E24",
                  border: "1px solid #FFFFFF",
                  borderRadius: "10px",
                  marginBottom:"10px"
              }} className="container">
                  <center><img src={article}/>
                  <p>M.C.Q Test</p></center>
              </div>
          </Col>
          <Col sm={4} lg={2}>
              <div style={{
                  boxShadow: "0px 5px 15px #1B1D1E24",
                  border: "1px solid #FFFFFF",
                  borderRadius: "10px",
                  marginBottom:"10px"
              }} className="container">
                  <center><img src={article}/>
                  <p>Reference Video</p></center>
              </div>
          </Col>
      </Row>
    </Panel>
    <Panel header="Unit 3 - Introduction to Marketing" key="3">
    <center><p>Click below to see inside content</p></center>
      <Row>
          <Col sm={4} lg={2}>
              <div style={{
                  boxShadow: "0px 5px 15px #1B1D1E24",
                  border: "1px solid #FFFFFF",
                  borderRadius: "10px",
                  marginBottom:"10px"
              }} className="container">
                  <center><img alt="" src={article}/>
                  <p>NOTES</p></center>
              </div>
          </Col>
          <Col sm={4} lg={2}>
              <div style={{
                  boxShadow: "0px 5px 15px #1B1D1E24",
                  border: "1px solid #FFFFFF",
                  borderRadius: "10px",
                  marginBottom:"10px"
              }} className="container">
                  <center><img src={article}/>
                  <p>PPT</p></center>
              </div>
          </Col>
          <Col sm={4} lg={2}>
              <div style={{
                  boxShadow: "0px 5px 15px #1B1D1E24",
                  border: "1px solid #FFFFFF",
                  borderRadius: "10px",
                  marginBottom:"10px"
              }} className="container">
                  <center><img src={article}/>
                  <p>M.C.Q</p></center>
              </div>
          </Col>
          <Col sm={4} lg={2}>
              <div style={{
                  boxShadow: "0px 5px 15px #1B1D1E24",
                  border: "1px solid #FFFFFF",
                  borderRadius: "10px",
                  marginBottom:"10px"
              }} className="container">
                  <center><img src={article}/>
                  <p>Question Bank</p></center>
              </div>
          </Col>
          <Col sm={4} lg={2}>
              <div style={{
                  boxShadow: "0px 5px 15px #1B1D1E24",
                  border: "1px solid #FFFFFF",
                  borderRadius: "10px",
                  marginBottom:"10px"
              }} className="container">
                  <center><img src={article}/>
                  <p>M.C.Q Test</p></center>
              </div>
          </Col>
          <Col sm={4} lg={2}>
              <div style={{
                  boxShadow: "0px 5px 15px #1B1D1E24",
                  border: "1px solid #FFFFFF",
                  borderRadius: "10px",
                  marginBottom:"10px"
              }} className="container">
                  <center><img src={article}/>
                  <p>Reference Video</p></center>
              </div>
          </Col>
      </Row>
    </Panel>
  </Collapse>
  <Divider/>
  <Collapse accordion>
      <Panel header="Model Solved Question Paper (MSQP)" key="1">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
    </Panel>
      </Collapse>
        </div>


    </TabPane>
    <TabPane tab="FAA VII (DSE)" key="2">
      Content of FAA VII (DSE)
    </TabPane>
    <TabPane tab="B ECO V (DRE)" key="3">
      Content of B ECO V (DRE)
    </TabPane>
    <TabPane tab="B ECO V (DRE)" key="4">
      Content of B ECO V (DRE)
    </TabPane>
    <TabPane tab="B ECO V (DRE)" key="5">
      Content of B ECO V (DRE)
    </TabPane>
    <TabPane tab="B ECO V (DRE)" key="6">
      Content of B ECO V (DRE)
    </TabPane>
    <TabPane tab="B ECO V (DRE)" key="6">
      Content of B ECO V (DRE)
    </TabPane>
    <TabPane tab="B ECO V (DRE)" key="6">
      Content of B ECO V (DRE)
    </TabPane>
    
    
   
  </Tabs>
  </div>
        </>
    );
}
export default Subject;