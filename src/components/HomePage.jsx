import React, { useEffect, useState } from 'react'
import TasksViewer from './TasksViewer'
import AddForm from './AddForm'

const HomePage = () => {

  const [tasks, setTasks] = useState(() => {
    const data = window.localStorage.getItem('tasks')
    return data ? JSON.parse(data) : []
  })



  //save in local storage if the lists changed
  const saveTasks = (tasks)=>{
    window.localStorage.setItem('tasks' ,JSON.stringify(tasks))
  }


  //add new task
  const addTask = (txt) => {
    const newTask = {
      id: Date.now(),
      text: txt,
      done: false,
      completeDate: null
    }
    setTasks([...tasks, newTask])
    saveTasks(tasks)
  }

  //complete task
  const completeTask = (id) => {
    const task = tasks.find(t => t.id === id)
    if (task) {
      task.done = !task.done
      task.completeDate = task.done ? new Date().toISOString() : null
      deleteTask(task.id)
      setTasks([...tasks, task])
      saveTasks(tasks)
    }
  }


  //edit task
  const editTask = (id, txt) => {
    const task = tasks.find(t => t.id === id)
    if (task) {
      task.text = txt
      deleteTask(task.id)
      setTasks([...tasks, task])
      saveTasks(tasks)
    }
  }


  const deleteTask = (id) => {
    setTasks(tasks.filter(tasks => tasks.id !== id))
  }


  return (
    <>
      <div className='w-full max-w-2xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8'>
        <header className="text-center mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">To-Do List</h1>
          <p className="text-gray-400 mt-2">Stay organized, one task at a time.</p>
        </header>
        <AddForm add={addTask} />
        <TasksViewer tasks={tasks} edit={editTask} del={deleteTask} complete={completeTask} />
      </div>
    </>
  )
}


export default HomePage 