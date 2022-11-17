import { domInjector } from "../decorators/DomInjector.js"
import { logarTempoDeExecucao } from "../decorators/LogarTempoDeExecucao.js"
import { DiasDaSemana } from "../enums/DiasDaSemana.js"
import { Negociacao } from "../models/Negociacao.js"
import { Negociacoes } from "../models/Negociacoes.js"
import { NegociacoesService } from "../services/NegociacoesService.js"
import { imprimir } from "../utils/Imprimir.js"
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
    private negociacoesService = new NegociacoesService()

    constructor() {
        this.negocioesView.update(this.negociacoes)
    }

    @logarTempoDeExecucao()
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

        imprimir(negociacao, this.negociacoes)

        this.limparFormulario()
        this.atualizaView()
    }

    public importaDados(): void {
        this.negociacoesService
            .obterNegociacoesDoDia()
            .then(negociacoesDeHoje => {
                return negociacoesDeHoje.filter(negociacaoDeHoje => {
                    return !this.negociacoes
                        .lista()
                        .some(negociacao => negociacao.equal(negociacaoDeHoje))
                })
            })
            .then(negociacoesDeHoje => {
                for (let negociacao of negociacoesDeHoje) {
                    this.negociacoes.adiciona(negociacao)
                }
                this.negocioesView.update(this.negociacoes)
            })
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