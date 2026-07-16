import { BaseScene } from "./BaseScene.js";


export class QuestionScene extends BaseScene {

    constructor(questionManager) {
        super();
        this.questionManager = questionManager;
    }

    onEnter() {
        console.log("Enter Question Scene");
        this.questionManager.start();
    }

    onLeave() {
        console.log("Leave Question Scene");
    }
}