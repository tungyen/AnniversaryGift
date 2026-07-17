export class SoundManager {

    constructor() {
        this.correctSound = new Audio("assets/audios/correct.mp3");
        this.correctSound.volume = 0.25

        this.completeSound = new Audio("assets/audios/complete.mp3");
        this.completeSound.volume = 0.3

        this.wrongSound = new Audio("assets/audios/wrong.mp3");
        this.wrongSound.volume = 0.25

        this.nextSound = new Audio("assets/audios/next.mp3");
    
        this.startSound = new Audio("assets/audios/start.mp3");
        this.startSound.volume = 0.25;

        this.bgm = new Audio("assets/audios/bgm.mp3");
        this.bgm.loop = true;
        this.bgm.volume = 0.35;

        this.bgmEnabled = true;
        this.bgmWasPlayingBeforeVideo = false;

        this.unlockBgmOnFirstInteraction();
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

    toggleBgm() {
        if (this.bgmEnabled) {
            this.pauseBgm();
        } else {
            this.startBgm();
        }
        return this.bgmEnabled;
    }

    startBgm() {
        this.bgmEnabled = true;
        this.bgm.play().catch((err) => {
            console.warn("BGM play blocked:", err);
        });
    }

    pauseBgm() {
        this.bgmEnabled = false;
        this.bgm.pause();
    }

    duckBgmForVideo() {
        this.bgmWasPlayingBeforeVideo = this.bgmEnabled;
        this.bgm.pause();
    }

    restoreBgmAfterVideo() {
        if (this.bgmWasPlayingBeforeVideo) {
            this.bgm.play().catch((err) => {
                console.warn("BGM resume blocked:", err);
            });
        }
    }

    unlockBgmOnFirstInteraction() {
        const tryPlay = () => {
            if (this.bgmEnabled) {
                this.bgm.play().catch(() => {
                    // Still blocked, will retry on next interaction.
                });
            }
        };

        document.addEventListener("click", tryPlay, { once: true });
    }
}