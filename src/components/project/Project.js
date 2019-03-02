import React, { Component } from 'react'
import ProjectPost from './model/ProjectPost'
import projects from './data/projects'

export default class Project extends Component {
  render() {

    const projectComponent = projects.map(project =>
      <ProjectPost key={project.id} title={project.title}
      language={project.language} description={project.description}
      repository={project.repository}/>)

    return (
      <div>
        {projectComponent}
      </div>
    )
  }
}
