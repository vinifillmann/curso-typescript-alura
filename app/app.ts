import { NegociacaoController } from "./controllers/NegociacaoController.js";

const controller = new NegociacaoController()
const formElement = document.querySelector(".form")
formElement.addEventListener("submit", e => {
    e.preventDefault()
    controller.adiciona()
})