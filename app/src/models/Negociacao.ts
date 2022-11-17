import { Imprimivel } from "../utils/Imprimivel.js"

export class Negociacao implements Imprimivel {

    constructor(
        private _data: Date,
        public readonly quantidade: Number,
        public readonly valor: Number
    ) {}

    public static criar(dataString: string, quantidadeString: string, valorString: string): Negociacao {
        return new Negociacao(
            new Date(dataString.replace(/-/g, ",")),
            parseInt(quantidadeString),
            parseFloat(valorString)
        )
    }

    get volume(): Number {
        return Number(this.quantidade) * Number(this.valor)
    }

    get data(): Date {
        return new Date(this._data.getTime())
    }

    get text(): string {
        return `
            Data: ${this.data},
            Quantidade: ${this.quantidade},
            Valor: ${this.valor}
        `
    }

}