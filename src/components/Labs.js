import React from 'react'
import { useNavigate } from 'react-router-dom'

const Labs = () => {
    const navigate = useNavigate();

    function clickHandler() {
        //move to about page
        navigate("/about");
    }
    
    function backHandler() {
      navigate(-1);
  }
  return (<div>
    <div>
      This is labs Page
    </div>
    <button onClick={clickHandler}>Move to About Page</button>
    <button onClick={backHandler}>GO back</button>
  </div>
   
  )
}

export default Labs
