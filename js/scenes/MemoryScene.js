import { BaseScene } from "./BaseScene.js";

export class MemoryScene extends BaseScene {
    constructor(ui, toNext) {
        super();
        this.ui = ui;
        this.memory = null;
        this.toNext = toNext;
    }

    setMemory(memory) {
        this.memory = memory;
    }

    onEnter() {
        console.log("Enter Memory Scene");
        this.render();
        this.bindEvents();
    }

    onLeave() {
        console.log("Leave Memory Scene");
    }


    render() {
        if (!this.memory) {
            return;
        }
        this.ui.memoryImage.src = this.memory.image;
        this.ui.memoryTitle.textContent = this.memory.title;
        this.ui.memoryText.textContent = this.memory.text;
    }

    bindEvents() {
        this.ui.memoryNextButton.onclick = ()=> {
            this.toNext();
        };
    }
}