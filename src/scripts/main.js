document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("form_sorteador")
    .addEventListener("submit", function (e) {
      e.preventDefault(); // Previne o envio do formulário

      let max_num = document.getElementById("max_num");
      let maxNum = parseInt(max_num.value); // Corrigido aqui

      let numero_aleatorio = Math.floor(Math.random() * (maxNum + 1)); // Gera um número inteiro entre 0 e maxNum

      document.getElementById(
        "resultado"
      ).textContent = `Número sorteado: ${numero_aleatorio}`;
    });
});
