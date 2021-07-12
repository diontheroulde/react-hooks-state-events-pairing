import React, { useState } from "react"
import CommentList from "./CommentList"

const CommentSection = ({ comments }) => {
    const [isHidden, setIsHidden] = useState(false)

    const handleClick = () => {
        setIsHidden(!isHidden)
    }

    return (
        <div>
            <button onClick={handleClick}>{isHidden ? "Show Comments" : "Hide Comments"}</button>
            <hr></hr>
            {isHidden ? null : <CommentList comments={comments} /> }
        </div>
    )
}




   
    


export default CommentSection