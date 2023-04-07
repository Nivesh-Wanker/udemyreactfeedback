import React from 'react'
import Card from '../Shared/Card'
import Button from '../Shared/Button'
import { useState } from 'react'
import RatingSelect from './RatingSelect'

function FeedbackForm({handleAdd}) {
    const [text,setText] = useState('')
    const [rating,setRating] = useState(10)
    const [btnDisabled,setBtnDisabled] = useState(true)
    const [message,setMessage] = useState('')

    const handleTextChange = (e) =>{
        if(text === ''){
            setBtnDisabled(true)
            setMessage(null)
            setMessage('Text must me atleast 4 characters')
            console.log(text.trim().length+"if")
        }
        //submit button is enabled after 5 letters...bug...check later
        else if(text !== '' && text.trim().length < 3){
            setBtnDisabled(true)
            setMessage('Text must me atleast 4 characters')
            console.log(text.trim().length+"elseif")
        }
        else{
            setMessage(null)
            setBtnDisabled(false)
            console.log(text.trim().length+"else")
        }
        setText(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(text.trim().length>4){
            const newFeedback = {
                text: text,
                rating: rating
            }
        handleAdd(newFeedback)
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