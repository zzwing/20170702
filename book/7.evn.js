/**
 * Created by user on 2017/7/2.
 */
console.log(process.env.NODE_ENV == 'dev');
if(process.env.NODE_ENV == 'dev'){
    console.log('我是谁');
}else{
    console.log('就是我');
}