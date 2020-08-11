import React,{useState} from 'react';
import {Card, CardHeader, Grid} from '@material-ui/core';
import downchevron from '../assets/icons8_expand_arrow.svg';

const card_container_body_style = {
  marginRight: '10%',
  marginLeft: '5%',
  fontFamily: 'Raleway'
}
const card_header_style = {
  textAlign: 'left',
  letterSpacing: '0px',
  color: '#1B1D1E',
  fontFamily: 'Raleway',
  paddingTop: '20px',
  paddingBottom: '20px'
}
const card_body = {
  paddingBottom: '10%',
  fontFamily: 'Raleway',
  fontSize: '16px',
  color: '#889094'
}
const CourseCard = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const card_container_div_style = {
    marginRight: isExpanded ? '5%' : '10%',
    marginLeft: isExpanded ? '5%' : '10%',
    marginTop: '5%',
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    boxShadow: '0px 8px 20px #1B1D1E1A',
    borderRadius: '10px',
    fontFamily: 'Raleway'
  }
  var renderCardBody = () => {
    const syllabus = props.syllabus;
    const syllabusList = [];
    syllabus.forEach((syllabi, index) => {
      syllabusList.push(
        <p>{syllabi}</p>
      );
    });
    return (
          <div style={card_body}>
            {syllabusList}
          </div>
            )
  }
  return (
    <>
      <Grid item xs={12}  className="syllabus_card">
      {/* md={isExpanded ? 12 : 6} */}
        <div style={card_container_div_style}>
          <CardHeader title={props.title}
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
          <div style={card_container_body_style}>
            { isExpanded && renderCardBody()}
          </div>
        </div>
      </Grid>
      {isExpanded && <Grid item xs={12} md={6}/>}
    </>
  )
}
export default CourseCard;
