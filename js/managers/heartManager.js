export class HeartManager{

    constructor(ui, total){
        this.ui = ui;
        this.total = total;
        this.filled = 0;
        this.build();
    }

    build(){
        this.ui.heartProgress.innerHTML =
            '<span class="heart-progress-icon">' +
                '<span class="heart-fill">♥</span>' +
                '<span class="heart-outline">♥</span>' +
            '</span>';

        this.heartIcon = this.ui.heartProgress.querySelector(".heart-progress-icon");
        this.fillLayer = this.ui.heartProgress.querySelector(".heart-fill");
    }

    increase(){
        if(this.filled >= this.total){
            return;
        }

        this.filled++;
        this.updateFill();
        this.animateHeart();
    }

    updateFill(){
        const percent = (this.filled / this.total) * 100;
        const clipFromTop = 100 - percent;

        this.fillLayer.style.clipPath = `inset(${clipFromTop}% 0 0 0)`;
    }

    animateHeart(){
        this.heartIcon.classList.add("pop");
        setTimeout(()=>{
            this.heartIcon.classList.remove("pop");
        },400);
    }
}