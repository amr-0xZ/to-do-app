import React, { useEffect, useState } from "react";
import Tasks from "./Tasks";
import CompletedTasks from "./CompletedTasks";

const TasksViewer = () => {
  const [view, setView] = useState(<Tasks />);
  const [active, setActive] = useState("tasks");
  const [activeTasks, setActiveTasks] = useState("text-white border-teal-500");
  const [activeCompleted, setActiveCompleted] = useState("border-transparent");

  useEffect(() => {
    if (active == "tasks") {
      setActiveTasks("text-white border-teal-500");
      setActiveCompleted("border-transparent");
    } else {
      setActiveTasks("border-transparent");
      setActiveCompleted("text-white border-teal-500");
    }
  }, [active]);

  return (
    <>
      <div className="flex border-b border-gray-700 mb-4">
        <button
          id="active-view-btn"
          onClick={() => {
            setView(<Tasks />);
            setActive("tasks");
          }}
          className={`flex-1 py-2 text-center cursor-pointer font-semibold  text-gray-400 hover:text-white  border-b-2  transition-colors ${activeTasks}`}
        >
          Active
        </button>
        <button
          id="completed-view-btn"
          onClick={() => {
            setView(<CompletedTasks />);
            setActive("completed");
          }}
          className={`flex-1 py-2 text-center font-semibold cursor-pointer text-gray-400 border-b-2  hover:text-white transition-colors ${activeCompleted}`}
        >
          Completed
        </button>
      </div>
      {view}
    </>
  );
};

export default TasksViewer;
