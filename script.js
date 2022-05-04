// eventos para ações
document.getElementById("clear").onclick = function() {calcular('acao', 'c')};
document.getElementById("divide").onclick = function() {calcular('acao', '/')};
document.getElementById("multiplica").onclick = function() {calcular('acao', '*')};
document.getElementById("subtrai").onclick = function(){calcular('acao', '-')} ;
document.getElementById("soma").onclick = function() {calcular('acao', '+')};
document.getElementById("igual").onclick = function() {calcular('acao', '=')};
document.getElementById("ponto").onclick = function() {calcular('acao', '.')};

//Eventos para valores
document.getElementById("zero").onclick = function() {calcular('valor', 0)};
document.getElementById("um").onclick = function() {calcular('valor', 1)};
document.getElementById("dois").onclick = function() {calcular('valor', 2)};
document.getElementById("tres").onclick = function() {calcular('valor', 3)};
document.getElementById("quatro").onclick = function() {calcular('valor', 4)};
document.getElementById("cinco").onclick = function() {calcular('valor', 5)};
document.getElementById("seis").onclick = function() {calcular('valor', 6)};
document.getElementById("sete").onclick = function() {calcular('valor', 7)};
document.getElementById("oito").onclick = function() {calcular('valor', 8)};
document.getElementById("nove").onclick = function() {calcular('valor', 9)};

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