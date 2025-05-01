import {BrowserRouter,Route,Routes,Navigate} from "react-router-dom"
import {TasksPage} from './pages/TasksPage'
import {TaskFormPage} from './pages/TaskFormPage'
import { Navigation } from "./components/Navigation"
import { Toaster } from "react-hot-toast"

export const App = () => {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
      <Navigation/>
        <Routes>
          <Route path="/" element={<Navigate to = "/tasks" />}/>
          <Route path="/tasks" element={<TasksPage/>}/>
          <Route path="/tasksForm" element={<TaskFormPage/>}/>
          <Route path="/task/:id" element={<TaskFormPage/>}/>
        </Routes>
        <Toaster/>
      </div>
    </BrowserRouter>
  )
}
