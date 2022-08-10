const btn = document.querySelector(".share-icon");
const openBtn = document.querySelector(".icons-toggle");

btn.addEventListener("click", () => {
    openBtn.classList.toggle("active");
})