// Import Manager
import {SceneManager} from "./sceneManager.js";
import {QuestionManager} from "./questionManager.js";
import {HeartManager} from "./heartManager.js";
import {AnimationManager} from "./animationManager.js";

// Import UI
import { QuestionUI } from "./questionUI.js";

// Import scene
import { HomeScene } from "./scenes/HomeScene.js";
import { QuestionScene } from "./scenes/QuestionScene.js";
import { EndingScene } from "./scenes/EndingScene.js";

const ui={
    screens:{
        home: document.getElementById("home-screen"),
        question: document.getElementById("question-screen"),
        ending: document.getElementById("ending-screen")
    },

    questionTitle: document.getElementById("question-title"),
    optionsContainer: document.getElementById("options-container"),
    questionNumber: document.getElementById("question-number"),
    startButton: document.getElementById("start-button"),
    heartProgress: document.getElementById("heart-progress"),

};

// Construct the manager
const sceneManager = new SceneManager(ui);
const heartManager = new HeartManager(ui);
const animationManager = new AnimationManager();
const questionUI = new QuestionUI(ui);
const questionManager =
    new QuestionManager(
        questionUI,
        heartManager,
        animationManager,
        sceneManager
    );

// Construct the scene
const homeScene = new HomeScene(ui, sceneManager);
const questionScene = new QuestionScene(questionManager);
const endingScene = new EndingScene();

// Register scene
sceneManager.register("home", homeScene);
sceneManager.register("question", questionScene);
sceneManager.register("ending", endingScene);

// Init
sceneManager.change("home");
