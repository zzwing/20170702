
/**
 * Created by user on 2017/7/2.
 */
//��ͷ����
//1.��ͷ��������Ҫfunction����
//2.�����ͷ������һ��{}��Ҫдreturn��
//3.thisָ�� ��ͷ������û��thisָ������thisָ����һ�����Ӷ������this����


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
//����ͨ����ͷ�������thisָ������
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
//��ȡstr��ô��
//Ҫ����첽���� ���ǻص����������������߼������������ݸ��������
let read = (fn) => {
    setTimeout(()=>{
        let str="hhh";
        fn(str);
    },2000);
}
read((data)=>{
    console.log(data);
});
//�첽��Զ��ͬ��֮��ִ�У����ͬ������ִ�в������ �첽��Զ���ᴥ��