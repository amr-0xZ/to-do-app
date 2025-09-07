import React, {useState} from 'react'
import Tasks from './Tasks'
import CompletedTasks from './CompletedTasks'

const TasksViewer = ({tasks}) => {

  const [view, setView] = useState(<Tasks tasks={tasks}/>)

  return (
    <>
      <div className="flex border-b border-gray-700 mb-4">
        <button id="active-view-btn" onClick={()=>{setView(<Tasks tasks={tasks}/>)}} className="flex-1 py-2 text-center font-semibold text-white border-b-2 border-teal-500 transition-colors">Active</button>
        <button id="completed-view-btn" onClick={()=>{setView(<CompletedTasks/>)}} className="flex-1 py-2 text-center font-semibold text-gray-400 border-b-2 border-transparent hover:text-white transition-colors">Completed</button>
      </div>
      {view}
    </>
  )
}

export default TasksViewer