const lightbox = document.getElementById("photo-lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeButton = document.getElementById("lightbox-close-button");

function showLightbox(imageSrc) {
    lightboxImage.src = imageSrc;
    lightbox.classList.remove("hidden");
}

function hideLightbox() {
    lightbox.classList.add("hidden");
}

closeButton.onclick = () => hideLightbox();
lightbox.onclick = (event) => {
    if (event.target === lightbox) {
        hideLightbox();
    }
};

export {
    showLightbox,
    hideLightbox
};