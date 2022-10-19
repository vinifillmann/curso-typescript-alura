export class Negociacao {
    #data: Date
    #quantidade
    #valor

    constructor(data: Date, quantidade: Number, valor: Number) {
        this.#data = data
        this.#quantidade = quantidade
        this.#valor = valor
    }

    get data() {
        return this.#data
    }

    get quantidade() {
        return this.#quantidade
    }

    get valor() {
        return this.#valor
    }

    get volume() {
        return this.#quantidade * this.#valor
    }

}