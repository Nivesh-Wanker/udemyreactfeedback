import React from "react";
// import { useState } from "react";
import Header from "./Components/Header";
import FeedbackList from "./Components/FeedbackList";
// import FeedbackData from "./Data/FeedbackData";
import FeedbackStats from "./Components/FeedbackStats"
import FeedbackForm from "./Components/FeedbackForm";
import AboutPage from "./Pages/AboutPage"
import {Route,Routes} from "react-router-dom"
import AboutIconLink from "./Components/AboutIconLink";
import Post from "./Components/Post";
import { FeedbackProvider } from './Context/FeedbackContext';
import { BrowserRouter } from 'react-router-dom';


//useparams() to use data from url to the page
///post/* - * is used for child routes
function App(){
    // const [feedback,setFeedback] = useState(FeedbackData);
    
    
    return (
        <FeedbackProvider>
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element = {
            <div className="container">
                <Header text='Feedback'/>
                {/* <FeedbackForm handleAdd = {addFeedback}/> */}
                <FeedbackForm />
                {/* <FeedbackStats feedback = {feedback}/> */}
                <FeedbackStats />
                {/* <FeedbackList list={feedback} handleDelete = {deleteFeedback} /> */}
                {/* <FeedbackList handleDelete = {deleteFeedback} /> */}
                <FeedbackList />
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
