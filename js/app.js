// Import Manager
import {QuestionManager} from "./managers/questionManager.js";
import {HeartManager} from "./managers/heartManager.js";
import {AnimationManager} from "./managers/animationManager.js";
import {SoundManager} from "./managers/soundManager.js";
import {ConfettiManager} from "./managers/confettiManager.js";

// Import scene manager
import {SceneManager} from "./sceneManager.js";

// Import UI
import { QuestionUI } from "./ui/questionUI.js";

// Import data.
import { questions } from "./data/questions.js";
import { RELATIONSHIP_START_DATE } from "./data/config.js";
import { endingMessages } from "./data/endingMessages.js";

// Import scene.
import { HomeScene } from "./scenes/HomeScene.js";
import { QuestionFlowScene } from "./scenes/QuestionFlowScene.js";
import { EndingScene } from "./scenes/EndingScene.js";

const ui={
    screens:{
        home: document.getElementById("home-screen"),
        question: document.getElementById("question-flow-screen"),
        ending: document.getElementById("ending-screen")
    },

    // Home.
    daysTogether: document.getElementById("days-together"),
    bgmToggleButton: document.getElementById("bgm-toggle-button"),

    // Question card.
    questionTitle: document.getElementById("question-title"),
    optionsContainer: document.getElementById("options-container"),
    questionNumber: document.getElementById("question-number"),
    startButton: document.getElementById("start-button"),

    // Memory card.
    heartProgress: document.getElementById("heart-progress"),
    memoryImage: document.getElementById("memory-image"),
    memoryTitle: document.getElementById("memory-title"),
    memoryText: document.getElementById("memory-text"),
    memoryNextButton: document.getElementById("memory-next-button"),

    questionCard: document.querySelector(".question-card"),
    memoryCard: document.querySelector(".memory-card"),

    // Ending scene.
    playVideoButton: document.getElementById("play-video-button"),
    restartButton: document.getElementById("restart-button"),
    introCard: document.querySelector(".ending-intro"),
    finalCard: document.querySelector(".ending-final"),

    videoOverlay: document.getElementById("video-overlay"),
    video: document.getElementById("ending-video"),
    skipVideoButton: document.getElementById("skip-video-button"),

    endingIntroTitle: document.getElementById("ending-intro-title"),
    endingIntroMessage: document.getElementById("ending-intro-message")
};

// Construct the scene manager.
const sceneManager = new SceneManager(ui);

// Construct the manager.
const heartManager = new HeartManager(ui, questions.length);
const animationManager = new AnimationManager();
const soundManager = new SoundManager();
const confettiManager = new ConfettiManager();
const questionUI = new QuestionUI(ui, questions.length);
const questionManager =
    new QuestionManager(
        questionUI,
        heartManager,
        animationManager,
        soundManager
);

// Construct the scene.
const homeScene =
    new HomeScene(
        ui,
        sceneManager,
        soundManager,
        RELATIONSHIP_START_DATE
);
const questionFlowScene =
    new QuestionFlowScene(
        ui,
        questionManager,
        sceneManager,
        soundManager
);
const endingScene =
    new EndingScene(
        ui,
        soundManager,
        confettiManager,
        questionManager,
        endingMessages
);

// Register scene.
sceneManager.register("home", homeScene);
sceneManager.register("question", questionFlowScene);
sceneManager.register("ending", endingScene);

// Init.
sceneManager.change("home");

// Play the BGM.
ui.bgmToggleButton.onclick = () => {
    const isPlaying = soundManager.toggleBgm();
    ui.bgmToggleButton.textContent = isPlaying ? "🎵" : "🔇";
};
