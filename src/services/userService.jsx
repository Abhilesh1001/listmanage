import { httpAxios } from "@/app/helper/httphelper";

export async function signUp(user){
    const result = await httpAxios.post('/api/user',user).then((response)=>response.data)
    return result
}

export async function login(Logindata){
    const result=await httpAxios.post('/api/login',Logindata).then(response=>response.data)
    return result
}

export async function currentUser(){
    const result= await httpAxios.get('/api/current').then(response=>response.data)
    return result
}


export async function logout(){
    const result= await httpAxios.post('/api/logout').then(response=>response.data)
    return result
}