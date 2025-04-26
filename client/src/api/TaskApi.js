import axios from 'axios'

const config = axios.create({
    baseURL:'http://localhost:8000/tasks/api/tasks/'
})

export const getAllTasks = () => {
    return config.get('/') //la barra '/' hace referencia a baseURL
}

export const sendTask = (task) =>{
    return config.post('/',task)
}