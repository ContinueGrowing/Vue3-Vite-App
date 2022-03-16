import request from "./request.js"




export function login (data){
    return request({
        url:"/login",
        data,
        method:"post"
    })
}








