function pulaLinha() {
     document.write("<br>");
    }

//imprimir todos os motoristas da lista de motoristas
function imprimir(listaMotoristas){
for(var motorista in listaMotoristas) {
document.write("O motorista  possuir a multa no valor de R$ " + listaMotoristas[motorista].valorMulta + " a pagar "); 
pulaLinha();
}  
}

var contador = 1

var listaMotoristas= [];

var valorMulta = parseInt(prompt("informe o valor da multa"));

var motorista = new Object(); 
motorista.valorMulta = valorMulta;
listaMotoristas.push(motorista); 
var resposta = prompt("Faz 90 dias ou menos que aconteceu a sua infração de transito?");

if(resposta == 'ok' || resposta == 'sim'|| resposta == 'SIM' || resposta == 's') {
    percentual1 = valorMulta- ((valorMulta *20) / 100)
    document.write("Multa com desconto R$", percentual1);
} else {    

imprimir(listaMotoristas)

}
