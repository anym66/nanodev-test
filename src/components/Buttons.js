import React from 'react'

function Buttons({handleClick, btnColor, increment, children}) {
    return (
        <div>
            <button onClick = {() =>handleClick(increment) } className = {`btn btn-${btnColor}`}>+ %</button>
        </div>
    )
}

export default Buttons
