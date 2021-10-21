const links = [
  document.querySelector("a[href*=about]"),
  document.querySelector("a[href*=palestra]"),
  document.querySelector("a[href*=contato]"),
];

const animaScroll = (seletor) => {
  const target = seletor.getAttribute("href");
  const targetPosition = document.querySelector(target).offsetTop;
  scrollTo({
    top: targetPosition,
    behavior: "smooth",
  });
};

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    animaScroll(link);
  });
});
