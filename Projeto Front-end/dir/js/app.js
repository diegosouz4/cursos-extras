const links=[document.querySelector("a[href*=about]"),document.querySelector("a[href*=palestra]"),document.querySelector("a[href*=contato]")],animaScroll=e=>{const t=e.getAttribute("href"),o=document.querySelector(t).offsetTop;scrollTo({top:o,behavior:"smooth"})};links.forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault(),animaScroll(e)}))}));