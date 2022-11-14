import { inspect } from "../decorators/Inspect.js"
import { logarTempoDeExecucao } from "../decorators/LogarTempoDeExecucao.js"

export abstract class View<T> {
    
    private element: HTMLElement

    constructor(seletorCss: string) {
        const elemento = document.querySelector(seletorCss)
        if (elemento) {
            this.element = <HTMLElement> elemento
        } else {
            throw Error(`Seletor ${seletorCss} não foi encontrado no DOM. Verifique se está correto!`)
        }
    }

    protected abstract template(dados: T): string

    public update(dados: T): void {
        let template = this.template(dados)
        this.element.innerHTML = template
    }
}