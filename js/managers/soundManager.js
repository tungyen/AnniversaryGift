export class SoundManager {

    constructor() {
        this.correctSound = new Audio("assets/audios/correct.mp3");
        this.completeSound = new Audio("assets/audios/complete.mp3");
        this.wrongSound = new Audio("assets/audios/wrong.mp3");
        this.nextSound = new Audio("assets/audios/next.mp3");
        this.startSound = new Audio("assets/audios/start.mp3");
    }

    playCorrect() {
        this.correctSound.currentTime = 0;
        this.correctSound.play().catch((err) => {
            console.warn("Correct sound blocked:", err);
        });
    }

    playComplete() {
        this.completeSound.currentTime = 0;
        this.completeSound.play().catch((err) => {
            console.warn("Complete sound blocked:", err);
        });
    }

    playWrong() {
        this.wrongSound.currentTime = 0;
        this.wrongSound.play().catch((err) => {
            console.warn("Wrong sound blocked:", err);
        });
    }

    playNext() {
        this.nextSound.currentTime = 0;
        this.nextSound.play().catch((err) => {
            console.warn("Next sound blocked:", err);
        });
    }

    playStart() {
        this.startSound.currentTime = 0;
        this.startSound.play().catch((err) => {
            console.warn("Start sound blocked:", err);
        });
    }
}