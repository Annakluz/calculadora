
//Declaracion de variables que necesitamos  para el proceso de la calculadora.
var numero1 = 0;
var numero2 = 0;
var operacion;

//recibir la funcion que asigna el numero a la entradaNum
function asignarNumero(numero){
    if(document.getElementById("entradaNum").value == "0" || numero1==0){
        numero1 = numero;
    }else{
        numero1 += numero;
    }
        document.getElementById("entradaNum").value = numero1;
}

//Funcion tecla C.
function teclaC(){
	numero1 = 0;
	numero2 = 0;
	document.getElementById("entradaNum").value = 0;
}

//Esta funcion se llama cada vez que se presiona un boton de operacion.
function operar(valor){
    if (numero1 == 0){
        resultado = document.getElementById("entradaNum").value;
    }
    numero2 = numero1;
    numero1= numero2;
    operacion = valor;
}

function operaciones(oper){
  var operac = {
    sumar : function suma(numero1, numero2) {
          return parseInt(numero1)+parseInt(numero2);
    }
    restar : function resta(numero1, numero2){
          return parseint(numero1)-parseint(numero2);
    }

}
switch(oper){
  case "sumar" :
        var resultado = operac.sumar(numero1, numero2);
        break
}

/*function igual(){
    switch (memoriaop){
              case 'suma':
                   var op = operacion.split("+");
                   var resultado = ops.sumar(op[0], op[1]);
                   document.getElementById("resultado").value = resultado;
                   break;
               case 'resta':
                   var op = operacion.split("-");
                   var resultado = ops.restar(op[0], op[1]);
                   document.getElementById("resultado").value = resultado;
                   break;
               case 'multiplicacion':
                   var op = operacion.split("*");
                   var resultado = ops.multiplicar(op[0], op[1]);
                   document.getElementById("resultado").value = resultado;
                   break;
               case 'division':
                   var op = operacion.split("/");
                   var resultado = ops.dividir(op[0], op[1]);
                   document.getElementById("resultado").value = resultado;
                   break;
    }
    document.getElementById("entradaNum").value = numero1;
    numero2 = parseInt(numero1);
}
*/
