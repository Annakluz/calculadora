var num1 = 0;
var num2 = 0;
var operación;

function addChar(input, character)
{
    if(input.value == null || input.value == "0")
        input.value = character

    else
        input.value += character
}
function deleteChar(input)
{
    input.value = input.value.substring(0, input.value.length - 1)
}


function operar(valor){
  input.value = num1
  if (num1 == 0){
    resultado = parseInt(num1);
    }
  var num2= parseInt(num1);
  var num1=0;
  var operacion= valor;
}


<body>
<div class="calculadora">
<form>
<input name="display" id= "display" value="0" />
<p>
<input type="button" class="largo" value="Retr" onclick="retro();" />
<input type="button" class="largo" value="CE" onclick="borradoTotal();"/>
<input type="button" class="largo" value="C" onclick="deleteChar(.value = 0);"/>
</p>
<p>
<input type="Button" Id="1" value="1" onClick="asignarNumero('1')"/>
<input type="button" value="8" onClick="asignarNumero"( '8')"/>
<input type="button" value="9" onClick="asignarNumero"( '9')"/>
<input type="button" value="/" onClick="asignarNumero"( '8')"/>
<input type="button" value="Raiz" onClick="asignarNumero"( '8')"/>
</p>
<p>
<input type="button" value="4" onClick="asignarNumero"( '4')"/>
<input type="button" value="5" onclick="asignarNumero"( '5')"/>
<input type="button" value="6" onclick="asignarNumero"( '6')"/>
<input type="button" value="*" onclick="asignarNumero"( '8')"/>
<input type="button" value="%" onclick="asignarNumero"( '8')"/>
</p>
<p>
<input type="button" value="1" onclick="asignarNumero"( '1')"/>
<input type="button" value="2" onclick="asignarNumero"( '2')"/>
<input type="button" value="3" onclick="asignarNumero"( '3')"/>
<input type="button" value="-" onclick="restar();"/>
<input type="button" value="1/x" onclick="inverso();"/>
</p>
<p>
<input type="button" value="0" onclick="asignarNumero"( '8')/>
<input type="button" value="+/-" onclick="opuesto();"/>
<input type="button" value="." onclick="numero(.);"/>
<input type="button" value="+" onclick="asignarNumero"('+' );"/>
<input type="button" value="=" onclick="igual();"/>
</p>
</form>
</div


</body>
</html>
