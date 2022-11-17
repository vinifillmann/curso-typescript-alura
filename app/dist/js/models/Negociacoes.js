export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
    get text() {
        return JSON.stringify(this.negociacoes, null, 2);
    }
    equal(objeto) {
        return JSON.stringify(this.negociacoes) === JSON.stringify(objeto.lista());
    }
}
//# sourceMappingURL=Negociacoes.js.map