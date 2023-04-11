import React from 'react'
//import { useState } from 'react'
import Card from '../Shared/Card'
import PropTypes from 'prop-types'
import {FaTimes,FaEdit} from 'react-icons/fa'
import { useContext } from 'react'
import FeedbackContext from '../Context/FeedbackContext'

// function FeedbackItem({item, handleDelete}) {
  function FeedbackItem({item}) {
    // const [rating, setRating] = useState()
    // const [text, setText] = useState()
    // const handleClick = (id) => {
    //     console.log(id)
    // }
    const {deleteFeedback,editFeedback} = useContext(FeedbackContext)
  return (
      <Card>
        <div className='num-display'>{item.rating}</div>
        {/* <button className='close' onClick={()=>handleDelete(item.id)}> */}
        <button className='edit' onClick={()=>editFeedback(item)}>
          <FaEdit color='purple'/>
        </button>
        <button className='close' onClick={()=>deleteFeedback(item.id)}>
          <FaTimes color='purple'/>
        </button>
        <div className='text-display'>{item.text}</div>
        {/* <button onClick={handleClick}>Click</button> */}
    </Card>
  )
}

FeedbackItem.propTypes = {
  item : PropTypes.object.isRequired
}

export default FeedbackItem