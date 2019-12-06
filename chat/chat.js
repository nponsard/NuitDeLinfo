//selection
let divSelection = document.getElementById("page-selection")
let mode_cherche = document.getElementById("cherche")
let mode_aide = document.getElementById("aide")
let motif = document.getElementById("motif")
let lieu = document.getElementById("lieu")
let validerSelection = document.getElementById("valid-selection")
//pseudo
let divPseudo = document.getElementById("page-pseudo")
let pseudoInput = document.getElementById("pseudo")
let validerPseudo = document.getElementById("valid-pseudo")
//chat
let divChat = document.getElementById("page-chat")
let textbox = document.getElementById("textarea")


var socket = io();





//selection
function selection(){
  console.log("ah")
  let mode = (mode_cherche.checked)
  console.log(mode); // true : recherche false: aide
  let localisation = lieu.options[lieu.selectedIndex].value
  let pour = motif.options[lieu.selectedIndex].value
  socket.emit("selection",{"mode":mode,"localisation":localisation,"pour":pour})


}


validerSelection.onclick = selection









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


