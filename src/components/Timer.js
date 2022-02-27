import React, {useState, useRef, useEffect} from 'react'

const Timer = (props) => {
    const [secs, setSecs] = useState(0)
    const secRef = useRef()
    useEffect(() => {
        secRef.current = setInterval(() => {
            setSecs((prevSec) => {
                return prevSec + 1
            })
        }, 1000)
    }, [])

    return (
        <div>
            <h1>{secs}</h1>
        </div>
    )
}

export default Timer