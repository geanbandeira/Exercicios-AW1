var carro =
{categoria:"Esporte", ano:2019, preco:110000, modelo:"Golf"}

alert(
"Carro: " +carro.categoria +

"\nAno: " + carro.ano +

"\nPreço: R$" + carro.preco +

"\nModelo: " + carro.modelo ); 

function precoavista(){
    console.log(carro.length);
    percentual1 = 110000- ((110000 *0.5) / 100)
    document.write("O valor do carro com desconto de 5% será R$", percentual1);
    pulaLinha()
}

function precoaprazo(){
    percentual2 = 55000 + (55000 * 1.23)
    document.write("O valor final do Carro será R$", percentual2);
    pulaLinha()
    percentualparcela = (55000 * 1.23) /12
    document.write("Sendo R$ 55,000 de entrada e 12x de R$", percentualparcela);
}

function pulaLinha() {
    document.write("<br>");
   }

