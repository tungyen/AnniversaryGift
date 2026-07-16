import {questions} from "../data/questions.js";
import {showModal} from "./modalManager.js";


export class QuestionManager{
    constructor(
        questionUI,
        heartManager,
        animationManager
    )
    {
        this.questionUI = questionUI;
        this.heartManager = heartManager;
        this.animationManager = animationManager;
        this._onCorrectAnswer = null;
        this.currentIndex = 0;
        this.started = false;
        this.finished = false;
    }

    onCorrectAnswer(callback){
        this._onCorrectAnswer = callback;
    }

    start(){
        this.currentIndex = 0;
        this.started = true;
        this.finished = false;
        this.render();
    }

    render(){
        const question = questions[this.currentIndex];
        this.questionUI.render(
            question,
            (index, button)=>{
                this.checkAnswer(index, button);
            }
        )
    }

    checkAnswer(index, button){
        if(this.finished){
            return;
        }
        const question = questions[this.currentIndex];
        if(!question){
            return;
        }

        if(index === question.answer){
            this.animationManager.correct(button);
            this.heartManager.increase();
            setTimeout(async ()=>{
                await this.questionUI.transition();
                this._onCorrectAnswer(question.memory);
            },800);
        }
        else{
            this.animationManager.wrong(button);
            setTimeout(()=>{
                showModal({
                    emoji:"🥺",
                    title:"妳真的確定嗎？",
                    message:"再想想看嘛 ❤️",
                    buttonText:"再看看"
                });
            },300);
        }
    }

    next(){
        this.currentIndex++;
        if(this.currentIndex >= questions.length){
            this.finished = true;
            return false;
        }
        this.render();
        return true;
    }
}