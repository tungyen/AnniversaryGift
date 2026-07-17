import { BaseScene } from "./BaseScene.js";

export class HomeScene extends BaseScene {

    constructor(ui, screenManager, startDate) {
        super();
        this.ui = ui;
        this.screenManager = screenManager;
        this.startDate = startDate;
    }

    onEnter() {
        console.log("Enter Home Scene");
        this.bindEvents();
        this.renderDaysTogether();
    }

    onLeave() {
        console.log("Leave Home Scene");
    }

    bindEvents() {
        this.ui.startButton.onclick = () => {
            this.screenManager.change("question");
        }
    }

    renderDaysTogether() {
        if (!this.ui.daysTogether || !this.startDate) {
            return;
        }

        const start = new Date(this.startDate);
        const now = new Date();

        const msPerDay = 1000 * 60 * 60 * 24;
        const diffDays = Math.floor((now - start) / msPerDay);

        if (isNaN(diffDays) || diffDays < 0) {
            this.ui.daysTogether.textContent = "";
            return;
        }

        this.ui.daysTogether.textContent = `我們已經在一起 ${diffDays} 天了 ❤️`;
    }
}