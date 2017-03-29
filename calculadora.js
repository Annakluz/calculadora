
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

function igual(){
    numero1 = parseFloat(valorNumerico);
	switch (operacion){
		case 1:
			numero1 = numero2 + numero1;
		break;
		case 2:
			numero1 = numero2 - numero1;
		break;
		case 3:
			numero1 *= numero2;
		break;
		case 4:
			numero1 = numero2 / numero1;
		break;
		case 5:
			numero1 = Math.pow(numero2, numero1);
		break;
    case 6:
    numero1 = Math.sqrt(numero2, numero1);
    break;
    case 7:
    numero1 = Math.log(numero2, numero1);
    break;
	}
	document.getElementById("textoCalculadora").value = numero1;
	numero2 = parseInt(numero1);
}