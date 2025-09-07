import React from 'react'
import Task from './Task'

const ActiveList = ({atasks, edit, del, complete}) => {
    return (
        <ul id="task-list" className="space-y-3">
            {atasks.map((task)=>(
                <Task key={task.id} task={task} edit={edit} del={del} complete={complete}/>
            ))}
        </ul>
    )
}

export default ActiveList