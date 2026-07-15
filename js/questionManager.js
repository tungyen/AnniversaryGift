import {questions} from "./questions.js";
import {showModal} from "./modalManager.js";


export class QuestionManager{
    constructor(
        ui,
        heartManager,
        animationManager
    )
    {
        this.ui = ui;
        this.heartManager = heartManager;
        this.animationManager = animationManager;
        this.currentIndex = 0;
    }

    start(){
        this.currentIndex = 0;
        this.render();
    }

    render(){
        const question = questions[this.currentIndex];

        this.ui.questionTitle.textContent = question.question;
        this.ui.optionsContainer.innerHTML="";

        question.options.forEach(
            (option,index)=>{
                const button = document.createElement("button");

                button.textContent = option;
                button.onclick=()=>this.checkAnswer(index, button);
                this.ui.optionsContainer.appendChild(button);
            }
        );
    }

    checkAnswer(index, button){
        const question = questions[this.currentIndex];

        if(index === question.answer){
            this.animationManager.correct(button);
            this.heartManager.increase();
            this.next();
        }
        else{
            showModal({
                emoji:"🥺",
                title:"妳真的確定嗎？",
                message:"再想想看嘛 ❤️",
                buttonText:"再看看"
            });
        }
    }

    next(){
        this.currentIndex++;
        if(this.currentIndex >= questions.length){
            alert("Demo Finish.");
            return;
        }
        this.render();
    }
}