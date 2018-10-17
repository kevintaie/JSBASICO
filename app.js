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

//A APARTIR DE ARRAYS
//ARRAYS Inician en el cero posicion,permiten disintos tipos de datos,con cosnt no permite reasignarse si modificarse
// Se crean miArray=['',''] o new Array('','')
//Busqueda con indexOf('')
const meses=['enero','febrero'];
meses.unshift('incio');//nshift agrega al inicio
meses.push('fin');//push agrega al final
meses.pop();//elimina pos final y devuelve
meses.shift();//elimina inicio y devuelve
meses.splice(2,1); //elimina un rango y devuelve
meses.reverse();//reverse array
//ORDENAR
const array=['manzana','pera','naranja'];
array.sort(); //solo para letras de A-Z
//NUMEROS
const numeros=[1,6,3,9,8,-1,0,10,12]
numeros.sort(function(x,y){     
     return x-y; //Ordenar numeros es como comparar x > y si es true va primero
});

//OBJETOS se accede al interno con el punto (tambien se puede con corchetes)
//Se accede con this.edad dentro del objeto
const persona={
     nombre:'miguel',
     apellido:'last',
     mail:'dasd',
     edad:22,
     array:[1,2,3],
     objeto:{a:'aa',b:'as'},
     nacimiento: function(){
          return new Date().getFullYear() - this.edad;
     }
};

const autos=[
     {modelo:'Ford',motor:6.2},
     {modelo:'Chevrolet',motor:6.1},
     {modelo:'volkswagen',motor:6.30},
]
for (let i=0;i<autos.length;i++){
     //console.log(`${autos[i].modelo} ${autos[i].motor}`);
}

//FUNCIONES DECLARATION
function saludar(nombre ='Visitante'){  //El igual en el parametro es el valor por default
     //if (typeof nombre==='undefined'){nombre='default'}; //FORMA EN DESUSO de valor por default
     return `hola ${nombre}`;
};

//FUNCION EXPRESION
const suma=function(a=0,b=0){ //El igual en el parametro es el valor por default
     return a+b;
};

//IIFE 
(function(palabra) {
     //console.log(`creaundo un ${palabra}`);
})('iifes'); //Esos parentesis represantan el valor del parametro a enviar, cerrar con punto y coma.

//Metodo de propiedad (se pone una funcion dentro de un obketo)
const musica={
     reproducir: function(id){
          console.log(`reproduciendo ${id}`)
     }
}
//Los metodos tambien pueden crearse fuera del objeto
musica.pausa=function(id) { 
     console.log(`pausa al la cancion ${id}`);
}
//SE puede llamar las funciones antes de declarlas en orden
//TRY CATCH me da la ventaja de que el programa sigue ejecutandose a pesar de dar error
function obtenerClientes(){
     console.log('descargando...');
     setTimeout(function(){
          console.log('completo')
     },3000);
}
try{
     //obtenerClientes();
}catch(error){     
}
finally{     
}

//FECHAS y METODOS
//getMonth devuelve un array de 0 a 11

//ESTRUCTURAS DE CONTROL &&(AND)  || (OR)
//TERNARY EN UNA SOLA LINEA (IIF)
let a,b,puntaje =true;
a=puntaje===true ? 'si' :'no'
//SWITCH
switch(a){
     case 'si':
          b=1
          break;
     case'no':
          b=2
          break;
     default :
          b='default'
          break;
}

//LOOPS FOR, WHILE Y DOWHILE
for(let i=1;i<10;i++){
     if(i===5){
          continue; //Ejecuta y termina la iteracion
     }
     if(i===7){
          break; //Rompe la estrucutura
     }          
}
do{
    //ACION A REALIZAR AL MENOS UNA VEZ 
}while(a<10);

//FOR EACH MAP E ITERADORES
const pendientes=['uno','dos','tres'];
pendientes.forEach(function(pendiente,index,a){
     camisa=(`${index}: ${pendiente} total ${a}`);
});

const carrito=[
     {id:1 ,producto:'camisa'},
     {id:2 ,producto:'guitarra'},
     {id:3 ,producto:'disco'}
];
//RECORRER ARRAY DE OBJETOS
const nombreproducto=carrito.map(function(carrito){
     return carrito.producto;     
});
 //RECORRER OBJETO USANDO FOR
for(let carro in carrito){
     //console.log(carro +': ' + carrito[carro]);
}

//ITERADORES YA INCLUIDOS PARA ARREGLOS
const ciudades=['buenos aires','la plata','jerusalem'];
const ordenes = new Set([123,321,131,102]);
const datos =new Map();
datos.set('nombre','juan');
datos.set('profesion','more');

//entries iterador //DEVUELVE COMO ARRAY (default de map)
for(let entrada of ciudades.entries()){
     //console.log(entrada);
}
//values iterador DEVUELVE LOS VALORES (default de objetos y set)
for(let entrada of datos.values()){
     //console.log(entrada);
}
//values iterador DEVUELVE LAS LLAVES 
for(let entrada of datos.keys()){
     //console.log(entrada);
}

//ITERADORES PARA STRING
const texto='este texto va a ser iterado';
for (let letra of texto){
     //console.log(letra);
}
//ITERADORES PARA EL DOCUMENT
const enlaces=document.getElementsByTagName('a');
for (let enlace of enlaces){
     //console.log(enlace)
}

//WINDOW OBJECT
let altura,anchura;
altura=window.innerHeight;
anchura=window.outerWidth;

//SCOPE (ALCANZE) En las funciones es local pudiendo repetir nombre de variale sin ser modificadas globalmente. En bloques las variables tipo VAR son las unicas que van a ser reescritas dentro del bloque.
var x ='a';
let y='b';
const z ='c';
function funcionScope(){
     var x ='A';
     let y='B';
     const z='C';    
     //console.log(x,y,z) ;
}
funcionScope();
