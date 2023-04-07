import React from 'react'
import Card from '../Shared/Card'
import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
      <h1>About</h1>
      <p>This page tells about the app.</p>
      <Link to='/'>
        Back
      </Link>
    </Card>
  )
}

export default AboutPage