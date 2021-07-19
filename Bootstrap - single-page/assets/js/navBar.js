const banner = document.querySelector(".header__banner");
const menu = document.getElementById("navbarNav");

$(menu).on("show.bs.collapse", () => {
  banner.classList.add("menu-open");
});

$(menu).on("hide.bs.collapse", () => {
  banner.classList.remove("menu-open");
});
