import { BaseScene } from "./BaseScene.js";


export class EndingScene extends BaseScene {

    constructor() {
        super();
    }

    onEnter() {
        console.log("Enter Ending Scene");
    }

    onLeave() {
        console.log("Leave Ending Scene");
    }
}