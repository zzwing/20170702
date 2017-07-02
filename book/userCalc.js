/**
 * Created by user on 2017/7/2.
 */
//引用文件模块必须使用相对路径，可以不增加后缀名，会自动添加.js .json .node 报错

//同步 还是 异步怎么区分
// 有回调函数的是异步的
// require 是同步方法
// 1.可以给exports增加属性 他会导致module。exports的变化
// 2.直接改module。exports 的指向
// 3。错误 直接给exports 不是改变module.exports 的值；
let calc = require('./9.calc.js');
console.log(calc);
//通过require 拿到的不是另一个文件的exports 而是另一个文件的module.exports 对象
//module.exports
//exports
//{}
/*
let a =b  = {};
b.q = q;
console.log(a);*/
