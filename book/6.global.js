/**
 * Created by user on 2017/7/2.
 */
//ֻҪ���ļ��У����Բ�������ֱ��ʹ�õĶ���ȫ�ֶ���
//�����û��window ����¼� û����Щajax����
// �������global �ϵĶ��󶼿���ֱ�ӷ��� ->ȫ�ֶ���
//process ����
//buffer ������ ��ʾ�ڴ�
//clearImmediate setImmediate
//clearInterval setInterval
//console --> log info error warn dir time timeEnd
//��Ϊ���ù�node �����Ҽ�run��Ҳ��������������ִ���ļ�
//���������� ����ͨ�� node + �ļ���

/*console.time('a');
setTimeout(function(){
    console.timeEnd('a');
});*/

//setTimeout callback �첽 ���¼��� node������ʱ�价��
/*setTimeout(function(data,a){
    console.log(data+""+a);
    console.log(this);
},1000,'���','buh');*/
/*etTimeout((data,a)=>{
    //console.log(data+""+a);
    console.log(this);
},0,'���','buh');*/
//settimeout ���Դ��ݲ��� �����thisĬ��ָ��settimeout�Լ�
//�ڼ�ͷ������ thisָ��{} ����global

//setImmediate ���� �첽 ��������ʱ�� һ��Ͳ�дʱ���settimeout��һ����
/*
setImmediate(function(){
    console.log('����');
})
*/

//process ���� ���û������� �������� ��������
//�ڿ�����ʱ����� ����˭�����ߵ�ʱ����� ������
// environment ����ϵͳ mac window �������ֿ�������
// ���û������� ͨ��set a=b (ע��a=b ���ܼӿո�)���� ����ͨ��process��evnȡ����
/*console.log(process.env.NODE_ENV == 'dev');
if(process.env.NODE_ENV == 'dev'){
    console.log('����˭');
}else{
    console.log('������');
}*/
//����� ȫ�ֱ���global ������global�ϵ����� ����ֱ�ӻ�ȡ
// var �����Ĳ��������global�� Ϊ�˽��ģ�黯�����⣻
global.global.global.console.log(1);
var  a = 1;
console.log(global.a);