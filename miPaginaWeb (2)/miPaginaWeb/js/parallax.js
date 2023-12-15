function initialize() {
    window.addEventListener("scroll", doParallaxEffect);
}

function doParallaxEffect() {
    const slider4 = document.getElementById("slider-4");
    const slider3 = document.getElementById("slider-3");
    const slider2 = document.getElementById("slider-2");
    const slider1 = document.getElementById("slider-1");

    const scrollValue = window.scrollY;

    slider1.style.top = -scrollValue * 0.6 + "px";
    slider2.style.top = -scrollValue * 0.4 + "px";
    slider3.style.top = -scrollValue * 0.2 + "px";
    slider4.style.top = -scrollValue * 0.1 + "px";
}

initialize();
