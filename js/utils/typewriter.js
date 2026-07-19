export function typewrite(element, text, speed = 35) {
    return new Promise((resolve) => {
        element.textContent = "";
        let index = 0;

        function typeNextChar() {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(typeNextChar, speed);
            } else {
                resolve();
            }
        }

        typeNextChar();
    });
}