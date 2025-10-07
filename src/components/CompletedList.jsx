import React, { useContext, useEffect, useState } from "react";
import DoneTask from "./DoneTask";
import TasksContext from "../contexts/TasksContext";

const CompletedList = () => {
  const tasksState = useContext(TasksContext);
  const [list, setList] = useState(
    tasksState.tasks.filter((task) => task.done)
  );

  useEffect(() => {
    const completedTasks = tasksState.tasks.filter((task) => task.done);
    console.log(completedTasks);
    setList(completedTasks);
  }, [tasksState.tasks]);
  return (
    <div id="completed-tasks-container">
      <ul id="completed-task-list" className="space-y-3">
        {list.map((task) => (
          <DoneTask key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default CompletedList;
