/**
 * Created by user on 2017/7/2.
 */
setTimeout(()=>{
    console.log(1);
});
while(true){

}
//异步永远在同步之后执行，如果同步代码执行不能完成 异步永远不会触发

//非阻塞是实现异步的前提条件

//单线程 node 是单线程 基于js的 单线程异步  ：
//多线程 java 多线程同步  ：感觉同一时间干很多事情，快速切换上下文
//js中的多线程 h5 webworker
//node 如果想开多线程 要开子进程
