// --- Calculadora de Consumo de Combustível ---

const precos = {

gasolina: 5.8,

alcool: 3.9,

diesel: 6.20,   // estava em string

};

function calcularGasto(distancia, consumoKml, tipoCombustivel) {

let precoUnitario = tipoCombustivel;

let litrosNecessarios = distancia / consumoKml;

let custoTotal = litrosNecessarios * precoUnitario;

return custoTotal;

}

const viagem = {

destino: "Litoral",

distancia: 200,  // estava em string

veiculo: "Corsa",

};

const resultadoGasolina = calcularGasto(viagem.distancia, 10, precos.gasolina);

console.log("Viagem para o " + viagem.destino + " De " + viagem.veiculo); // adicionei para onde estava indo e com o modelo do carro

console.log("Custo estimado no Diesel: R$ " + calcularGasto(200, 15, precos.diesel).toFixed(2));  // adicionei o .tofized(2) para duas casas depois da virgula

console.log("Custo estimado na Gasolina: R$ " + resultadoGasolina);

if (precos.alcool < 4) {

console.log("O álcool está compensando!");

}
