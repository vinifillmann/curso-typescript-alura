export class View {
    element;
    constructor(seletorCss) {
        this.element = document.querySelector(seletorCss);
    }
    update(dados) {
        this.element.innerHTML = this.template(dados);
    }
}
