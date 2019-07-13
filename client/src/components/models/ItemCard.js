import React, { Component } from 'react'
import './itemcard.css'

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
      <div className='card-display'
        onMouseEnter={this.hoverOn}
        onMouseLeave={this.hoverOff}>
        <div className='card-stamp'>
            <h2 style={{display: !this.props.school && "none"}}>{this.props.school}</h2>
            <h2 style={{display: !this.props.title && "none"}}>{this.props.title}</h2>
            <h3 className='card-title-2' style={{display: !this.props.degree && "none"}}>{this.props.degree}</h3>
            <h3 className='card-title-2' style={{display: !this.props.language && "none"}}>{this.props.language}</h3>
            <h3 className='card-title-2' style={{display: !this.props.company && "none"}}>{this.props.company}</h3>
            <h4 className='card-title-3' style={{display: !this.props.timePeriod && "none"}}>{this.props.timePeriod}</h4>
            <a style={{display: !this.props.repository && "none"}} href={this.props.repository} alt='git repository' target='blank'>Git Repository</a>
            <a style={{display: !this.props.url && "none"}} href={this.props.url} alt='project url' target='blank'>{this.props.url}</a>
        </div>
        <p className='card-skills' style={{display: !this.props.skills && "none"}}>Skills: {this.props.skills}</p>
        <p className={this.state.hover ? 'description-show' : 'description-hidden'}
            style={{display: !this.props.description && "none"}}>{this.props.description}</p>
      </div>
    )
  }
}
