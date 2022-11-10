export class View {
    element;
    verificacao;
    constructor(seletorCss, verificacao = false) {
        const elemento = document.querySelector(seletorCss);
        if (elemento) {
            this.element = elemento;
        }
        else {
            throw Error(`Seletor ${seletorCss} não foi encontrado no DOM. Verifique se está correto!`);
        }
        this.verificacao = verificacao;
    }
    update(dados) {
        let template = this.template(dados);
        if (this.verificacao) {
            template = this.template(dados).replace(/<script>[\s\S]*?<\/script>/, "");
        }
        this.element.innerHTML = template;
    }
}
