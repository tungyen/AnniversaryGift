export class HeartManager{

    constructor(ui){
        this.ui = ui;
        this.progress = 0;
    }

    increase(amount=20){
        this.progress += amount;
        if(this.progress > 100)
        {
            this.progress = 100;
        }
        this.render();
    }

    render(){
        const total = 5;
        const filled = Math.floor(this.progress / 20);
        const empty = total - filled;

        this.ui.heartProgress.textContent = 
        "♥".repeat(filled)
        +
        "♡".repeat(empty);
    }
}