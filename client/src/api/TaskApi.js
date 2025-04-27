import axios from 'axios'

//se almacena la url a la que React debe llamar
const config = axios.create({
    baseURL:'http://localhost:8000/tasks/api/tasks/'
})

//funcion que realiza la petición get
export const getAllTasks = () => {
    return config.get('/') //la barra '/' hace referencia a baseURL
}

//funcion que realiza la petición post
export const sendTask = (task) =>{
    return config.post('/',task)
}

export const deleteTask = (id) => {
    return config.delete(`/${id}/`)
}