import React, {useState} from 'react'

const AddForm = ({add}) => {

    const [task, setTask] = useState('')

    const addTask = (form)=>{
        form.preventDefault()
        if(task){
        add(task)
        setTask('')
        }
    }

  return (
    <>
        <form id="add-task-form" className="flex gap-3 mb-6" onSubmit={addTask}>
          <input
            type="text"
            id="task-input"
            value={task}
            placeholder="e.g., Learn a new skill"
            className="flex-grow bg-gray-700/50 text-gray-100 placeholder-gray-400 rounded-lg px-4 py-3 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent transition"
            aria-label="New task input"
            onChange={(e)=>{setTask(e.target.value)}}
          ></input>
          <button
            type="submit"
            className="bg-teal-800 text-white font-semibold rounded-lg px-5 py-3 hover:bg-teal-700 active:scale-95 transition-all shadow-lg"
            aria-label="Add new task"
          >
            Add Task
          </button>
        </form>
    </>
  )
}

export default AddForm