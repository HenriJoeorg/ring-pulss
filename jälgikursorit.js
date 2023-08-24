let ring = document.querySelector(".kursor");
let para = document.querySelectorAll("p");

window.addEventListener("mousemove", e => {
    ring.style.top = e.pageY + "px";
    ring.style.left = e.pageX + "px";
});

para.forEach(link => {
    link.addEventListener("mouseover", () => {
        ring.classList.add("suurenda");
        link.classList.add("valge");
    });
    
    link.addEventListener("mouseleave", () => {
        ring.classList.remove("suurenda");
        link.classList.remove("valge");
    });
});