import {SceneManager}
from "./sceneManager.js";

import {QuestionManager}
from "./questionManager.js";

import {HeartManager}
from "./heartManager.js";

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

startButton:
    document.getElementById("start-button"),

heartProgress:
    document.getElementById("heart-progress"),
};


const sceneManager = new SceneManager(ui);
const questionManager = new QuestionManager(ui);
const heartManager = new HeartManager(ui);

ui.startButton.addEventListener(
    "click",
    ()=>{
        sceneManager.show("question");
        heartManager.increase();
        questionManager.start();
    }
);