var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { inspect } from "../decorators/Inspect.js";
import { logarTempoDeExecucao } from "../decorators/LogarTempoDeExecucao.js";
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
__decorate([
    logarTempoDeExecucao(),
    inspect()
], View.prototype, "update", null);
