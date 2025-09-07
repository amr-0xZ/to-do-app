import React, {useState} from 'react'
import TasksViewer from './TasksViewer'
import AddForm from './AddForm'

const HomePage = () => {

  const [tasks, setTasks] = useState([])
  
  const addTask = (task)=>{
    setTasks(tasks=>[...tasks, task])
  }

  return (
    <>
      <div className='w-full max-w-2xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8'>
        <header className="text-center mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">To-Do List</h1>
          <p className="text-gray-400 mt-2">Stay organized, one task at a time.</p>
        </header>
        <AddForm add={addTask}/>
        <TasksViewer tasks={tasks}/>
      </div>
    </>
  )
}

export default HomePage