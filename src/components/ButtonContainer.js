import React from "react"

import VoteButton from "./VoteButton"

const ButtonContainer = ({ upvotes, downvotes }) => {
   
return (
        <div>
            <VoteButton votes={upvotes}
                        emoji={"👍"} />
            <VoteButton votes={downvotes}
                        emoji={"👍"}/>
        </div>
    )
}

export default ButtonContainer