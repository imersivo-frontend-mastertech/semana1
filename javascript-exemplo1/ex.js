
//variáveis - quais dados podem ser colocados?

let string = "meu texto aqui";
let numero = 3.14693583259835;
let booleano = true ou false

//exemplo de como funcionaria usar um booleano em uma função de condição
if{
condição verdadeira = "true" //aqui entraria sua condição ou função
}else{
condição falsa = "false"
}

console.log ("seu texto aparecerá em seu console do navegador")
//ele funciona para testar,e é le imprime uma função, um texto ou variavel em seu console,
//ótimo para casos de testar em qual parte sua função parou de funcionar.

Var
//Até a versão anterior JavaScript, a ES5, era declarada com a palavra-chave var,
//(variáveis de escopo de funções).
//O escopo do JavaScript é dado por funções e não por blocos e
//a palavra-chave var garantia a variável dentro de todo o escopo de onde ela foi declarada,
//ou seja, poderia ser acessada de qualquer ponto dentro do nosso código.

var a = 1;
function bar() {
  console.log(a);
  var b = 2;
}
bar();


Let
// Quando a versão ES6 foi lançada, trouxe consigo diversas features e dentre elas
// a palavra-chave let, que é usada para declarar variáveis com escopo de bloco.
// Seu comportamento é idêntico a var quando declarada fora de uma função,
// ou seja, ela fica acessível no escopo global.
// Mas quando declarada dentro de qualquer bloco seja ele uma função,
// um if ou um loop, ela fica acessível apenas dentro do bloco do qual foi declarada.

let a = 1; //Acessível globalmente
function bar() {
  console.log(a);
  let b = 2; //Acessível apenas dentro de `bar()` e sub-blocos.
  if(true) {
    let c = 3; //Acessível apenas dentro do bloco `if`
    console.log(b);
  }
  console.log(c);
}
bar(); //Saída -> 1, 2 e ReferenceErrorException: c is not defined

// Além disso, uma outra particularidade envolve a key let que é a redeclaração de variáveis.
// Quando declaramos uma variável duas vezes no mesmo escopo com var, o último valor é o que prevalece, vejamos um exemplo:

var variavel = 0;
var variavel = 10;
console.log(variavel); // Saída -> 10
function funcao() {
  var outra_variavel = 20;
  var outra_variavel = 30;
  console.log(outra_variavel);
}
funcao(); //Saída -> 30
// Com let esse comportamento é diferente, ou seja,
// quando tentamos declarar no mesmo escopo uma variável com let que já está declarada, é necessário criar outra e essa
//  é gerada uma Type e Syntax Error dizendo que a váriavel já foi definida. Exemplo:

let variavel = 0;
let variavel = 10; //TypeError: Identifier 'variavel' has already been declared
function funcao() {
  let outra_variavel = 20;
  let outra_variavel = 30; //SyntaxError: Identifier 'outra_variavel' has already been declared
}


// Const
// Além de let a ES6 trouxe também a palavra-chave const.
// Esta é usada para declarar variáveis read-only, isto é, a variável não pode ter seu valor reatribuido,
// ou seja, seu estado é imutável.
// Após a introdução de const podemos declarar constantes const variavel = “valor”;
// e assim temos a certeza de que esse será seu único e imutável valor durante seu código.

 const PI = 3.14
 //sempre que for colocada o nome PI o valor dela sempre será 3,14 e não pode ser mudada.
