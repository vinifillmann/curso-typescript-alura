import { inspect } from "../decorators/Inspect.js"
import { logarTempoDeExecucao } from "../decorators/LogarTempoDeExecucao.js"

export abstract class View<T> {
    
    private element: HTMLElement
    private verificacao: boolean

    constructor(seletorCss: string, verificacao = false) {
        const elemento = document.querySelector(seletorCss)
        if (elemento) {
            this.element = <HTMLElement> elemento
        } else {
            throw Error(`Seletor ${seletorCss} não foi encontrado no DOM. Verifique se está correto!`)
        }
        this.verificacao = verificacao
    }

    protected abstract template(dados: T): string

    @logarTempoDeExecucao()
    @inspect()
    public update(dados: T): void {
        let template = this.template(dados)
        if (this.verificacao) {
            template = this.template(dados).replace(/<script>[\s\S]*?<\/script>/, "")
        }
        this.element.innerHTML = template
    }
}