export class QuestionUI {

    constructor(ui){
        this.questionTitle = ui.questionTitle;
        this.optionsContainer = ui.optionsContainer;
        this.questionNumber = ui.questionNumber;
        this.card = document.querySelector(".question-card");
    }

    render(question, onAnswer){
        this.questionNumber.textContent =`第 ${question.id} 個回憶問題`;
        this.questionTitle.textContent = question.question;
        this.optionsContainer.innerHTML = "";
        console.log("render question:", question);
        question.options.forEach(
            (option,index)=>{
                const button =
                    document.createElement("button");

                button.textContent = option;
                button.onclick = ()=>{
                    onAnswer(
                        index,
                        button
                    );
                };
                this.optionsContainer.appendChild(button);
            }
        );
    }

    transition(){
        return new Promise(resolve=>{
            this.card.classList.add("fade-out");
            setTimeout(()=>{
                this.card.classList.remove("fade-out");
                resolve();
            },300);
        });
    }
}