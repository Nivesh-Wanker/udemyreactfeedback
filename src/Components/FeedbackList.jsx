import React from 'react'
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'
import {motion,AnimatePresence} from 'framer-motion'
import {FeedbackContext} from '../Context/FeedbackContext'
import { useContext } from 'react'

function FeedbackList({list,handleDelete}) {
  
  
  return (
    
    <div>
        {list.map((item) =>
        <FeedbackItem key={item.id} item = {item} handleDelete = {handleDelete}/>
        )}
    </div>
  )

  // return (
    
  //   <div>
  //     <AnimatePresence>
  //       {list.map((item) =>
  //       <motion.div 
  //       key={item.id}
  //       initial={{opacity:0}}
  //       animate={{opacity:1}}
  //       exit={{opacity:0}}>
  //       <FeedbackItem key={item.id} item = {item} handleDelete = {handleDelete}/>
  //       </motion.div>
  //       )}
  //       </AnimatePresence>
  //   </div>
  // )
}

FeedbackList.propTypes = {
  list : PropTypes.arrayOf(
    PropTypes.shape({
      id:PropTypes.string.isRequired,
      text:PropTypes.string.isRequired,
      rating:PropTypes.number.isRequired,
    })
  )
}

export default FeedbackList