
function constructObjectProxy(vm,obj,namespace){

     let proxyObj = {};

     for(let prop in obj){
            Object.defineProperty(proxyObj,prop,{
                 configurable:true,
                 get(){
                      
                      return obj[prop]
                 },
                 set:function(newVal){
                       if(newVal != obj[prop] ){
                            obj[prop] = newVal;
                            
                       }
                 }
            })
            Object.defineProperty(vm,prop,{
                configurable:true,
                get(){
                     
                     return obj[prop]
                },
                set:function(newVal){
                      if(newVal != obj[prop] ){
                           obj[prop] = newVal;
                      }
                }
           });
           if(obj[prop] instanceof Object){

               proxyObj[prop] = constructProxy(vm,obj[prop],getNameSpace(namespace,prop))

             
           }
     }
     return proxyObj
}

function getNameSpace(namespace,curProp){
      if(namespace == null || namespace == "" ){
              return curProp
      }else if(curProp == null || curProp == "" ){
              return namespace
      }else{
        return namespace + '' + curProp
      }
}



export default function constructProxy(vm,obj,namespace){

        let obj1;
               if(obj instanceof Array){
               }else if(obj instanceof Object){
                          obj1 = constructObjectProxy(vm,obj,namespace)
               }else{

                   throw new Error('hah')
               }
        return obj1
}