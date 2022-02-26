import React, { useState } from 'react'
import OneTask from './OneTask'

function Main() {

    const [listTask, setListTask] = useState([])
    const [taskIntent, setTaskIntent] = useState("")
    const [listTaskSelected, setListTaskSelected] = useState([])
    const [checkedTask, setCheckedTask] = useState(new Array(listTask.length))
    const [count, setCount] = useState(0)

    const handleChange = (e) =>{
        setTaskIntent(e.target.value)
    }

    const handleAddTask = (e) =>{
        e.preventDefault()
        if(taskIntent !== "") {
            let temp = listTask
            temp.push(taskIntent)
            setListTask(temp)
            setTaskIntent("")
        }
        console.log(checkedTask.length)
    }

    const handleDeleteSingleTask = (item) =>{
        const temp = listTask
        const list = temp.filter(elem =>elem !== item)
        setListTask(list)
        setCount(count => count + 1)
    }

    const handleDeleteSelected = () =>{

        const deleteList = listTaskSelected

        for (let index = 0; index < deleteList.length; index++) {
            const temp = listTask
            const secondTemp = listTaskSelected
            const list = temp.filter(elem =>elem !== deleteList[index])
            const secondList = secondTemp.filter(elem => elem !== deleteList[index])
            setListTask(list)
            setListTaskSelected(secondList)
            setCount(count => count + 1)
            console.log("hello")
        }

        console.log(listTask, listTaskSelected)
        setCount(count => count + 1)

    }


    return (
        <div className='main'>

            <form className='todo-header' onSubmit = {handleAddTask}>
                <div className='container-input'>
                    <input type="text" placeholder='Task name' value={taskIntent} onChange = {handleChange}/>
                </div>
                <div className='container-btn'>
                    <button className='btn-add-todo' type='submit'>ADD TODO</button>
                </div>
            </form>
            <div className='todos-list'>
                <div className='first-part'>
                    <div className='select-number'> {listTaskSelected.length} / {listTask.length} </div>
                    <button className='btn-clear-select' onClick={handleDeleteSelected}>X CLEAN ALL TODO</button>
                </div>
                <div className='list-todo'>
                    {
                        listTask.map((item, index) =>{
                            return <OneTask onClick = {() => handleDeleteSingleTask(item)} taskText = {item} value = {item} checked = {checkedTask[index]} 
                                handleChecked = {() =>{
                                    let number = 0
                                    for(let i = 0; i<listTaskSelected.length; i++ ) {
                                        if(listTaskSelected[i] === item ) {
                                            number = number + 1
                                        }
                                    }
                                    if(number === 0) {
                                        let temp = listTaskSelected
                                        temp.push(item)
                                        setListTaskSelected(temp)
                                        setCount(count => count + 1)
                                    }
                                    else {
                                        const temp = listTaskSelected
                                        const list = temp.filter(elem =>elem !== item)
                                        setListTaskSelected(list)
                                        setCount(count => count + 1)
                                    }

                                }}  />
                        } )
                    }
                </div>
            </div>
        </div>
    )
}

export default Main
