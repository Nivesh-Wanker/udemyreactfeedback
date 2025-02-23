import React from 'react'
import PropTypes from 'prop-types'

function Card({children, reverse}) {
  return (
    <div>
       <div className={`card ${reverse && 'reverse'}`}>{children}</div> 
       {/* <div className='card'
       style={{
        backgroundColor: reverse ? 'rgba(0,0,0,0.4)': '#fff',
        color: reverse ? '#fff' : '#000'
       }}
       >{children}</div> */}
    </div>
  )
}

Card.defaultProps = {
    reverse:false
}

Card.propTypes = {
    children : PropTypes.node.isRequired,
    reverse : PropTypes.bool
}
export default Card