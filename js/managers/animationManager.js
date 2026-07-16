export class AnimationManager{

    constructor(){

    }

    correct(button){
        button.classList.add("correct");
    }

    wrong(button){
        button.classList.add("wrong");
    }
}