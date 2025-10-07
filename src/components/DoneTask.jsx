import React, { useState, useContext } from "react";
import TasksContext from "../contexts/TasksContext";
import { toast } from "react-toastify";

const DoneTask = ({ task }) => {
  const tasksState = useContext(TasksContext);

  const dateIso = new Date(task.completeDate);
  const humanDate = dateIso.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  //delete button handeler
  const deleteHandle = () => {
    deleteTask(task.id);
    toast.error("One task deleted");
  };

  //delete functionality
  const deleteTask = (id) => {
    const edited = tasksState.tasks.filter((task) => task.id !== id);
    tasksState.setTasks(edited);
  };

  const redoHandle = (e) => {
    unDo(task.id);
    toast.info("Re do one task");
  };

  //un completing task functionality
  const unDo = (id) => {
    const etask = tasksState.tasks.filter((t) => {
      t.id === id;
    });
    if (etask) {
      etask.done = false;
      etask.completeDate = null;
      etask.text = task.text;
      etask.id = id;
      const editedTask = { ...etask };
      const edited = tasksState.tasks.filter((task) => task.id !== id);
      edited.push(editedTask);
      tasksState.setTasks(edited);
    }
  };

  return (
    <>
      <div>
        <span className="flex-grow text-lg line-through text-gray-400">
          {task.text}
        </span>
        <p className="text-xs text-gray-500 mt-1">Completed: {humanDate}</p>
      </div>
      <div className="flex gap-2">
        <button
          className="uncheck-btn p-2 rounded-md hover:bg-gray-600/50 transition-colors"
          aria-label="Mark task as incomplete"
          onClick={redoHandle}
        >
          <svg
            className="w-5 h-5 text-yellow-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 14l9-5-9-5-9 5 9 5z"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 14l6.16-3.422A12.083 12.083 0 0121 12c0 6.627-5.373 12-12 12S-3 18.627-3 12a12.083 12.083 0 012.84-6.422L12 14z"
            ></path>
          </svg>
        </button>
        <button
          className="delete-btn p-2 rounded-md hover:bg-gray-600/50 transition-colors"
          aria-label="Delete task"
          onClick={deleteHandle}
        >
          <svg
            className="w-5 h-5 text-rose-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            ></path>
          </svg>
        </button>
      </div>
    </>
  );
};

export default DoneTask;
