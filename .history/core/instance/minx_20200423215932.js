var uid = 0
import constructProxy from './proxy.js'
export default function initminx(Fue){
    Fue.prototype._init = function (options){
            let vm = this;
            this.isFue = true;
            this.uid = uid++;
            if(options && options.data){
                console.log(options)
                vm_data = constructProxy(options.data);
            }
    }
}