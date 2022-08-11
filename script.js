const images = document.querySelectorAll(".img");

function removeActiveClasses() {
    images.forEach(img => {
        img.classList.remove("active")
    })
}

images.forEach(img => {
    img.addEventListener("click", () => {
        removeActiveClasses();
        img.classList.add("active");
    })
})