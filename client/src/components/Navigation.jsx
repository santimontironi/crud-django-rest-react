import {Link} from "react-router-dom"


export const Navigation = () => {
  return (
    <div className="flex justify-between py-3">
        <Link to='/tasks'>
            <h1 className="font-bold text-3xl mt-4">Tasks</h1>
        </Link>

        <button className="bg-indigo-700 rounded-lg px-3">
          <Link to='/tasksForm'>
              <h1>Task form</h1>
          </Link>
        </button>
    </div>
  )
}
