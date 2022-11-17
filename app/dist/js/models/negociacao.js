export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    static criar(dataString, quantidadeString, valorString) {
        return new Negociacao(new Date(dataString.replace(/-/g, ",")), parseInt(quantidadeString), parseFloat(valorString));
    }
    get volume() {
        return Number(this.quantidade) * Number(this.valor);
    }
    get data() {
        return new Date(this._data.getTime());
    }
    get text() {
        return `
            Data: ${this.data},
            Quantidade: ${this.quantidade},
            Valor: ${this.valor}
        `;
    }
    equal(negociacao) {
        return this.data.getDate() === negociacao.data.getDate()
            && this.data.getMonth() == negociacao.data.getMonth()
            && this.data.getFullYear() === negociacao.data.getFullYear();
    }
}
//# sourceMappingURL=Negociacao.js.map