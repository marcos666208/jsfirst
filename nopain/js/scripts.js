//Declaração de Variáveis
let nome = 'Eu'
let numero_inteiro = 3
let numero_flutuante = 2.5678
let condicao = false

const nomes = 'Você'
/*
console.log(typeof nome)
console.log(typeof numero_inteiro)
console.log(typeof numero_flutuante)
console.log(typeof condicao)
*/

let a = parseInt(prompt('informe um numero: '))
let b = parseInt(prompt('informe outro numero: '))

let soma = a + b
let sub = a - b
let mult = a * b
let div = a/b

/*
document.write('A soma é; ', soma + 'A subtração é: ', sub + 
'A multiplicação é: ', mult + 'A divisão é: ', div)
*/
alert('A soma é: ' + soma + '\n' + 'A subtração é: ' + sub + '\n' +
'A multiplicação é: ' + mult + '\n' + 'A divisão é: ' + div)