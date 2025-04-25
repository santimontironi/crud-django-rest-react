import {Link} from "react-router-dom"


export const Navigation = () => {
  return (
    <div>
        <Link to='/tasks'>
            <h1>Tasks</h1>
        </Link>

        <Link to='/tasksForm'>
            <h1>Task form</h1>
        </Link>
    </div>
  )
}
