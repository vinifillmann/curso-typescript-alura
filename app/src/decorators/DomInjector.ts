export function domInjector(seletorCss: string) {
    return function (
        target: any,
        propertyKey: string
    ) {

        let element: HTMLInputElement

        const getter = function() {
            if (!element) {
                element = <HTMLInputElement> document.querySelector(seletorCss)
            }

            return element
        }

        Object.defineProperty(
            target,
            propertyKey,
            {
                get: getter
            }
        )
    }
}