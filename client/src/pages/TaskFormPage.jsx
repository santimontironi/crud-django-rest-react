import { useForm } from "react-hook-form"; //este hook da todas las herramientas para manejar un formulario de forma más sencilla, sin tener que usar useState para cada campo ni escribir validaciones a mano.
import {createTask, deleteTask, putTask, getTask} from "../api/TaskApi";
import {useNavigate,useParams} from "react-router-dom";
import { useEffect } from "react";
import {toast} from "react-hot-toast";

export const TaskFormPage = () => {

  const { register, handleSubmit, formState: { errors }, setValue} = useForm() //register conecta cada input al sistema de React Hook Form (sabe su valor, cuándo cambia, etc.), setValue es para darle valores a los inputs.

  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    async function taskData(){
      if(params.id){
        const res = await getTask(params.id)
        setValue('title',res.data.title)
        setValue('description',res.data.description)
      }
    }
    taskData()
  },[params.id])

  //Esta es la función que tiene handleSubmit como parámetro y es async porque necesita esperar la respuesta de la API después de enviar la tarea. Toda solicitud HTTP es asincrona.
  async function submitForm(data) { //data lo genera handleSubmit, es un objeto con los valores de los inputs registrados con register.
    if (params.id){
      await putTask(params.id,data)
      toast.success("Task updated",{
        style:{
          background: "#392F5A",
          color: "#fff"
        }
      })
    }else{
      await createTask(data)
      toast.success("Task created",{
        style:{
          background: "#3E5622",
          color: "#fff"
        }
      })
    }
    navigate('/tasks')
  }

  return (
    <div className="max-w-xl mx-auto flex flex-col items-center justify-center">
        <form onSubmit={handleSubmit(submitForm)}>
        <input className="bg-zinc-700 p-3 rounded-lg w-full mb-3" type="text" placeholder="title" {...register("title", { required: true })} />
        {errors.title && (
          <p>This title is required</p>
        )}
        <textarea className="bg-zinc-700 p-3 rounded-lg w-full" rows="3" placeholder="Description" {...register("description", { required: true })}></textarea>
        {params.id ? (
          <button className="bg-blue-600 text-white p-3 rounded-lg mt-3 w-full hover:cursor-pointer hover:bg-blue-800 ">Update task</button>
        ) : (
          <button className="bg-green-600 text-white p-3 rounded-lg mt-3 w-full hover:cursor-pointer hover:bg-green-800">Add task</button>
        )}
        {errors.description && (
          <p>This textarea is required</p>
        )}
      </form>

      {/* condicional para saber si la url tiene un id como parametro (lo va a tener cuando estemos en la ruta de cada tarea) */}
      {params.id &&(
        <button className="bg-red-700 rounded-lg p-3 mt-3 hover:cursor-pointer hover:bg-red-600" onClick={async () => {
          const accepted = window.confirm('Are you sure?')
          if(accepted){
            await deleteTask(params.id)
            navigate('/tasks')
            toast.success("Task eliminated",{
              style:{
                background: "#D62828",
                color: "#fff"
              }
            })
          }
        }}>Delete</button>
      )}
    </div>
  )
}
