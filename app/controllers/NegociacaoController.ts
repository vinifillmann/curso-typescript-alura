import { Negociacao } from "../models/Negociacao.js"
import { Negociacoes } from "../models/Negociacoes.js"
import { MensagemView } from "../views/MensagemView.js"
import { NegociacoesView } from "../views/NegociacoesView.js"

export class NegociacaoController {
    private inputData: HTMLInputElement
    private inputQuantidade: HTMLInputElement
    private inputValor: HTMLInputElement
    private negociacoes = new Negociacoes()
    private negocioesView = new NegociacoesView("#NegociacoesView")
    private mensagemView = new MensagemView("#MensagemView")

    constructor() {
        this.inputData = document.querySelector("#data")
        this.inputQuantidade = document.querySelector("#quantidade")
        this.inputValor = document.querySelector("#valor")
        this.negocioesView.update(this.negociacoes)
    }

    adiciona(): void {
        const negociacao = this.criarNegociacao()
        this.negociacoes.adiciona(negociacao)
        this.negocioesView.update(this.negociacoes)
        this.limparFormulario()
        this.mensagemView.update("Negociação adicionada com sucesso!")
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