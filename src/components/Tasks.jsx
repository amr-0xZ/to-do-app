import React, { useState, useEffect } from 'react'
import EmptyActive from './EmptyActive'
import ActiveList from './ActiveList'

const Tasks = ({ tasks, edit, del, complete }) => {

  const [view, setView] = useState(<ActiveList atasks={tasks} edit={edit} del={del} complete={complete} />)

  useEffect(() => {
    if (tasks.length == 0) {
      setView(<EmptyActive />)
    } else {
      setView(<ActiveList atasks={tasks} edit={edit} del={del} complete={complete}/>)
    }

  }, [tasks])

  return (
    <>
      {view}
    </>
  )
}

export default Tasks