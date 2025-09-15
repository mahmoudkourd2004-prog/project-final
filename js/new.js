
window.addEventListener("load", () => {
    const loader = document.getElementById("preloader");

    setTimeout(() => {
        loader.classList.add("hide"); 

        setTimeout(() => {
            loader.style.display = "none";
        }, 2000);
    }, 2000);
});