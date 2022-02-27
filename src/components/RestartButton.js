import React from 'react'

const RestartButton = (props) => {
    const clickHandler = () => {
        props.restart()
    }
    return (
       <button onClick = {clickHandler} className = "restart">{props.text}</button>
    )
}

export default RestartButton
