//muda o nome a partir do seletor de classe
var pacientes = document.querySelector("subtitulo");
var nome = document.querySelector("titulo");
nome.textContent = "Kaio Nutrição";
titulo.textContent = "Meus pacientes";
subtitulo.content = "Meus Pacientes"

//acessar a tag tr - paciente Paulo
var paciente = document.querySelectorAll("#primeiro paciente");
for(var 1 = 0; 1 < paciente.length; 1++){
    1 = 
}


//seleciona o conteúdo peso da tag
var tdpeso = paciente.querySelector(".info-peso");
var peso = tdpeso.textContent 

//selecion o conteúdo altura da tag
var tdaltura = paciente.querySelector("info-altura");
var altura = tdaltura.textContent;

//calcula o imc
var imc = peso / (altura * altura);

//variaveis com valor true
var pesovalido = true;
var alturavalido = true;
tdImc.textContent = "Altura valida"


//acessa e altera o imc
var tdimc = paciente.querySelector(".info-imc");
tdimc.textContent = imc;


if(peso <0 || peso > 1000){
    alert("peso invalido")

var pesovalido = false;

}
if(altura < 0 || altura> 3.00){
    alert("altura invalida");

var alturavalida = false;
 
}





