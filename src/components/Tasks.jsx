import React, { useState, useEffect } from "react";
import EmptyActive from "./EmptyActive";
import ActiveList from "./ActiveList";

const Tasks = ({ tasks, edit, del, complete }) => {
  // const [view, setView] = useState(<ActiveList atasks={tasks} edit={edit} del={del} complete={complete} />)

  return (
    <>
      {tasks.length === 0 ? (
        <EmptyActive />
      ) : (
        <ActiveList atasks={tasks} edit={edit} del={del} complete={complete} />
      )}
    </>
  );
};

export default Tasks;
