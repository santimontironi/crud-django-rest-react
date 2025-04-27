import { useForm } from "react-hook-form"; //este hook da todas las herramientas para manejar un formulario de forma más sencilla, sin tener que usar useState para cada campo ni escribir validaciones a mano.
import {sendTask, deleteTask} from "../api/TaskApi";
import {useNavigate,useParams} from "react-router-dom";

export const TaskFormPage = () => {

  const { register, handleSubmit, formState: { errors } } = useForm() //register conecta cada input al sistema de React Hook Form (sabe su valor, cuándo cambia, etc.)

  const navigate = useNavigate()
  const params = useParams()

  //Esta es la función que tiene handleSubmit como parámetro y es async porque necesita esperar la respuesta de la API después de enviar la tarea. Toda solicitud HTTP es asincrona.
  async function submitForm(data) { //data lo genera handleSubmit, es un objeto con los valores de los inputs registrados con register.
    await sendTask(data)
    navigate('/tasks')
  }

  return (
    <div>
        <form onSubmit={handleSubmit(submitForm)}>
        <input type="text" placeholder="title" {...register("title", { required: true })} />
        {errors.title && (
          <p>This title is required</p>
        )}
        <textarea rows="3" placeholder="Description" {...register("description", { required: true })}></textarea>
        <button>Save</button>
        {errors.description && (
          <p>This textarea is required</p>
        )}
      </form>

      {/* condicional para saber si la url tiene un id como parametro (lo va a tener cuando estemos en la ruta de cada tarea) */}
      {params.id &&(
        <button onClick={async () => {
          const accepted = window.confirm('Are you sure?')
          if(accepted){
            await deleteTask(params.id)
            navigate('/tasks')
          }
        }}>Delete</button>
      )}
    </div>
  )
}
