import React from 'react'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import FeedbackContext from '../Context/FeedbackContext'

function FeedbackStats({feedback}) {
    //Calculate average
    let average = feedback.reduce((acc,cur)=>{
         return acc+cur.rating
    },0)/feedback.length

    average.toFixed(2).replace(/[.,]0$/,'')// to show only one digit after decimal and replace 8.0 with 8
  return (
    <div className='feedback-stats'>
        <h4>Total reviews:{feedback.length}</h4>
        <h4>Average rating: {isNaN(average.toFixed(1))?0:average}</h4>
    </div>
  )
}

FeedbackStats.propTypes = {
    feedback: PropTypes.array.isRequired
}
export default FeedbackStats