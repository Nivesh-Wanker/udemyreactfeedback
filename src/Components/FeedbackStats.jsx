import React from 'react'
import { useContext } from 'react'
import FeedbackContext from '../Context/FeedbackContext'

function FeedbackStats() {
  const {feedback}  = useContext(FeedbackContext)

    //Calculate average
    let average = feedback.reduce((acc,cur)=>{
         return acc+cur.rating
    },0)/feedback.length

    
    average=average.toFixed(2).replace(/[.,]0$/,'')// to show only one digit after decimal and replace 8.0 with 8
  return (
    <div className='feedback-stats'>
        <h4>Total reviews:{feedback.length}</h4>
        <h4>Average rating: {isNaN(average)?0:average}</h4>
    </div>
  )
}

export default FeedbackStats