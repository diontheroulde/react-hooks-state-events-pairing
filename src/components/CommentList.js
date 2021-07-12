import React from "react"

import Comment from "./Comment"

const CommentList = ({ comments }) => {
    const createComment = comments.map((comment) => (
      <Comment key={comment.id}
               user={comment.user}
               content={comment.comment} /> 
    ))
    return (
        <div>
            <h3>{comments.length} Comments</h3>
            <p>{createComment}</p>
        </div>
    )
}

export default CommentList