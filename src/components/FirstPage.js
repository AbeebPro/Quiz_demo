import React from 'react'

const FirstPage = (props) => {
    const handleClick = () => {
        props.startQuiz()
    }
    return (
        <div className = "start-page">
            <h1>Quiz Demo</h1>
            <p>Click start to play</p>
            <button onClick = {handleClick} class = "start-btn">Start Quiz</button>
        </div>
    )
}

export default FirstPage
