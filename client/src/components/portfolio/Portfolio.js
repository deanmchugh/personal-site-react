import React, { Component } from 'react'
import ItemCard from '../models/ItemCard'
import projects from './data/projects'
import './portfolio.css'

export default class Project extends Component {
  render() {

    const projectComponent = projects.map(project =>
      <ItemCard key={project.id} title={project.title}
      language={project.language} description={project.description}
      skills={project.skills.map(skill => (
        <ul><li>{skill}</li></ul>
      ))} repository={project.repository} 
      url={project.url}/>)

    return (
      <body className='portfolio-display'>
        {projectComponent}
      </body>
    )
  }
}
