// Import Manager
import {QuestionManager} from "./managers/questionManager.js";
import {HeartManager} from "./managers/heartManager.js";
import {AnimationManager} from "./managers/animationManager.js";

// Import scene manager
import {SceneManager} from "./sceneManager.js";

// Import UI
import { QuestionUI } from "./ui/questionUI.js";

// Import data
import { questions } from "./data/questions.js";

// Import scene
import { HomeScene } from "./scenes/HomeScene.js";
import { QuestionFlowScene } from "./scenes/QuestionFlowScene.js";
import { EndingScene } from "./scenes/EndingScene.js";

const ui={
    screens:{
        home: document.getElementById("home-screen"),
        question: document.getElementById("question-flow-screen"),
        ending: document.getElementById("ending-screen")
    },

    questionTitle: document.getElementById("question-title"),
    optionsContainer: document.getElementById("options-container"),
    questionNumber: document.getElementById("question-number"),
    startButton: document.getElementById("start-button"),
    heartProgress: document.getElementById("heart-progress"),
    memoryImage: document.getElementById("memory-image"),
    memoryTitle: document.getElementById("memory-title"),
    memoryText: document.getElementById("memory-text"),
    memoryNextButton: document.getElementById("memory-next-button")
};

// Construct the scene manager.
const sceneManager = new SceneManager(ui);

// Construct the manager.
const heartManager = new HeartManager(ui, questions.length);
const animationManager = new AnimationManager();
const questionUI = new QuestionUI(ui);
const questionManager =
    new QuestionManager(
        questionUI,
        heartManager,
        animationManager
);

// Construct the scene
const homeScene = new HomeScene(ui, sceneManager);
const questionFlowScene = new QuestionFlowScene(ui, questionManager, sceneManager);
const endingScene = new EndingScene();

// Register scene
sceneManager.register("home", homeScene);
sceneManager.register("question", questionFlowScene);
sceneManager.register("ending", endingScene);

// Init
sceneManager.change("home");
