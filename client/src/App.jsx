import {BrowserRouter,Route,Routes} from "react-router-dom"
import {TasksPage} from './pages/TasksPage'
import {TaskFormPage} from './pages/TaskFormPage'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/tasks" element={<TasksPage/>}/>
        <Route path="/tasksForm" element={<TaskFormPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}
