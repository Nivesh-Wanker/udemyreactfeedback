import React from 'react'
import Card from '../Shared/Card'
import Button from '../Shared/Button'
import { useState,useContext,useEffect } from 'react'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../Context/FeedbackContext'

// function FeedbackForm({handleAdd}) {
function FeedbackForm() {
    const [text,setText] = useState('')
    const [rating,setRating] = useState(10)
    const [btnDisabled,setBtnDisabled] = useState(true)
    const [message,setMessage] = useState('')
    const {addFeedback,feedbackEdit,updateFeedback} = useContext(FeedbackContext)

    useEffect(()=>{
        if(feedbackEdit.edit){
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    },[feedbackEdit])
    const handleTextChange = (e) =>{
        if(text === ''){
            setBtnDisabled(true)
            setMessage(null)
            setMessage('Text must me atleast 4 characters')
        }
        //submit button is enabled after 5 letters...bug...check later
        //when we press backspace, subit is getting disabled when there is one letter for a 4 letter word
        else if(text !== '' && text.trim().length < 3){
            setBtnDisabled(true)
            setMessage('Text must me atleast 4 characters')
        }
        else{
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(text.trim().length>3){
            const newFeedback = {
                text: text,
                rating: rating
            }
            console.log(feedbackEdit)
            console.log(newFeedback)
        // handleAdd(newFeedback)
        if(feedbackEdit.edit){
            updateFeedback(feedbackEdit.item.id,newFeedback)
        }
        else{
            addFeedback(newFeedback)
        }
        setText('')
        setBtnDisabled(true)
        }
    }
  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate our service?</h2>            
            <RatingSelect select = {(rating)=>setRating(rating)}/>
            <div className="input-group">
                <input onChange={handleTextChange} type={"text"} placeholder="Write your review" value={text}/>
                <Button type='Submit' version='primary' isDisabled={btnDisabled}>Submit</Button>
            </div>
            {message && <div>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm