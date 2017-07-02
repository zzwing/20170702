/**
 * Created by user on 2017/7/2.
 */

    //导出的函数不要是箭头函数
    // reduce 查一查具体是做什么的；
let sum = function(){
    let count = 0;
    //类数组转化成数组
    //Array.form(arguments);
    //[].slice().call(arguments);
    //arguments.forEach(item=>count+=item);

    for(let i = 0;i<arguments.length;i++){
        count += arguments[i];
    }
    return count;
}
//1.module.exports = sum;
//2.exports.sum = sum;
//3.global.sum = sum;
//尽量不要在global上挂载属性

//用。。。可以将argument里参数全部整合到数组arr里 ES6
// 剩余运算符；
function sum1(...arr){
    console.log(arr);
    let total = 0;
    arr.forEach(item =>total+=item);
    return total;
}
//console.log(sum1(1,2,3));