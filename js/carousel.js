var btns = document.querySelectorAll(".listaDeArtigos-slider-item");
const listaDeNoticias = document.querySelectorAll(".listaDeArtigos-item");

listaDeNoticias[0].style.display = "block";

// Percorre todos os botoes controladores
btns.forEach(function (btn) {
  btn.addEventListener("click", function () {

    const noticiaAtual = this.getAttribute("data-sliderItem");

    listaDeNoticias.forEach((noticia) => {
      noticia.style.display = "none";
    });

    listaDeNoticias[noticiaAtual].style.display = "block";

    // Remove classe 'ativo' dos outros botoes
    btns.forEach(function (btnRemoveClass) {
      btnRemoveClass.classList.remove("listaDeArtigos-slider-item--ativo");
    });

    this.classList.add("listaDeArtigos-slider-item--ativo");

    document
      .querySelector(".listaDeArtigos-slider-item .escondeVisualmente")
      .remove();
    this.appendChild(indicadorSlide());
  });
});

// Indicador do slide atual
const indicadorSlide = () => {
  const novoItem = document.createElement("span");
  novoItem.classList.add("escondeVisualmente");
  novoItem.textContent = "(Slide Atual)";
  return novoItem;
};
