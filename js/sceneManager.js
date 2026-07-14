export class SceneManager {

    constructor(ui) {
        this.ui = ui;
    }

    hideAllScreens() {
        Object.values(this.ui.screens).forEach(screen => {
            screen.classList.add("hidden");

        });
    }

    show(screenName) {
        this.hideAllScreens();
        this.ui.screens[screenName]
            .classList
            .remove("hidden");
    }
}