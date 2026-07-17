import { BaseScene } from "./BaseScene.js";

export class EndingScene extends BaseScene {

    constructor(ui) {
        super();
        this.ui = ui;

        this.introCard = ui.introCard;
        this.finalCard = ui.finalCard;

        this.videoOverlay = ui.videoOverlay;
        this.video = ui.video;
        this.skipVideoButton = ui.skipVideoButton;

        this.bindEvents();
    }

    onEnter() {
        console.log("Enter Ending Scene");
        this.showIntro();
    }

    onLeave() {
        console.log("Leave Ending Scene");
    }

    bindEvents() {
        this.ui.playVideoButton.onclick = () => this.playVideo();
        this.ui.restartButton.onclick = () => this.restart();
        this.skipVideoButton.onclick = () => this.finishVideo();

        this.video.onended = () => this.finishVideo();
        this.video.onerror = () => {
            console.warn("Ending video failed to load. Check assets/video path.");
            this.finishVideo();
        };
    }

    showIntro() {
        this.introCard.classList.remove("hidden");
        this.finalCard.classList.add("hidden");
    }

    playVideo() {
        this.videoOverlay.classList.remove("hidden");
        this.video.currentTime = 0;

        const playPromise = this.video.play();
        if (playPromise) {
            playPromise.catch((err) => {
                console.warn("Video play was blocked:", err);
            });
        }
    }

    finishVideo() {
        this.video.pause();
        this.videoOverlay.classList.add("hidden");

        this.introCard.classList.add("hidden");
        this.finalCard.classList.remove("hidden");
    }

    restart() {
        // Reload resets every scene/manager state in one clean step,
        // taking her right back to the home screen.
        location.reload();
    }
}