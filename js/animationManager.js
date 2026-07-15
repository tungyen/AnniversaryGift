export class AnimationManager{

    constructor(){

    }

    correct(button){
        console.log("correct", button.textContent);
    }

    wrong(button){
        console.log("wrong", button.textContent);

    }
}