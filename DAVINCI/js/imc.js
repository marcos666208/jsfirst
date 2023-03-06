let altura = parseFloat(prompt('informe sua altura em metros. EX: 1.72'))
let peso = parseFloat(prompt('informe seu peso em kg. EX: 85 '))

let imc = peso / (altura * altura)

alert('seu imc é: ' + imc)

 if (imc < 16.9){
    document.write('Seu IMC é: ' +imc+ ' Procure um médico' +'<br>')
    document.write('<img src="images/download.jpg"')
}
else if (imc >= 30){
    document.write('Seu IMC é: ' +imc+ ' URGENTE. Procure um Médico' + '<br>')
    document.write('<img src="images/obesidade.jpg"')
}
else{
    document.write('Seu IMC é: ' +imc+ 'Tá Safe' + '<br>')
    document.write('<img src="images/corpo-saudável.jpg"')
}
