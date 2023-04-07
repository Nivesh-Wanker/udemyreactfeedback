import React from 'react'
import { FaQuestion } from 'react-icons/fa'
import {Link} from 'react-router-dom'

//we can use <a href> to navigate but this refreshes the page so use Link
//use anchor tag when you want to go to external website but for internal use Link
function AboutIconLink() {
  return (
    <div className='about-link'>
        <Link //to='/about'
        to={{
            pathname:'/about',
            // hash:,
            // search:,
        }}
        >
            <FaQuestion size={20} />
        </Link>
    </div>
  )
}

export default AboutIconLink