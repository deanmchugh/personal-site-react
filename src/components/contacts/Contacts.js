import React, { Component } from 'react'
import EmailIcon from './img/email.png'
import GithubIcon from './img/github.png'
import LinkedinIcon from './img/linkedin.png'
import './contacts.css'

export default class Contacts extends Component {
  render() {
    return (
      <footer className='footer'>
        <div></div>
        <div>
          <h2>CONTACTS</h2>
          <h4>PHONE: 0457998366</h4>
          <a href="mailto:dean.mchugh1988@gmail.com">
              <img src={EmailIcon} alt="email address" /></a>
          <a href="https://www.linkedin.com/in/dean-mchugh-21a983113" target="blank">
              <img src={LinkedinIcon} alt="linked in account" /></a>
          <a href="https://github.com/deanmchugh" target="blank">
              <img src={GithubIcon} alt="github account" /></a>
        </div>
      </footer>
    )
  }
}
