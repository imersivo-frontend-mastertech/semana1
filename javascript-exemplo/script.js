console.log("Olá pessoal");

//variável para importar a tag <a> do #id=menu que consta no html
let menus = document.querySelectorAll('#menu a')

//versão javascript 6
const DefineNome = () => {
  //define o nome do link da tag <a>
  menus[0].innerHTML = "Home"; //o zero equivale a posição do item, como é considerado um vetor em js tudo começa em zero.
  menus[1].innerHTML = "Contato"; //aqui é colocado como 1 porque está na posição 1, mas na nossa visualização seria o item 2
  menus[2].innerHTML = "Buscar";
}
DefineNome();

const DefineLink = () => {
  menus[0].href = "index.html";
  menus[1].href = "contato.html";
  menus[2].href = "http://www.google.com.br"

}

DefineLink();


// versão javascript 5
//function DefineNome() {
  //menus[0].innerHTML = "Home";
  //menus[1].innerHTML = "Contato";
