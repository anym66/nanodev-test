import React from 'react'

function OneTask(props) {


    return (
        <div className='task'>
            <div>
                <button onClick= {props.handleChecked} className = "check"></button>
                {/*<input type= 'checkbox' checked = {props.checked} onChange = {props.onChange} value = {props.value} />*/}
                <p className='task-text'> {props.taskText} </p>
            </div>
            <button className='delete-single' type='submit' onClick={props.onClick}>X</button>
        </div>
    )
}

export default OneTask
