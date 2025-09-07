import React from 'react'

const Task = ({task}) => {
    return (
        <>
            <li className='task-item flex items-center gap-4 p-4 rounded-lg transition-all bg-gray-700/60'>
                <input
                    type="checkbox"
                    className="custom-checkbox appearance-none h-5 w-5 rounded border-2 border-gray-500 cursor-pointer transition-colors flex-shrink-0"
                    aria-label="Mark task as complete"
                ></input>
                    <span className="flex-grow text-lg text-gray-100">${task}</span>
                    <div className="flex gap-2">
                        <button className="edit-btn p-2 rounded-md hover:bg-gray-600/50 transition-colors" aria-label="Edit task">
                            <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z"></path></svg>
                        </button>
                        <button className="delete-btn p-2 rounded-md hover:bg-gray-600/50 transition-colors" aria-label="Delete task">
                            <svg className="w-5 h-5 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                        </button>
                    </div>
            </li>
        </>
    )
}

export default Task