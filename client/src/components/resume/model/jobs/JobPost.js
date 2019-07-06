import React, { Component } from 'react'
import './job.css'

export default class JobPost extends Component {
  constructor(){
    super()
    this.state = {
      hover: false
    }
  }
  hoverOn = () => {
    this.setState({hover: true})
  }
  hoverOff = () => {
    this.setState({hover: false})
  }
  render() {
    return (
      <div className='resume-card-display'
        onMouseEnter={this.hoverOn}
        onMouseLeave={this.hoverOff}>
        <div className='job-post'>
          <div className='job-stamp'>
            <h2 style={{display: !this.props.title && "none"}}>{this.props.title}</h2>
            <h3 className='job-company' style={{display: !this.props.company && "none"}}>{this.props.company}</h3>
            <h4 className='job-time-period' style={{display: !this.props.timePeriod && "none"}}>{this.props.timePeriod}</h4>
          </div>
          <p className={this.state.hover ? 'job-description-show' : 'job-description-hidden'}
            style={{display: !this.props.description && "none"}}>{this.props.description}</p>
          <p className='job-skills' style={{display: !this.props.skills && "none"}}>Skills: {this.props.skills}</p>
        </div>
      </div>
    )
  }
}
