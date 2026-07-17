const PIECES = ["❤️", "💕", "💖", "✨"];

export class ConfettiManager {

    constructor() {
        this.container = document.createElement("div");
        this.container.id = "confetti-container";
        document.body.appendChild(this.container);
    }

    burst(count = 30) {
        for (let i = 0; i < count; i++) {
            this.spawnPiece();
        }
    }

    spawnPiece() {
        const piece = document.createElement("span");
        piece.className = "confetti-piece";
        piece.textContent = PIECES[Math.floor(Math.random() * PIECES.length)];

        const left = Math.random() * 100;
        const duration = 2.5 + Math.random() * 2;
        const delay = Math.random() * 0.6;
        const size = 16 + Math.random() * 18;
        const drift = (Math.random() - 0.5) * 200;
        const rotation = Math.random() * 360;

        piece.style.left = `${left}vw`;
        piece.style.fontSize = `${size}px`;
        piece.style.animationDuration = `${duration}s`;
        piece.style.animationDelay = `${delay}s`;
        piece.style.setProperty("--drift", `${drift}px`);
        piece.style.setProperty("--rotate", `${rotation}deg`);

        this.container.appendChild(piece);

        setTimeout(() => {
            piece.remove();
        }, (duration + delay) * 1000);
    }
}