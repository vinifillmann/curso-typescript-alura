import { Negociacao } from "../models/Negociacao.js"

export class NegociacaoController {
    private inputData: HTMLInputElement
    private inputQuantidade: HTMLInputElement
    private inputValor: HTMLInputElement

    constructor() {
        this.inputData = document.querySelector("#data")
        this.inputQuantidade = document.querySelector("#quantidade")
        this.inputValor = document.querySelector("#valor")
    }

    adiciona(): void {
        const negociacao = this.criarNegociacao()
        console.log(negociacao)
        this.limparFormulario()
    }

    criarNegociacao(): Negociacao {
        return new Negociacao(
            new Date(this.inputData.value.replaceAll("-", ",")),
            parseInt(this.inputQuantidade.value),
            parseFloat(this.inputValor.value)
        )
    }

    limparFormulario(): void {
        this.inputData.value = ""
        this.inputQuantidade.value = ""
        this.inputValor.value = ""
        this.inputData.focus()
    }

}