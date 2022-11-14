import { domInjector } from "../decorators/DomInjector.js"
import { inspect } from "../decorators/Inspect.js"
import { logarTempoDeExecucao } from "../decorators/LogarTempoDeExecucao.js"
import { DiasDaSemana } from "../enums/DiasDaSemana.js"
import { Negociacao } from "../models/Negociacao.js"
import { Negociacoes } from "../models/Negociacoes.js"
import { MensagemView } from "../views/MensagemView.js"
import { NegociacoesView } from "../views/NegociacoesView.js"

export class NegociacaoController {
    @domInjector("#data")
    private inputData: HTMLInputElement
    @domInjector("#quantidade")
    private inputQuantidade: HTMLInputElement
    @domInjector("#valor")
    private inputValor: HTMLInputElement
    private negociacoes = new Negociacoes()
    private negocioesView = new NegociacoesView("#NegociacoesView")
    private mensagemView = new MensagemView("#MensagemView")

    constructor() {
        this.negocioesView.update(this.negociacoes)
    }
    
    @inspect()
    @logarTempoDeExecucao()
    public adiciona(): void {
        console.log(this.inputData)
        console.log(this.inputQuantidade)
        console.log(this.inputValor)
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