import React, { Component } from 'react'
import './study.css'

export default class StudyPost extends Component {
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
         <div className='study-post'>
          <div className='study-stamp'>
            <h2 className='study-school' style={{display: !this.props.school && "none"}}>{this.props.school}</h2>
            <h3 className='study-degree' style={{display: !this.props.degree && "none"}}>{this.props.degree}</h3>
            <h4 className='study-timePeriod' style={{display: !this.props.timePeriod && "none"}}>{this.props.timePeriod}</h4>
          </div>
          <p className={this.state.hover ? 'study-description-show' : 'study-description-hidden'}
            style={{display: !this.props.description && "none"}}>{this.props.description}</p>
          <p className='study-skills' style={{display: !this.props.skills && "none"}}>Skills: {this.props.skills}</p>
        </div>
      </div>
    )
  }
}
