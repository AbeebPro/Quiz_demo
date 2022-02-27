import React, {useRef} from 'react'

const Button = (props) => {
    const btnRef = useRef()
    const handleClick = () => {
        props.increment()
        props.check(btnRef)
    }
    return (
       <button ref = {btnRef} className = {props.class} onClick = {handleClick}>{props.option}</button>
    )
}


export default Button