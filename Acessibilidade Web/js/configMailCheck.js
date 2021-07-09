var domains = ["gmail.com", "aol.com"];
var secondLevelDomains = ["hotmail"];
var topLevelDomains = ["com", "net", "org", "br"];
const emailInput = document.querySelector("#email");
const sugestao = document.getElementById("sugestao");

emailInput.addEventListener("blur", function () {
  Mailcheck.run({
    email: emailInput.value,
    domains: domains, // optional
    topLevelDomains: topLevelDomains, // optional
    secondLevelDomains: secondLevelDomains, // optional
    suggested: function (suggestion) {
      sugestao.innerHTML = `Você quis dizer: <span>${suggestion.full}</span>?`;
      emailInput.parentNode.classList.add('contatoCampo--erro')
      emailInput.classList.add('contatoCampo--validouErro')
      console.log(suggestion.full);
      sugestao.setAttribute('tabindex', '')
      sugestao.setAttribute('role', 'alert')
    },
  });
});

sugestao.addEventListener("click", () => {
  const emailCorreto = sugestao.querySelector("span").textContent;
  emailInput.value = emailCorreto;
});
