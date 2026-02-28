// --- Conversor de Moedas ---

//  O objetivo deste código é simular um conversor de moedas simples, onde o usuário pode converter um valor em dólares para reais usando uma taxa de câmbio fixa. Identifique os erros presentes no código e corrija-os para que o conversor funcione corretamente.

const taxaDolar = 5.50;   // dolar estava em string mudei para número

function converterParaReal(valorDolar) {

let resultado = valorDolar * taxaDolar;

return resultado;

}

console.log("O valor convertido é de : R$ " + converterParaReal(100));

const transacao = {

usuario: "Carlos",

valor: 100.00, // valor estava em string mudei para número

concluida: true,

};

let valorFinal = converterParaReal(transacao.valor); // coloquei parametro transacao.valor

if (transacao.concluida === true) {  // coloquei ===

console.log("O valor convertido para " + transacao.usuario + " é: " + valorFinal);

}

if (transacao.concluida === false) {

console.log("Erro no processamento.");

}
