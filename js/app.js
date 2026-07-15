import {SceneManager} from "./sceneManager.js";
import {QuestionManager} from "./questionManager.js";
import {HeartManager} from "./heartManager.js";
import {AnimationManager} from "./animationManager.js";
import { QuestionUI } from "./questionUI.js";

const ui={

screens:{
    home:
        document.getElementById("home-screen"),


    question:
        document.getElementById("question-screen"),

    ending:
        document.getElementById("ending-screen")
},

questionTitle:
    document.getElementById("question-title"),

optionsContainer:
    document.getElementById("options-container"),

questionNumber:
    document.getElementById("question-number"),

startButton:
    document.getElementById("start-button"),

heartProgress:
    document.getElementById("heart-progress"),
};


const sceneManager = new SceneManager(ui);
const heartManager = new HeartManager(ui);
const animationManager = new AnimationManager();
const questionUI = new QuestionUI(ui);
const questionManager = new QuestionManager(questionUI, heartManager, animationManager);

ui.startButton.addEventListener(
    "click",
    ()=>{
        sceneManager.show("question");
        questionManager.start();
    }
);