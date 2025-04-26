export const TaskCard = ({task}) => {
  return (
    <div className="task" key={task.id}>
        <h1>{task.title}</h1>
        <p>{task.description}</p>
        <hr />
    </div>
  )
}
