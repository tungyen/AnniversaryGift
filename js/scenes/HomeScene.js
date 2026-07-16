import { BaseScene } from "./BaseScene.js";

export class HomeScene extends BaseScene {

    constructor(ui, screenManager) {
        super();
        this.ui = ui;
        this.screenManager = screenManager;
    }

    onEnter() {
        console.log("Enter Home Scene");
        this.bindEvents();
    }

    onLeave() {
        console.log("Leave Home Scene");
    }

    bindEvents() {
        this.ui.startButton.onclick = () => {
            this.screenManager.change("question");
        }
    }
}