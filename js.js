var cont = 0;
var validacao = 0;
var contOp = 0;
var validacaOp = 0;

function btnC(valor) {
  var visor = document.getElementById("visor");
  visor.value = 0;
  cont = 0;
}

function btNumber(valor) {
  var visor = document.getElementById("visor");

  //Esse evento é acionado ao digitar alguma coisa.
  //Se o usuário ja digita o valor, nao tem motivo de colocar visor.value =valor
  //pois o valor já está lá (o usuário digitou)
  //O valor duplicava, pois pegava o que o usuário digitou + visor.value = valor

  //Não é necessário também, ficar controlando o valor do visor (ex: visor.value += valor)
  //pois tudo isso já é feito pelo próprio input;

  //Se é a primeira vez que o usuario esta digitando
  //Ele deve tirar o zero
  if (visor.value == 0) visor.value = "";

  cont = 0;
  validacao = 0;
  contOp = 0;
  validacaOp = 0;
}

function btnOp(valor) {
  var visor = document.getElementById("visor");

  cont = 0;
  validacao = 0;

  if (visor.value == 0 || visor.value == "") {
    alert("Primeiro valor não pode ser uma operacao");
  } else if (validacaOp != contOp) {
    const str = visor.value;
    const str2 = str.substring(0, str.length - 1);
    visor.value = str2;
    alert("Você não pode digitar duas operações repetidas");
  }
  //visor.value = 0;
  //Nao é necessárío, se encaixa no mesmo caso acima,
  //Também estava duplicando.
  //else visor.value += valor;

  validarOp();
}
function btnI() {
  var visor = document.getElementById("visor");
  var calculo = 0;

  if (validacaOp != contOp)
    alert("Digite o outro número da operação antes de buscar o resultado");
  else {
    calculo = eval(visor.value);
    visor.value = calculo;
    validar();
  }
}
function validar() {
  return cont++;
}
function validarOp() {
  return contOp++;
}
function teclado(valor) {
  var tecla = valor.key;
  if (tecla == "Enter" || tecla == "=") btnI();
  else if (
    tecla == 0 ||
    tecla == 1 ||
    tecla == 2 ||
    tecla == 3 ||
    tecla == 4 ||
    tecla == 5 ||
    tecla == 6 ||
    tecla == 7 ||
    tecla == 8 ||
    tecla == 9
  )
    btNumber(tecla);
  else if (tecla == "+" || tecla == "-" || tecla == "*" || tecla == "/")
    btnOp(tecla);
}
