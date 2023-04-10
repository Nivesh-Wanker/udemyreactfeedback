import React from 'react'
import FeedbackItem from './FeedbackItem'
//import {motion,AnimatePresence} from 'framer-motion'
import FeedbackContext from '../Context/FeedbackContext'
import { useContext } from 'react'

function FeedbackList({handleDelete}) {
  const {feedback}  = useContext(FeedbackContext)
  
  return (
    
    <div>
        {feedback.map((item) =>
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


export default FeedbackList