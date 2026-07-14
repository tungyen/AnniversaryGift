import {SceneManager}
from "./sceneManager.js";

import {QuestionManager}
from "./questionManager.js";


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
    document.getElementById("start-button")
};


const sceneManager = new SceneManager(ui);
const questionManager = new QuestionManager(ui);


ui.startButton.addEventListener(
    "click",
    ()=>{
        sceneManager.show("question");
        questionManager.start();
    }
);