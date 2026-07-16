import {questions} from "./questions.js";
import {showModal} from "./modalManager.js";


export class QuestionManager{
    constructor(
        questionUI,
        heartManager,
        animationManager,
        sceneManager
    )
    {
        this.questionUI = questionUI;
        this.heartManager = heartManager;
        this.animationManager = animationManager;
        this.sceneManager = sceneManager;
        this.currentIndex = 0;
        this.finished = false;
    }

    start(){
        this.currentIndex = 0;
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
                this.next();
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
            this.end();
            return;
        }
        this.render();
    }

    end(){
        this.finished = true;
        this.sceneManager.change("ending");
    }
}