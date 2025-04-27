import {useNavigate} from "react-router-dom";

export const TaskCard = ({task}) => {
  const navigate = useNavigate()
  return (
    <div className="task" key={task.id} onClick={() =>{
      navigate('/task/' + task.id)
    }}>
        <h1>{task.title}</h1>
        <p>{task.description}</p>
        <hr />
    </div>
  )
}
