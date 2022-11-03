import { View } from "./View.js";

export class MensagemView extends View<String> {

    protected template(mensagem: string, danger: boolean = false): string {
        let categoria = "info"
        if (danger) {
            categoria = "danger"
        }
        return `
        <p class="alert alert-${categoria}">${mensagem}</p>
        `
    }

}