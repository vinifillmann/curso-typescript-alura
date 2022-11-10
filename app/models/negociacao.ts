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

    public static criar(dataString: string, quantidadeString: string, valorString: string): Negociacao {
        return new Negociacao(
            new Date(dataString.replaceAll("-", ",")),
            parseInt(quantidadeString),
            parseFloat(valorString)
        )
    }

}