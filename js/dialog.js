// Variáveis
var btnAbreDialog = document.querySelector("#abreDialog");
var dialog = document.querySelector(".dialogNewsletter");
var dialogBody = document.querySelector(".dialogNewsletter-body");
var dialogOverlay = document.querySelector(".dialogNewsletter-overlay");

const inputEmail = document.querySelector("#emailDialog");
const dom = document.querySelector("#conteudoForaDaDialog");
const vControl = document.querySelector("video");

btnAbreDialog.style.display = "block";

// Quando abrir a dialog...
btnAbreDialog.addEventListener("click", function () {
  dialog.classList.add("dialogNewsletter--aberto");
  inputEmail.focus();
  dom.inert = true;
  vControl.removeAttribute("controls");
});

function fechandoDialog() {
  document.activeElement.blur();
  dialog.classList.remove("dialogNewsletter--aberto");
  dom.inert = false;
  btnAbreDialog.focus();
  vControl.setAttribute("controls", true);
}

// Listeners
document.querySelector(".dialogNewsletter-fechar").addEventListener("click", fechandoDialog);
document.addEventListener('keydown', (e)=>{
  // if(e.keyCode == 27) fechandoDialog()
  if(e.key === 'Escape') fechandoDialog()
})
dialogOverlay.addEventListener('click', fechandoDialog)