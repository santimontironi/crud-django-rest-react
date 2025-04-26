import { useForm } from "react-hook-form"; //este hook da todas las herramientas para manejar un formulario de forma más sencilla, sin tener que usar useState para cada campo ni escribir validaciones a mano.

export const TaskFormPage = () => {

  const { register, handleSubmit } = useForm() //register conecta cada input al sistema de React Hook Form (sabe su valor, cuándo cambia, etc.)
  
    //esta es la funcion que tiene handleSubmit como parametro.
    function onSubmit(data){
      console.log(data)
    }


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="title" {...register("title", { required: true })} />
      <textarea rows="3" placeholder="Description" {...register("description", { required: true })}></textarea>
      <button>Save</button>
    </form>
  )
}
