var pote1 = [
    [
        {"selecao": [{"nome":"brasil"},  {"resultado": [{"a":0},{"a":4},{"a":2}]}]},
        {"selecao": [{"nome":"argentina"}, {"resultado": [{"a":0},{"a":4},{"a":2}]}]},
        {"selecao": [{"nome":"italia"},{"resultado": [{"a":0},{"a":4},{"a":2}]}]},
        {"selecao": [{"nome":"franca"},  {"resultado": [{"a":0},{"a":4},{"a":2}]}]},
        {"selecao": [{"nome":"alemanha"},  {"resultado": [{"a":0},{"a":4},{"a":2}]}]},
        {"selecao": [{"nome":"espanha"}, {"resultado": [{"a":0},{"a":4},{"a":2}]}]},
        {"selecao": [{"nome":"portugal"},{"resultado": [{"a":0},{"a":4},{"a":2}]}]},
        {"selecao": [{"nome":"uruguai"},  {"resultado": [{"a":0},{"a":4},{"a":2}]}]}
    ] 
];
function time (){
var jogos = [[0, 7], [1, 6], [2, 5], [3, 4], [0, 3], [7, 4], [1, 5],[6, 2]  ];
document.write(jogos.map(function (times) {
  return pote1[0][times[0]].selecao[0].nome + " x " + pote1[0][times[1]].selecao[0].nome;
}).join('<br>'));
}