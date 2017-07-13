// import dependencies
import React from 'react'
import { Link } from 'react-router-dom'

const PathNotFound = () => (
  <div className='main-component path-not-found'>
    <h1>
      Path not found, sorry. You can go back to <Link to='/' className='button'>home</Link> address, if You'd like.
    </h1>
  </div>
)

export default PathNotFound