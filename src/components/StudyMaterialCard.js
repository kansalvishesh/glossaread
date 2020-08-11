import React, {useState} from 'react';
import {Card, CardActionArea, CardContent, CardMedia} from '@material-ui/core';
import CourseMaterialCard from './CourseMaterialCard';
import NotesImg from '../assets/article.png';
var gutter = function(height) {
  return {
    display: 'block',
    height: height 
  }
}
var study_material_card_style = {
  background: '#FFFFFF 0% 0% no-repeat padding-box',
  boxShadow: '0px 5px 15px #1B1D1E24',
  border: '1px solid #FFFFFF',
  borderRadius: '10px',
  height: '140px',
  marginLeft: '7%',
  marginRight: '7%',
  paddingTop: '10%',
 
}
const study_material_card_content_style = {
  fontFamily: 'Raleway',
  fontSize: '0.8rem',
  fontWeight: '700',
  letterSpacing: '0px',
  color: '#1B1D1E',
  textTransform: 'uppercase'
}
const StudyMaterialCard = (props) => {
  const progress = 10;
  return (
    <>
      <Card style={study_material_card_style}>
        <img src={NotesImg}/>
        <CardContent>
          <span style={study_material_card_content_style}>
          {props.content}
          </span>
          <br/>
        </CardContent>
      </Card>

    </>
  )
}
export default StudyMaterialCard;
