import React, { Component } from 'react'
import JobPost from './model/JobPost'
import StudyPost from './model/StudyPost'
import {experienceData,educationData} from './data/experience'
import './model/resumePost.css'

export default class Resume extends Component {
  render() {
    const experienceComponent = experienceData.map(work =>
      <JobPost key={work.id} 
        title={work.title} 
        company={work.company}
        timePeriod={work.timePeriod} 
        description={work.description.split('\n').map(desc =>
          <p>{desc}</p>)}
        skills={work.skills.map(skillList => 
          <ul><li>{skillList}</li></ul>)}/>)
    
    const educationComponent = educationData.map(study =>
      <StudyPost key={study.id} 
        school={study.school} 
        degree={study.degree}
        timePeriod={study.timePeriod} 
        description={study.description.split('\n').map(desc =>
          <p>{desc}</p>)}
        skills={study.skills.map(skillList => 
          <ul><li>{skillList}</li></ul>)}/>)

    return (
      <body className='resume-display'>
        <h2>Employment</h2>
        {experienceComponent}
        <h2>Education</h2>
        {educationComponent}
      </body>
    )
  }
}
