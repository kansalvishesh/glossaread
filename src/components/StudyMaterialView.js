import React, {useState} from 'react';
import {Grid, Tabs, Tab} from '@material-ui/core';
import CourseView from './CourseView';
import expand_arrow from '../assets/icons8_expand_arrow_black.svg';
const StudyMaterialView = (props) => {
  const [tabValue, setTabValue] = useState(0);
  console.log(props.courses);
  const getTabs = () => {
    const courses = props.courses
    const coursesList = [];
    courses.forEach((course, index) => {
      coursesList.push(
          <Tab label={<p>{course.subject_name_abbreviation} <img src={expand_arrow} width='13px'/></p>} />
      );
    });
    return (
        <Tabs
          value={tabValue}
          onChange={(e,tabValue) => {
            setTabValue(tabValue);
          }}
          indicatorColor="secondary"
          textColor="inherit"
          variant="scrollable"
          style={{}}
        >
          {coursesList}
        </Tabs>
    )
  }
  return (
    <Grid container className='study-material-tab'>
      <Grid xs={0} md={2}/>
      <Grid xs={12} md={8}>
        {getTabs()}
      </Grid>
      <Grid xs={0} md={2}/>
      <Grid xs={0} md={1}/>
      <Grid xs={12} md={10}>
        <CourseView course={props.courses[tabValue]}/>
      </Grid>
      <Grid xs={0} md={1}/>
    </Grid>
  )
}
export default StudyMaterialView;
