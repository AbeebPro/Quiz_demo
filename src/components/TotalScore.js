import React from 'react'

const TotalScore = (props) => {
    return (
        <div>
            Your Total Score is {props.score} / {props.maxScore}
        </div>
    )
}

export default TotalScore
