
window.addEventListener("load", () => {
    const loader = document.getElementById("preloader");
    const content = document.querySelector(".main-content");
    setTimeout(() => {
        loader.classList.add("hide"); 

        setTimeout(() => {
            loader.style.display = "none";
            content.style.display = "block";
        }, 1000);
    }, 2000);
});



