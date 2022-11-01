export abstract class View<T> {
    
    private element: HTMLElement

    constructor(seletorCss: string) {
        this.element = document.querySelector(seletorCss)
    }

    abstract template(dados: T): string

    update(dados: T): void {
        this.element.innerHTML = this.template(dados)
    }

}