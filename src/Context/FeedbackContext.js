import React, { useEffect } from 'react'
import { createContext,useState } from 'react'
import axios from 'axios'

const FeedbackContext = createContext()


export const FeedbackProvider = ({children}) => {
  const [feedback,setFeedback] = useState([
    // {
    //   id:uuid(),
    //   text: 'This is item 1',
    //   rating:10
    // },
    // {
    //   id:uuid(),
    //   text: 'This is item 2',
    //   rating:9
    // },
    // {
    //   id:uuid(),
    //   text: 'This is item 3',
    //   rating:9
    // },
  ])
  useEffect(() => {
    axios.get("https://localhost:44398/Rating/GetAll")
    .then(response => setFeedback(response.data)
    )
  //   fetch('https://localhost:44398/Rating/GetAll')
  //  .then(response => response.json())
  //  .then(data => console.log(data));
  },[feedback])
  const deleteFeedback = (id) => {
    if(window.confirm("Are you sure you want to delete this?")){
      //delete feed
      axios.delete("https://localhost:44398/Rating/Delete?id="+id)
    }
  }

  const addFeedback = (newFeedback) => {
    axios.post("https://localhost:44398/Rating/Add",
    {
      Rating: newFeedback.rating,
      Comment: newFeedback.comment
    })
  }

  
  
  const [feedbackEdit,setFeedbackEdit]=useState({
    item:{},
    edit:false
  })

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit:true
    }
    )
  }

  const updateFeedback = (id, updatedItem) =>{
    var x = {
      Id:id,
      Rating: updatedItem.rating,
      Comment: updatedItem.comment
    }
    axios.post("https://localhost:44398/Rating/Update",x)
  }
  return <FeedbackContext.Provider 
  value={{feedback,deleteFeedback,addFeedback,editFeedback,feedbackEdit,updateFeedback}}>
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext