
export function setLocalItem(key,val){
    if(typeof val == 'object'){
        val = JSON.stringify(val)
    }
    window.localStorage.setItem(key,val)
}

export function getLocalItem(key){
   return window.localStorage.getItem(key)
}