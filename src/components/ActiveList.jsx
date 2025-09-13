import React, { useContext, useEffect, useState } from "react";
import Task from "./Task";
import TasksContext from "../contexts/TasksContext";

const ActiveList = () => {
  const tasksState = useContext(TasksContext);
  const [list, setList] = useState(
    tasksState.tasks.filter((task) => !task.done)
  );

  useEffect(() => {
    const activeTasks = tasksState.tasks.filter((task) => !task.done);
    console.log(activeTasks);
    setList(activeTasks);
  }, [tasksState.tasks]);

  return (
    <ul id="task-list" className="space-y-3">
      {list.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default ActiveList;
