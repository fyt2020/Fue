
function constructObjectProxy(vm,obj,namespace){

     let proxyObj = {};

     for(let prop in obj){
            Object.defineProperty(proxyObj,prop,{
                 configurable:true,
                 get(){
                      return obj[prop]
                 },
                 set(newVal){
                       if(newVal != obj[prop] ){
                            proxyObj[prop] = newVal;
                            console.log('update')
                       }
                 }
            })
     }
     return proxyObj
}



export default function constructProxy(vm,obj,namespace){

        let obj1;
               if(obj instanceof Array){
               }else if(obj instanceof Object){
                          obj1 = constructObjectProxy(vm,obj,namespace)
               }
        return obj1
}