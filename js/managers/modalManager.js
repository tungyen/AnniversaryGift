const modalOverlay = document.getElementById("modal-overlay");
const modalEmoji = document.getElementById("modal-emoji");
const modalTitle = document.getElementById("modal-title");
const modalMessage = document.getElementById("modal-message");
const modalButton = document.getElementById("modal-button");

function showModal({
    emoji = "🥺",
    title = "妳真的確定嗎？",
    message = "再想想看嘛 ❤️",
    buttonText = "再看看",
    onConfirm = null
}) {
    modalEmoji.textContent = emoji;
    modalTitle.textContent = title;
    modalMessage.textContent = message;
    modalButton.textContent = buttonText;
    modalOverlay.classList.remove("hidden");

    modalButton.onclick = () => {
        hideModal();
        if(onConfirm){
            onConfirm();
        }
    };
}

function hideModal(){
    modalOverlay.classList.add("hidden");
}

export {
    showModal,
    hideModal
};