import { BaseScene } from "./BaseScene.js";


export class QuestionScene extends BaseScene {

    constructor(
        questionManager,
        memoryScene
    ) {
        super();
        this.questionManager = questionManager;
        this.memoryScene = memoryScene;
    }

    onEnter() {
        console.log("Enter Question Scene");
        if (!this.questionManager.started) {
            this.questionManager.start();
        }
    }

    onLeave() {
        console.log("Leave Question Scene");
    }
}