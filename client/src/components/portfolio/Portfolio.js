import React, { Component } from 'react'
import ProjectPost from './model/PortfolioPost'
import projects from './data/projects'
import './portfolio.css'

export default class Project extends Component {
  render() {

    const projectComponent = projects.map(project =>
      <ProjectPost key={project.id} title={project.title}
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
