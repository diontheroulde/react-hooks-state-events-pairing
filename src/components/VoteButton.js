import React, { useState } from "react"

const VoteButton = ({ votes, emoji }) => {
    const [count, setCount] = useState(votes)

    const increment = () => {
        setCount(count + 1)
    }

    return (
        <button onClick={increment}>{count}{emoji}</button>
    )
}

export default VoteButton

