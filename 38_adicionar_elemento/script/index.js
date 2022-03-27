// criar elemento 
var el = document.createElement("div")
el.classList ="div-criada"


var container = document.querySelector("#container")


//Inserindo elemento filho 
container.appendChild(el)

//InsertBefore - insere antes 
var el2 = document.createElement("div");
el2.classList = "div-before"

// Esse método precisa do elemento pai, o elemento que vamos inserir , e o elemento referência. 
var el3 = document.querySelector("#container .div-before")
container.insertBefore(el2,el3)