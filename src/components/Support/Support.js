import React from 'react'
import './Support.scss'
import { Container } from 'react-bootstrap'

export default function Support() {
  return (
    <>
        <Container className='support'>
            <div className="supportSection">
                <div className="supportTitle text-center"><h1>Never miss a story!</h1></div>
                <p>Get the freshest headlines and updates sent uninterrupted to your inbox.</p>
                <div className="supportInp d-flex align-items-center">
                    <input type="email" placeholder='Enter you email address'/>
                    <button className='btn btn-primary'>Subscribe</button>
                </div>
                <span>By subscribing you agree to our <a href="#">Privay Policy</a></span>
            </div>
        </Container>

        <div className="gutter container"></div>
    </>
  )
}
