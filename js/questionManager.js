import {questions} from "./questions.js";


export class QuestionManager{
    constructor(ui){
        this.ui = ui;
        this.currentIndex = 0;
    }

    start(){
        this.currentIndex = 0;
        this.render();
    }

    render(){
        const question =
        questions[this.currentIndex];

        this.ui.questionTitle.textContent =
        question.question;
        this.ui.optionsContainer.innerHTML="";

        question.options.forEach(
            (option,index)=>{
                const button =
                document.createElement("button");

                button.textContent =
                option;

                button.addEventListener(
                    "click",
                    ()=>{

                        this.checkAnswer(index);

                    }
                );
                this.ui.optionsContainer.appendChild(button);
            }
        );
    }

    checkAnswer(index){
        const question =
        questions[this.currentIndex];

        if(index === question.answer){
            alert("答對 ❤️");
            this.next();
        }

        else{
            alert("再想想 ❤️");
        }
    }

    next(){
        this.currentIndex++;
        if(
            this.currentIndex
            >= questions.length
        ){
            alert("完成");
            return;
        }
        this.render();
    }
}