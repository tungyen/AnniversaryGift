export class HeartManager{

    constructor(ui, total){
        this.ui = ui;
        this.total = total;
        this.filled = 0;
        this.render();
    }

    increase(){
        if(this.filled >= this.total){
            return;
        }
        this.filled++;
        this.render();
        this.animateHeart(this.filled - 1);
    }

    render(){
        this.ui.heartProgress.innerHTML="";
        for(let i=0;i<this.total;i++){
            const heart = document.createElement("span");
            heart.classList.add("heart");
            heart.textContent="♥";

            if(i < this.filled){
                heart.classList.add("filled");
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
