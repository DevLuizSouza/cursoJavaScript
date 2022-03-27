// criar um elemento 
var el = document.createElement("h3")
el.classList = "testando-classe"

var texto = document.createTextNode("Este é o texto do h3")

el.appendChild(texto)

//selecionar o elemento que quero trocar 

var title = document.querySelector("#title")
//var body = document.querySelector("body")
var pai = title.parentNode;
//trocar os elementos 
pai.replaceChild(el,title); 

