function calcular(){
        var fatorial = parseInt(document.getElementById("num1").value);
        var resultado = fatorial;
        for(var i=1; i<fatorial; i++){
            resultado *= i;
        }
        alert(resultado);

        
    }
