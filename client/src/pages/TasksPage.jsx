import { useEffect, useState } from "react"
import { getAllTasks } from "../api/TaskApi"
import { TaskCard } from "../components/TaskCard";


export const TasksPage = () => {

  const[tasks,setTask] = useState([])
    
    useEffect(() => {
        async function loadTasks(){
            const res = await getAllTasks()
            setTask(res.data)
        }
        loadTasks()
    },[])

    return (
        <div className="grid grid-cols-3 gap-3">
            {tasks.map(task=>(
                <TaskCard key={task.id} task={task}/>
            ))}

            {tasks.length === 0 && (
                <p>No hay tareas aún</p>
            )}
        </div>
    )

}
