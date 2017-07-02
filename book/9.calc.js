/**
 * Created by user on 2017/7/2.
 */
    //对象中的：function 函数可以省略

let obj = {
    "+"(a,b){
        return a+b;
    },
    "-"(a,b){
        return a-b;
    }
}
//exports.obj = obj;
module.exports = obj;
//obj['+'](2,1);
/*let a = 'b';
let obj = {
    [a]:1
}*/
(function(){
    module.exports = exports ={};
    exports.a = 1;
    return module.exports;
})();
