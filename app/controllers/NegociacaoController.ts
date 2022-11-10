import { DiasDaSemana } from "../enums/DiasDaSemana.js"
import { Negociacao } from "../models/Negociacao.js"
import { Negociacoes } from "../models/Negociacoes.js"
import { MensagemView } from "../views/MensagemView.js"
import { NegociacoesView } from "../views/NegociacoesView.js"

export class NegociacaoController {
    private inputData: HTMLInputElement
    private inputQuantidade: HTMLInputElement
    private inputValor: HTMLInputElement
    private negociacoes = new Negociacoes()
    private negocioesView = new NegociacoesView("#NegociacoesView", true)
    private mensagemView = new MensagemView("#MensagemView")

    constructor() {
        this.inputData = <HTMLInputElement> document.querySelector("#data")
        this.inputQuantidade = <HTMLInputElement> document.querySelector("#quantidade")
        this.inputValor = <HTMLInputElement> document.querySelector("#valor")
        this.negocioesView.update(this.negociacoes)
    }

    public adiciona(): void {
        const negociacao = Negociacao.criar(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        )
        
        if (!this.diaUtil(negociacao.data)) {
            this.mensagemView.update("Apenas negociações em dias úteis são aceitas")
            return
        }

        this.negociacoes.adiciona(negociacao)
        this.limparFormulario()
        this.atualizaView()
    }

    private diaUtil(data: Date) {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO
    }

    private limparFormulario(): void {
        this.inputData.value = ""
        this.inputQuantidade.value = ""
        this.inputValor.value = ""
        this.inputData.focus()
    }

    private atualizaView(): void {
        this.negocioesView.update(this.negociacoes)
        this.mensagemView.update("Negociação adicionada com sucesso!")
    }

}