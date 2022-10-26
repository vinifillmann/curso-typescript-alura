export class Negociacao {
    _data;
    quantidade;
    valor;
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return Number(this.quantidade) * Number(this.valor);
    }
    get data() {
        return new Date(this._data.getTime());
    }
}
