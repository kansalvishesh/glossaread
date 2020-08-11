import React, {useState} from 'react';
import {Grid, LinearProgress, Tabs, Tab} from '@material-ui/core';
import CourseMaterialCard from './CourseMaterialCard';
import './ProgressBar.css';
var gutter = function(height) {
  return {
    display: 'block',
    height: height 
  }
}
var course_card_style = {
  background: '#FFFFFF 0% 0% no-repeat padding-box',
  border: '1px solid #DBE2E6',
  borderRadius: '4px',
  textAlign: 'center'
}
var course_view_style = {
  margin: 'auto',
  textAlign: 'center',
  background: 'rgba(239, 245, 248, 0.5) 0% 0% no-repeat padding-box',
  border: '1px solid #DBE2E6',
  borderRadius: '10px',
}
var course_view_header_style = {
  textAlign: 'center',
  fontFamily: 'Raleway',
  fontSize: '35px',
  fontWeight: '700',
  letterSpacing: '1.2px',
  color: '#1B1D1E',
  textTransform: 'uppercase',
  opacity: '1'
}
var progress_style = {
  marginLeft: '25%',
  marginRight: '25%',
  height: '12px',
  borderRadius: '20px',
  border: '1px solid #D2D8DB',
}
var progress_val_style = {
  fontFamily: 'Raleway',
  fontSize: '15px',
  fontWeight: '500',
  letterSpacing: '0px',
  opacity: 0.5
}

function LinearProgressWithLabel(props) {
  return (
    <>
      <span style={gutter("30px")}/>
      <LinearProgress variant="determinate" {...props} />
      <span style={gutter("15px")}/>
      <span style={progress_val_style}>
        {`${Math.round( props.value,)}%`} completed
      </span>
      <span style={gutter("30px")}/>
    </>
  );
}

const CourseView = (props) => {
  const course = props.course;
  const progress = 10;
  const getStudyMaterial = () => {
    const contents = props.course.contents;
    const contentsList = [];
    contents.forEach((content, index) => {
      contentsList.push(
        <CourseMaterialCard content={content} style={course_card_style}/>
      );
    });
    return contentsList; 
  };
  return (
    <>
      <div style={course_view_style} class='course-view'>
        <span style={gutter("30px")}/>
        <div style={course_view_header_style}>{props.course.subject_name}</div>
        <LinearProgressWithLabel value={progress} style={progress_style}/>
        <span style={gutter("20px")}/>
        {getStudyMaterial()}
      </div>
    </>
  )
}
export default CourseView;
