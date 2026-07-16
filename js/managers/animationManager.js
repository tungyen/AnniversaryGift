export class AnimationManager{

    constructor(){

    }

    correct(button){
        button.classList.add("correct");
    }

    wrong(button){
        button.classList.remove("wrong");
        void button.offsetWidth;   // force reflow so the animation restarts
        button.classList.add("wrong");
    }
}