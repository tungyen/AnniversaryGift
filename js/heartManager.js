export class HeartManager{

    constructor(ui){
        this.ui = ui;
        this.total = 5;
        this.progress = 0;
        this.render();
    }

    increase(amount=20){
        const oldFiled = Math.floor(this.progress / amount);
        this.progress = Math.min(this.progress + amount, 100);
        this.render();
        const newFilled = Math.floor(this.progress / amount);
        if (newFilled > oldFiled) {
            this.animateHeart(newFilled - 1);
        }
    }

    render(){
        const filled = Math.floor(this.progress / 20);
        this.ui.heartProgress.innerHTML="";
        for(let i=0;i<this.total;i++){
            const heart = document.createElement("span");
            heart.classList.add("heart");

            if(i < filled){
                heart.textContent="♥";
                heart.classList.add("filled");
            } else{
                heart.textContent="♡";
            }
            this.ui.heartProgress.appendChild(heart);
        }
    }

    animateHeart(index){
        const hearts = this.ui.heartProgress.querySelectorAll(".heart");
        const heart = hearts[index];

        if(!heart){
            return;
        }

        heart.classList.add("heart-pop");
        setTimeout(()=>{
            heart.classList.remove("heart-pop");
        },400);
    }
}