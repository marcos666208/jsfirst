// Classificação  de triângulos

let A = parseInt(prompt('Digite o lado A'));
let B = parseInt(prompt('Digite o lado B'));
let C = parseInt(prompt('Digite o lado C'));

if(A <= B + C &&
   B <= A + C &&
   C <= A + C) {
        if (A == B && B == C){
            document.write('<p style="color: white"> Isto é um triângulo equilátero</p>');
            document.write('<body bgcolor="#0000FF">');
        }
        else if( A ==  B || A == C || B == C){
            document.write('<p style="color: black"> Isto é um triângulo isociles</p>');
            document.write('<body bgcolor="green">');
        }
        else {
            document.write('<p style="color: black"> Isto é um triângulo escaleno</p>');
            document.write('<body bgcolor="yellow">');
        }
   }
   else {
       document.write('Não é um triangulo');
       document.write('<img src="images/risada.gif" alt="Sumiu" title="Isto é uma risada KKKK">');
   }