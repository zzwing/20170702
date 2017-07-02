/**
 * Created by user on 2017/7/2.
 */
//只要在文件中，可以不用声明直接使用的都交全局对象
//服务端没有window 点击事件 没有那些ajax方法
// 服务端有global 上的对象都可以直接访问 ->全局对象
//process 进程
//buffer 缓存区 表示内存
//clearImmediate setImmediate
//clearInterval setInterval
//console --> log info error warn dir time timeEnd
//因为配置过node 可以右键run，也可以在命令行下执行文件
//在命令行下 可以通过 node + 文件名

/*console.time('a');
setTimeout(function(){
    console.timeEnd('a');
});*/

//setTimeout callback 异步 （事件环 node程序是时间环）
/*setTimeout(function(data,a){
    console.log(data+""+a);
    console.log(this);
},1000,'你好','buh');*/
/*etTimeout((data,a)=>{
    //console.log(data+""+a);
    console.log(this);
},0,'你好','buh');*/
//settimeout 可以传递参数 这里的this默认指向settimeout自己
//在箭头函数中 this指向{} 不是global

//setImmediate 立即 异步 不用配置时间 一般和不写时间的settimeout是一样的
/*
setImmediate(function(){
    console.log('立即');
})
*/

//process 进程 设置环境变量 生产环境 开发环境
//在开发的时候输出 我是谁，上线的时候输出 就是我
// environment 俩个系统 mac window 可以区分开发环境
// 设置环境变量 通过set a=b (注：a=b 不能加空格)设置 可以通过process。evn取出；
/*console.log(process.env.NODE_ENV == 'dev');
if(process.env.NODE_ENV == 'dev'){
    console.log('我是谁');
}else{
    console.log('就是我');
}*/
//服务端 全局变量global 挂载在global上的属性 可以直接获取
// var 声明的不会挂载在global上 为了解决模块化的问题；
global.global.global.console.log(1);
var  a = 1;
console.log(global.a);