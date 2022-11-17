import { NegociacaoController } from "./controllers/NegociacaoController.js";
const controller = new NegociacaoController();
const formElement = document.querySelector(".form");
if (formElement) {
    formElement.addEventListener("submit", e => {
        e.preventDefault();
        controller.adiciona();
    });
}
else {
    throw Error("Não foi possísvel inicializar a aplicação. Verifique se o form existe!");
}
const botaoImporta = document.querySelector("#btn-importa");
if (botaoImporta) {
    botaoImporta.addEventListener("click", (e) => {
        controller.importaDados();
    });
}
else {
    throw Error("Botão importa não encontrado no DOM");
}
