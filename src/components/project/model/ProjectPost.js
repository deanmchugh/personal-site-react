import React, { Component } from 'react'
import './projectPost.css'

export default class ProjectPost extends Component {
  render() {
    return (
      <div className='projectPost'>
        <p style={{display: !this.props.title && "none"}}>{this.props.title}</p>
        <p style={{display: !this.props.language && "none"}}>{this.props.language}</p>
        <p style={{display: !this.props.description && "none"}}>{this.props.description}</p>
        <a style={{display: !this.props.repository && "none"}}>{this.props.repository}</a>
      </div>
    )
  }
}
