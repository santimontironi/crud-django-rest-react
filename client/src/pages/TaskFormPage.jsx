import { useForm } from "react-hook-form"; //este hook da todas las herramientas para manejar un formulario de forma más sencilla, sin tener que usar useState para cada campo ni escribir validaciones a mano.
import {sendTask} from "../api/TaskApi";

export const TaskFormPage = () => {

  const { register, handleSubmit, formState: { errors } } = useForm() //register conecta cada input al sistema de React Hook Form (sabe su valor, cuándo cambia, etc.)

  // Esta es la función que tiene handleSubmit como parámetro y es async porque necesita esperar la respuesta de la API después de enviar la tarea. Toda solicitud HTTP es asincrona.
  async function onSubmit(data) {
    await sendTask(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
  )
}
