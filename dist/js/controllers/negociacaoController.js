import { Negociacao } from "../models/Negociacao.js";
export class NegociacaoController {
    inputData;
    inputQuantidade;
    inputValor;
    constructor() {
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
    }
    adiciona() {
        const negociacao = this.criarNegociacao();
        console.log(negociacao);
        this.limparFormulario();
    }
    criarNegociacao() {
        return new Negociacao(new Date(this.inputData.value.replaceAll("-", ",")), parseInt(this.inputQuantidade.value), parseFloat(this.inputValor.value));
    }
    limparFormulario() {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        this.inputData.focus();
    }
}
