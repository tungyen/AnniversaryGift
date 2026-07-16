export class SceneManager {

    constructor(ui) {
        this.ui = ui;
        this.currentScene = null;
        this.scenes = {};
    }

    register(name ,scene) {
        this.scenes[name] = scene;
    }

    hideAll() {
        Object.values(this.ui.screens).forEach(screen => {
            screen.classList.add("hidden");
        });
    }

    change(sceneName) {
        const next_scene = this.scenes[sceneName];

        if (!next_scene) {
            console.warn(`Unknown scene: ${sceneName}`);
            return;
        }
        if (this.currentScene) {
            this.currentScene.onLeave();
        }

        this.hideAll();
        this.ui.screens[sceneName].classList.remove("hidden");
        this.currentScene = next_scene;
        this.currentScene.onEnter();
    }
}