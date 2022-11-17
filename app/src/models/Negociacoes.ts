import { Model } from "../interfaces/Model.js";
import { Negociacao } from "./Negociacao.js";

export class Negociacoes implements Model<Negociacoes> {
    private negociacoes: Array<Negociacao> = []

    public adiciona(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao)
    }

    public lista(): ReadonlyArray<Negociacao> {
        return this.negociacoes
    }

    get text(): string {
        return JSON.stringify(this.negociacoes, null, 2)
    }

    public equal(objeto: Negociacoes): boolean {
        return JSON.stringify(this.negociacoes) === JSON.stringify(objeto.lista())
    }
}