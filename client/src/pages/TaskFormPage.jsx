import { useForm } from "react-hook-form";

export const TaskFormPage = () => {

  const { register } = useForm() //register es para registrar inputs

  return (
    <form action="">
      <input type="text" placeholder="title" {...register("title", { required: true })} />
      <textarea rows="3" placeholder="Description" {...register("description", { required: true })}></textarea>
      <button>Save</button>
    </form>
  )
}
