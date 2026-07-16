// Import Manager
import {QuestionManager} from "./managers/questionManager.js";
import {HeartManager} from "./managers/heartManager.js";
import {AnimationManager} from "./managers/animationManager.js";

// Import scene manager
import {SceneManager} from "./sceneManager.js";

// Import UI
import { QuestionUI } from "./ui/questionUI.js";

// Import scene
import { HomeScene } from "./scenes/HomeScene.js";
import { QuestionScene } from "./scenes/QuestionScene.js";
import { EndingScene } from "./scenes/EndingScene.js";
import { MemoryScene } from "./scenes/MemoryScene.js";

const ui={
    screens:{
        home: document.getElementById("home-screen"),
        question: document.getElementById("question-screen"),
        memory: document.getElementById("memory-screen"),
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

// Construct the callback function.
function showMemory(memory){
    memoryScene.setMemory(memory);
    sceneManager.change("memory");
}

function continueQuestion(){
    const hasNext = questionManager.next();
    if (hasNext) {
        sceneManager.change("question");
    }
}

// Construct the manager.
const heartManager = new HeartManager(ui);
const animationManager = new AnimationManager();
const questionUI = new QuestionUI(ui);
const questionManager =
    new QuestionManager(
        questionUI,
        heartManager,
        animationManager,
        sceneManager,
        showMemory
);

// Construct the scene
const homeScene = new HomeScene(ui, sceneManager);
const questionScene = new QuestionScene(questionManager);
const endingScene = new EndingScene();
const memoryScene =
    new MemoryScene(
        ui,
        continueQuestion
);

// Register scene
sceneManager.register("home", homeScene);
sceneManager.register("question", questionScene);
sceneManager.register("ending", endingScene);
sceneManager.register("memory", memoryScene);

// Init
sceneManager.change("home");
