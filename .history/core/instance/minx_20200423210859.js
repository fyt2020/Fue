var uid = 0

export default function initminx(Fue){

    Fue.prototype._init = function (options){

            let vm = this;
            this.isFue = true;
            this.uid = uid++

    }



}