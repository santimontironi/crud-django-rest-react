import { useEffect, useState } from "react"
import { getAllTasks } from "../api/TaskApi"
import {TaskCard} from "./TaskCard";

export const TaskList = () => {

    const[tasks,setTask] = useState([])
    
    useEffect(() => {
        async function loadTasks(){
            const res = await getAllTasks()
            setTask(res.data)
        }
        loadTasks()
    },[])

    return (
        <div className="containerTasks">
            {tasks.map(task=>(
                <TaskCard key={task.id} task={task}/>
            ))}

            {tasks.length === 0 && (
                <p>No hay tareas aún</p>
            )}
        </div>
    )
}
