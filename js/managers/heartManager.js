export class HeartManager{

    constructor(ui, total){
        this.ui = ui;
        this.total = total;
        this.filled = 0;
        this.build();
    }

    build(){
        const heartPath = "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z";

        this.ui.heartProgress.innerHTML =
            '<span class="heart-progress-icon">' +
                '<svg class="heart-fill" viewBox="0 0 24 24"><path d="' + heartPath + '"></path></svg>' +
                '<svg class="heart-outline" viewBox="0 0 24 24"><path d="' + heartPath + '"></path></svg>' +
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