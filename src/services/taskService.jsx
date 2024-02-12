import { httpAxios } from "@/app/helper/httphelper";


export async function addTask(task){
    const result =await httpAxios.post('/api/tasks',task).then((response)=>response.data)
    return result 
}

export async function getTaskofUser(userId){
    const result =await httpAxios.get(`/api/user/${userId}/tasks`).then((response)=>response.data)
    return result 
}

export async function deleteTask(TaskId){
    const result =await httpAxios.delete(`/api/tasks/${TaskId}`).then((response)=>response.data)
    return result 
}