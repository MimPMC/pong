export default class Paddle {
    constructor(paddle) {
        this.paddleElement = this.paddleElement
    }
    get position () {
        return parseFloat (getComputedStyle(this.paddleElement).getPropertyValue("--position"))

    }
    set position(value) {
        this.paddleElement.style.setProperty("--position", value)
    }
}