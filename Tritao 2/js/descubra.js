// seleção de paginas
let opcao = parseInt(prompt('Digite uma opção (1 até 5): '));

switch(opcao){
    case 1:
        location.href = 'pages/dica1.html';
        break;
    case 2:
        location.href = 'pages/dica2.html';
        break;
    case 3:
        location.href = 'pages/dica3.html';
        break;
    case 4:
        location.href = 'pages/dica4.html';
        break;
     case 5:
        location.href = 'pages/dica5.html';
        break;
    default:
        alert('Escolha uma opção entre 1 e 5!');
        location.href('../index.html');
        break;

}