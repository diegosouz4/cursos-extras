const cep = document.querySelector("#cep");

cep.addEventListener("invalid", () => {
  cep.setCustomValidity("");
  if (!cep.validity.valid){
      cep.setCustomValidity("Ops, Tem algo errado neste campo!");
      cep.parentNode.classList.add('contatoCampo--erro')
      return
  }

  cep.parentNode.classList.remove('contatoCampo--erro')
});
