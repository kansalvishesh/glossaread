import React, {useState} from 'react';
import CourseCard from './CourseCard';
import {Grid} from '@material-ui/core';
const CourseCardView = (props) => {
  const getCourseCards = () => {
    const courses = props.courses;
    const courseList = [];
    courses.forEach((course, index) => {
      courseList.push(
          <CourseCard title={course.subject_name} syllabus={course.subject_syllabus}/>
      );
    });
    return courseList;
    /*
    return (
      <>
      <CourseCard title="Commerce -V Marketing"/>
      <CourseCard title="Commerce -V Marketing"/>
      <CourseCard title="Testing a very longg title to see how it looks on multiple lines. Commerce -V Marking"/>
      <CourseCard title="Commerce -V Marketing"/>
      <CourseCard title="Testing a very longg title to see how it looks on multiple lines. Commerce -V Marking"/>
      <CourseCard title="Commerce -V Marketing"/>
      <CourseCard title="Commerce -V Marketing"/>
      <CourseCard title="Commerce -V Marketing"/>
      </>
    );
    */
  }
  return (
    <Grid container>
      {/*
      <Grid item xs={12} md = {6}>
        <div style={card_container_div_style}>
          <CourseCard/>
        </div>
      </Grid>
      <Grid item xs={12} md = {6}>
        <div style={card_container_div_style}>
          <CourseCard/>
        </div>
      </Grid>
      <Grid item xs={12} md = {6}>
        <div style={card_container_div_style}>
          <CourseCard/>
        </div>
      </Grid>
      <Grid item xs={12} md = {6}>
        <div style={card_container_div_style}>
          <CourseCard/>
        </div>
      </Grid>
      <Grid item xs={12} md = {6}>
        <div style={card_container_div_style}>
          <CourseCard/>
        </div>
      </Grid>
      <Grid item xs={12} md = {6}>
        <div style={card_container_div_style}>
          <CourseCard/>
        </div>
      </Grid>
      */}
      {getCourseCards()}
    </Grid>
  )
}
export default CourseCardView;
