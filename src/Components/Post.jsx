import React from 'react'
import { useParams } from 'react-router-dom'
import { Navigate,useNavigate,Routes,Route } from 'react-router-dom'

function Post() {
    const params = useParams()
    const navigate = useNavigate()
    const status=200
    if(status===404){
        return <Navigate to='/notFound'/>
    }
    const onClick = () =>{
        console.log("Hello")
        navigate('/about')
    }
  return (
    <div>
        <h1>Post {params.id}</h1>
        <p>{params.name}</p>
        <button onClick={onClick}>Click</button>
        <Routes>
            <Route path='/show' element={<h1>Show</h1>}/>
        </Routes>
    </div>
  )
}

export default Post