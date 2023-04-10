import React from 'react'
import { createContext,useState } from 'react'
import {v4 as uuid} from 'uuid'
const FeedbackContext = createContext()


export const FeedbackProvider = ({children}) => {

  const deleteFeedback = (id) => {
    if(window.confirm("Are you sure you want to delete this?")){
        setFeedback(feedback.filter((item)=>item.id !==id))
    }
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id=uuid()
    setFeedback([newFeedback,...feedback])
  }

  const [feedback,setFeedback] = useState([
    {
      id:uuid(),
      text: 'This is item 1',
      rating:10
    },
    {
      id:uuid(),
      text: 'This is item 2',
      rating:10
    },
    {
      id:uuid(),
      text: 'This is item 3',
      rating:10
    },
  ])
  

  return <FeedbackContext.Provider value={{feedback,deleteFeedback,addFeedback}}>
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext