import { View } from "./View.js";
export class MensagemView extends View {
    template(mensagem, danger = false) {
        let categoria = "info";
        if (danger) {
            categoria = "danger";
        }
        return `
        <p class="alert alert-${categoria}">${mensagem}</p>
        `;
    }
}
