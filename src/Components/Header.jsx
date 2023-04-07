import React from 'react'
import PropTypes from 'prop-types'

function Header(props) { //we can destructure the props and use {text} instead. (text is the prop that we are passing...as long as we know what is being passed we can use this way)
  const headerStyles = {
    backgroundColor:'black',
    color:'red'
  }
    return (
    <header style={headerStyles}>
        <div className='container'>
            <h2>{props.text}</h2>
        </div>
    </header>
  )
}
Header.defaultProps = {
    text:'Default Props',
}

Header.propTypes = {
    text: PropTypes.string,
}

export default Header