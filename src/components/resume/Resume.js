import React, { Component } from 'react'
import JobPost from './model/JobPost'
import StudyPost from './model/StudyPost'
import {experienceData,educationData} from './data/experience'

export default class Resume extends Component {
  render() {

    const experienceComponent = experienceData.map(work =>
      <JobPost key={work.id} title={work.title} company={work.company}
        timePeriod={work.timePeriod} description={work.description} 
        skills={work.skills}/>)
    
    const educationComponent = educationData.map(study =>
      <StudyPost key={study.id} school={study.school} degree={study.degree}
        timePeriod={study.timePeriod} description={study.description}
        skills={study.skills}/>)

    return (
      <div>
        {experienceComponent}
        {educationComponent}
      </div>
    )
  }
}
