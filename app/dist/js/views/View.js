export class View {
    constructor(seletorCss) {
        const elemento = document.querySelector(seletorCss);
        if (elemento) {
            this.element = elemento;
        }
        else {
            throw Error(`Seletor ${seletorCss} não foi encontrado no DOM. Verifique se está correto!`);
        }
    }
    update(dados) {
        let template = this.template(dados);
        this.element.innerHTML = template;
    }
}
