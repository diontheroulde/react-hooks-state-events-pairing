import React from "react"

const Comment = ({ user, content }) => {
  return (
    <div>
      <h4>{user}</h4> 
      <p>{content}</p>
    </div>
  )
}

export default Comment