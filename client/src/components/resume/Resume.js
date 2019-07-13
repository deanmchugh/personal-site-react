import React, { Component } from 'react'
import ItemCard from '../models/ItemCard'
import {experienceData,educationData} from './data/experience'
import './resume.css'

export default class Resume extends Component {
  render() {
    const experienceComponent = experienceData.map(work =>
      <ItemCard  key={work.id} 
        title={work.title} 
        company={work.company}
        timePeriod={work.timePeriod} 
        description={work.description.split('\n').map(desc =>
          <p>{desc}</p>)}
        skills={work.skills.map(skillList => 
          <ul><li>{skillList}</li></ul>)}/>)
    
    const educationComponent = educationData.map(study =>
      <ItemCard  key={study.id} 
        school={study.school} 
        degree={study.degree}
        timePeriod={study.timePeriod} 
        description={study.description.split('\n').map(desc =>
          <p>{desc}</p>)}
        skills={study.skills.map(skillList => 
          <ul><li>{skillList}</li></ul>)}/>)

    return (
      <body className='resume-display'>
        <h2 className='resume-heading'>Employment</h2>
        {experienceComponent}
        <h2 className='resume-heading'>Education</h2>
        {educationComponent}
      </body>
    )
  }
}
