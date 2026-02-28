// --- Conversor de Medidas de Fábrica ---

const mlPorLitro = 1000;   // estava em string

function converterMlParaLitro(quantidadeMl) {

const resultado = quantidadeMl / mlPorLitro;   // errado o calculo coloquei /

return resultado;

}

function converterLitroParaMl(quantidadeLitros) {

const resultado = quantidadeLitros * mlPorLitro;   // errado o calculo coloquei *

return resultado;

}

const producaoDia = {

lote1: 5000, // ml

lote2: 2, // litros

};

const calculoLote1 = converterMlParaLitro(producaoDia.lote1);

const calculoLote2 = converterLitroParaMl(producaoDia.lote2);

console.log("--- Relatório de Produção ---");

console.log("Lote 1 (5000ml em Litros): " + calculoLote1 + "L");

console.log("Lote 2 (2L em Mililitros): " + calculoLote2 + "ml");




if (producaoDia.lote1 === 0) { // coloquei ===

const estoqueBaixo = true;

console.log("Atenção: Estoque zerado!");

}
