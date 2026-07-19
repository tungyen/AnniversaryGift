import { BaseScene } from "./BaseScene.js";
import { showLightbox } from "../managers/photoLightboxManager.js";
import { typewrite } from "../utils/typewriter.js";

export class QuestionFlowScene extends BaseScene {
    constructor(
        ui,
        questionManager,
        sceneManager,
        soundManager
    ) {
        super();
        this.ui = ui;
        this.questionManager = questionManager;
        this.sceneManager = sceneManager;
        this.soundManager = soundManager;

        this.questionCard = ui.questionCard;
        this.memoryCard = ui.memoryCard;

        this.questionManager.onCorrectAnswer((memory) => this.showMemory(memory));
        this.ui.memoryNextButton.onclick = () => this.memoryNext();

        this.ui.memoryImage.onclick = () => {
            showLightbox(this.ui.memoryImage.src);
        };
    }

    onEnter() {
        if (!this.questionManager.started) {
            this.questionManager.start();
        }
        this.showQuestion();
    }

    onLeave() {}

    showQuestion() {
        this.memoryCard.classList.add("hidden");
        this.questionCard.classList.remove("hidden");
    }

    async showMemory(memory) {
        this.ui.memoryImage.src = memory.image;
        this.ui.memoryTitle.textContent = "";
        this.ui.memoryText.textContent = "";
        // this.ui.memoryTitle.textContent = memory.title;
        // this.ui.memoryText.textContent = memory.text;

        this.questionCard.classList.add("hidden");
        this.memoryCard.classList.remove("hidden");
        await typewrite(this.ui.memoryTitle, memory.title);
        await typewrite(this.ui.memoryText, memory.text, 25);
    }

    memoryNext() {
        const hasNext = this.questionManager.next();
        if (hasNext) {
            this.soundManager.playNext();
            this.showQuestion();
        } else {
            this.sceneManager.change("ending");
        }
    }
}
