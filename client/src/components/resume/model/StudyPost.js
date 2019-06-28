import React, { Component } from 'react'
import './resumePost.css'

export default class StudyPost extends Component {
  render() {
    return (
      <div className='resume-card-display'>
         <div className='study-post'>
          <h2 className='study-school' style={{display: !this.props.school && "none"}}>{this.props.school}</h2>
          <h3 className='study-degree' style={{display: !this.props.degree && "none"}}>{this.props.degree}</h3>
          <h4 className='study-timePeriod' style={{display: !this.props.timePeriod && "none"}}>{this.props.timePeriod}</h4>
          <p className='study-description' style={{display: !this.props.description && "none"}}>{this.props.description}</p>
          <p className='study-skills' style={{display: !this.props.skills && "none"}}>Skills: {this.props.skills}</p>
        </div>
      </div>
    )
  }
}