
/**
 * Created by user on 2017/7/2.
 */
//箭头函数
//1.箭头函数不需要function声明
//2.如果箭头后面是一个{}需要写return；
//3.this指向 箭头函数中没有this指向，所以this指向上一级，从而解决了this问题


//let a = b =>{return b};
//let a = b => b;
//
//function read(b,c){
//    return b;
//}
//let a = (b,c) => b+c;


//function a(b){
//    return function c(d){
//        return b+d;
//    }
//}
//let a = b =>{return c = d =>b+d};

let a = b => d => b+d;
console.log(a(1)(2));
//可以通过箭头函数解决this指向问题
/*
let obj = {
    a: function () {
        setTimeout(function(){
            console.log(this);//window
        });
    }
}
obj.a();*/
/*
let obj = {
    a: function () {
        setTimeout(function(){
            console.log(this);//obj
        }).bind(this);
    }
}
obj.a();*/

/*let obj = {
    a: function () {
        setTimeout( ()=>{
            console.log(this);//obj
        })
    }
}
obj.a();*/
let obj = {
    a : ()=> {
        setTimeout( ()=>{
            console.log(this);//obj
        })
    }
}
obj.a();

/*let read = () => {
    setTimeout(()=>{
        let str="hhh";
    },2000);
}*/
//获取str怎么办
//要解决异步问题 就是回调函数，将后续的逻辑当做参数传递给这个函数
let read = (fn) => {
    setTimeout(()=>{
        let str="hhh";
        fn(str);
    },2000);
}
read((data)=>{
    console.log(data);
});
//异步永远在同步之后执行，如果同步代码执行不能完成 异步永远不会触发