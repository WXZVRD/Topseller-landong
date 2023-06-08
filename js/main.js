const logo = document.querySelector(".logo__svg");
let animationPlayed = false;

function closeLogo() {
    gsap.fromTo(".mask0", { x: 0 }, { x: 50, duration: 1 });
    gsap.fromTo(".mask1", { x: 0 }, { x: -52, duration: 1 });
    gsap.fromTo(
        "#mask2",
        { opacity: 1, width: 105 },
        { opacity: 0, x: 200, width: 0, duration: 1 }
    );
    gsap.fromTo(
        ".mask2",
        { opacity: 1, width: 105 },
        { opacity: 0, width: 0, duration: 1 }
    );
    gsap.fromTo(logo, {top : 170, scale : 5.5}, {top : 20, scale : 1})
    logo.classList.add("logo__svg_block")
    logo.classList.remove("logo__svg_fixed")
    gsap.twee
    animationPlayed = true;
}

function openLogo() {
    gsap.fromTo(".mask0", { x: 50 }, { x: 0, duration: 1 });
    gsap.fromTo(".mask1", { x: -52 }, { x: 0, duration: 1 });
    gsap.fromTo(
        "#mask2",
        { opacity: 0, width: 0 },
        { opacity: 1, x: 200, width: 105, duration: 1 }
    );
    gsap.fromTo(
        ".mask2",
        { opacity: 0, width: 0 },
        { opacity: 1, width: 105, duration: 1 }
    );
    gsap.fromTo(logo, {top : 20, scale : 1}, {top : 210, scale : 5.5})
    if (!logo.classList.contains("logo__svg_fixed")){
        logo.classList.add("logo__svg_fixed")
        logo.classList.remove("logo__svg_block")
    }  else{
        logo.classList.remove("logo__svg_fixed")
    }

    animationPlayed = false;
}




window.addEventListener("scroll", () => {
    if (!animationPlayed && window.scrollY >= 0) {
        closeLogo();
    } else if (animationPlayed && window.scrollY <= 0) {
        openLogo();
    }
});



