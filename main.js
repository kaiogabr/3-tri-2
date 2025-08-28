//muda o nome a partir do seletor de classe
var pacientes = document.querySelector("subtitulo");
var nome = document.querySelector("titulo");
nome.textContent = "Kaio Nutrição";
pacientes.textContent = "Meus pacientes";

//acessar a tag tr - paciente Paulo
var paciente = document.querySelector("#primeiro paciente");

//seleciona o conteúdo peso da tag
var tdpeso = paciente.querySelector(".info-peso");
var peso = tdpeso.textContent 

//selecion o conteúdo altura da tag
var tdaltura = paciente.querySelector("info-altura");
var altura = tdaltura.textContent;

//calcula o imc
var imc = peso / (altura * altura);

//acessa e altera o imc
var tdimc = paciente.querySelector(".info-imc");
tdimc.textContent = imc;

if(peso <0 || peso > 1000){
    alert("peso invalido")
}
if(altura < 0 || altura> 3.00){
    alert("altura invalida");
 
}





