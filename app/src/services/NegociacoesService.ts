import { NegociacaoDoDia } from "../interfaces/NegociacaoDoDia.js";
import { Negociacao } from "../models/Negociacao.js";

export class NegociacoesService {
    public obterNegociacoesDoDia(): Promise<Array<Negociacao>> {
        return fetch("http://localhost:8080/dados")
            .then(res => res.json())
            .then((dados: Array<NegociacaoDoDia>) => {
                return dados.map(dado => {
                    return new Negociacao(new Date(), dado.vezes, dado.montante)
                })
            })
    }
}