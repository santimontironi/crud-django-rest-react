import {useNavigate} from "react-router-dom";

export const TaskCard = ({task}) => {
  const navigate = useNavigate()
  return (
    <div className="bg-zinc-800 p-3 hover:cursor-pointer hover:bg-zinc-600" key={task.id} onClick={() =>{
      navigate('/task/' + task.id)
    }}>
        <h1 className="font-bold uppercase">{task.title}</h1>
        <p className="text-slate-400">{task.description}</p>
    </div>
  )
}
