import React, { Component } from 'react'
import './portfolioPost.css'

export default class ProjectPost extends Component {
  render() {
    return (
      <div className="project-display">
          <div className='project-post'>
            <h2 className='project-title' style={{display: !this.props.title && "none"}}>{this.props.title}</h2>
            <h3 className='project-language' style={{display: !this.props.language && "none"}}>{this.props.language}</h3>
            <p className='project-description-show' style={{display: !this.props.description && "none"}}>{this.props.description}</p>
            <a className='project-repository' style={{display: !this.props.repository && "none"}} href={this.props.repository} alt='git repository' target='blank'>Git Repository</a>
          </div>
      </div>
    )
  }
}
