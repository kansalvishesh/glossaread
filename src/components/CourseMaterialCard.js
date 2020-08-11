import React,{useState} from 'react';
import {Grid, Card, CardHeader} from '@material-ui/core';
import StudyMaterialCard from './StudyMaterialCard';
import downchevron from '../assets/icons8_expand_arrow.svg';
import "./Card.css";

var gutter = function(height) {
  return {
    display: 'block',
    height: height 
  }
}

const card_container_div_style = {
  marginRight: '10%',
  marginLeft: '10%',
  marginBottom: '5%',
  background: '#FFFFFF 0% 0% no-repeat padding-box',
  border: '1px solid #DBE2E6',
  borderRadius: '4px',
  textAlign: 'center'
}
const card_header_style = {
  textAlign: 'left',
  fontFamily: 'Raleway',
  fontWeight: '700',
  fontSize: '19px',
  letterSpacing: '0px',
  color: '#1B1D1E',
  border: '1px solid #DBE2E6',
  borderRadius: '4px'
}
const card_body_style = {
  fontSize: '19px',
  fontWeight: '300px',
  fontFamily: 'Raleway',
  letterSpacing: '0px',
  color: '#1B1D1E',
  opacity: '0.5'
}
const CourseMaterialCard = (props) => {
  console.log(props.content);
  const [isExpanded, setIsExpanded] = useState(false);
  var renderCardBody = () => {
    return (
      <>
      <br/>
        <p style={card_body_style}>Click below to see inside content</p>
        <Grid container alignItems='center'>
          <Grid style={{marginBottom:"20px"}} item xs={6} md={2} >
            <StudyMaterialCard content={"Notes"}/>
          </Grid>
          <Grid style={{marginBottom:"20px"}} item xs={6} md={2}>
            <StudyMaterialCard content={"PPT"}/>
          </Grid>
          <Grid style={{marginBottom:"20px"}} item xs={6} md={2}>
            <StudyMaterialCard content={"MCQ"}/>
          </Grid>
          <Grid style={{marginBottom:"20px"}} item xs={6} md={2}>
            <StudyMaterialCard content={"Question Bank"}/>
          </Grid>
          <Grid style={{marginBottom:"20px"}} item xs={6} md={2}>
            <StudyMaterialCard content={"M.C.Q. Test"}/>
          </Grid>
          <Grid  style={{marginBottom:"20px"}}item xs={6} md={2}>
            <StudyMaterialCard content={"Reference Video"}/>
          </Grid>
        </Grid>
        <span style={gutter('30px')}/>
      </>
    )
  }
  return (
    <>
      <Grid item xs={12}>
        <div style={card_container_div_style} class="course_material_card">
          <CardHeader title={props.content.title}
                      avatar={
                        <img src={downchevron}/>
                      }
                      onClick={e => {
                          console.log('opening card');
                          setIsExpanded(!isExpanded)
                        }
                      }
                      style={card_header_style}
          />
          { isExpanded && renderCardBody()}
        </div>
      </Grid>
    </>
  )
}
export default CourseMaterialCard;
