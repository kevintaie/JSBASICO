//Var permite redeclarar variables, let no, solo cambiar el valor y const lo mantiene fijo
//PROMT;ALERT;CONFIRM; ELEMENTOS EN CONSOLA
//(TEMPLATE LITERALS) CON ACENTO GRAVE Y SIGNO PESOS ENTRE LLAVES DE NOMBRE VARIABLE
//TIPOS DE DATOS: STRING;NUMBER;BOOLEAN;SYMBOLO;NULL;UNDEFINED
let valor;
//SIMBOLO
valor=Symbol('Simbolo')
//OBJETO
valor={
     nombre:'juan',
     edad:'20'
}
//ARRAY (SON OBJETOS)
valor=[1,2,3,4];

//COMPARADORES con dos signos de igual solo revisa valor, con tres signos revisa valor y tipo de dato
//DIFERENTE CON (!=) o con (!==)
console.log(20 == '20'); //DA TRUE
console.log(20 === '20'); //DA FALSE

//CONVERTIR NUMEROS PARA LA SUMA CONCATENA PARA LA RESTA HACE LA OPERATORIA (Number o parseFloar)
//
const numero1=20,numero2=30,numero3='20';

console.log(numero1+numero2);
