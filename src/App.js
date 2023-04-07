import React from "react";
import { useState } from "react";
import Header from "./Components/Header";
import FeedbackList from "./Components/FeedbackList";
import FeedbackData from "./Data/FeedbackData";
import FeedbackStats from "./Components/FeedbackStats"
import FeedbackForm from "./Components/FeedbackForm";
import {v4 as uuid} from 'uuid'
import AboutPage from "./Pages/AboutPage"
import {Route,Routes} from "react-router-dom"
import AboutIconLink from "./Components/AboutIconLink";
import Post from "./Components/Post";
import { FeedbackProvider } from './Context/FeedbackContext';
import { BrowserRouter } from 'react-router-dom';


//useparams() to use data from url to the page
///post/* - * is used for child routes
function App(){
    const [feedback,setFeedback] = useState(FeedbackData);
    const deleteFeedback = (id) => {
        if(window.confirm("Are you sure you want to delete this?")){
            setFeedback(feedback.filter((item)=>item.id !==id))
        }
    }
    const addFeedback = (newFeedback) => {
        newFeedback.id=uuid()
        setFeedback([newFeedback,...feedback])
    }
    return (
        <FeedbackProvider>
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element = {
            <div className="container">
                <Header text='Feedback'/>
                <FeedbackForm handleAdd = {addFeedback}/>
                <FeedbackStats feedback = {feedback}/>
                {/* <FeedbackStats feedback = {feedback}/> */}
                <FeedbackList list={feedback} handleDelete = {deleteFeedback} />
                {/* <FeedbackList handleDelete = {deleteFeedback} /> */}
                <AboutIconLink/>
            </div> } />
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/post/:id/:name/*" element={<Post/>}/>
        </Routes>
    </BrowserRouter>
    </FeedbackProvider>

        // React.createElement("div",{className: "Container"},
        // React.createElement("h1",{},"Hi from App"),
        // React.createElement("p",{},"Paragraph1")
        //)
    )
}

export default App;
