import axios from "axios";
import {setLocalItem,getLocalItem} from "./cookie.js"

const instance = axios.create({
  baseURL: "/mock",
  timeout: 1000,
//   headers: { "X-Custom-Header": "foobar" },
});

instance.interceptors.request.use(function (config) {
  console.log("config",config)
  
  let jwt = getLocalItem("TOKEN")
  if(jwt){
    Object.assign(config.headers,{
      token:jwt
    })
  }
  console.log("config",config)
  return config;
}, function (error) {
  return Promise.reject(error);
});

export default instance
