import React, { useState, useEffect, useContext } from "react";
import EmptyActive from "./EmptyActive";
import ActiveList from "./ActiveList";
import TasksContext from "../contexts/TasksContext";

const Tasks = () => {
  const tasksState = useContext(TasksContext);
  const [view, setView] = useState(<EmptyActive />);

  useEffect(() => {
    const activeTasks = tasksState.tasks.filter((task) => !task.done);
    if (activeTasks.length == 0) {
      setView(<EmptyActive />);
    } else {
      setView(<ActiveList />);
    }
  }, [tasksState.tasks]);

  return <>{view}</>;
};

export default Tasks;
