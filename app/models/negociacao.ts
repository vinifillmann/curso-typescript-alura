export class Negociacao {

    constructor(
        private _data: Date,
        public readonly quantidade: Number,
        public readonly valor: Number
    ) {}

    get volume(): Number {
        return Number(this.quantidade) * Number(this.valor)
    }

    get data(): Date {
        return new Date(this._data.getTime())
    }

}