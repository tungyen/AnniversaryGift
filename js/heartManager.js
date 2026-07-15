export class HeartManager{

    constructor(ui){
        this.ui = ui;
        this.progress = 0;
        this.render();
    }

    increase(amount=20){
        this.progress = Math.min(this.progress + amount, 100);
        this.render();
    }

    render(){
        const filled = Math.floor(this.progress / 20);
        const empty = 5 - filled;
        this.ui.heartProgress.textContent = "♥".repeat(filled) + "♡".repeat(empty);
    }
}