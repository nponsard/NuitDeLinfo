//selection
let divSelection = document.getElementById("page-selection")
//pseudo
let divPseudo = document.getElementById("page-pseudo")
let pseudoInput = document.getElementById("pseudo")
let validerPseudo = document.getElementById("valid-pseudo")
//chat
let divChat = document.getElementById("page-chat")
let textbox = document.getElementById("textarea")




var socket = io();


// pseudo

function register(){
  let value = pseudoInput.value
  socket.emit("register",value)
  divPseudo.style.display = "none"
  divChat.style.display = "block"
}
validerPseudo.onclick = register
pseudoInput.addEventListener('keyup', pseudoUp)
function pseudoUp(e){
  if (e.key === "Enter") register()
}





// chat
function sendMessage(){
  let value = textbox.value 
  value = value.slice(0,value.length - 1)
  
  socket.emit("message",value)
  textbox.value = ""
}
textbox.addEventListener('keyup',keyup);
let shifted = false
function keyup(e){
  if (e.key === "Enter"){
    if (!shifted){
      sendMessage()
    }
    shifted = false

  }

}

textbox.addEventListener('keydown',keydown);
function keydown(e){
  var key = e.key;
  if (e.shiftKey){
    if (key === "Enter") shifted = true
  }
}


