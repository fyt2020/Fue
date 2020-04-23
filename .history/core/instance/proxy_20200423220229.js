
function constructObjectProxy(){

     let proxyObj = {};


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