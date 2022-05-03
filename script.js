// TODO descobrir porque não funcionou com eventlistener ou onclick no js

// eventos para ações
// document.getElementById("clear").onclick = calcular('acao', 'c');
// document.getElementById("divide").onclick = calcular('acao', '/');
// document.getElementById("multiplica").onclick = calcular('acao', '*');
// document.getElementById("subtrai").onclick = calcular('acao', '-');
// document.getElementById("soma").onclick = calcular('acao', '+');
// document.getElementById("igual").onclick = calcular('acao', '=');
// document.getElementById("ponto").onclick = calcular('acao', '.');

// Eventos para valores
// document.getElementById("zero").onclick = calcular('valor', 0);
// document.getElementById("um").onclick = calcular('valor', 1);
// document.getElementById("dois").onclick = calcular('valor', 2);
// document.getElementById("tres").onclick = calcular('valor', 3);
// document.getElementById("quatro").onclick = calcular('valor', 4);
// document.getElementById("cinco").onclick = calcular('valor', 5);
// document.getElementById("seis").onclick = calcular('valor', 6);
// document.getElementById("sete").onclick = calcular('valor', 7);
// document.getElementById("oito").onclick = calcular('valor', 8);
// document.getElementById("nove").onclick = calcular('valor', 9);

var display = document.getElementById("resultado");

function calcular (tipo, valor) {
    if (tipo === "acao"){

        if (valor === 'c'){
            display.value = '';
        };

        if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
            display.value += valor ;
        };

        if (valor === '='){
            var resultado = eval(display.value);
            display.value = resultado;
        }

    } else if (tipo === "valor"){
        display.value += valor ;
    };
};