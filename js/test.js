gsap.registerPlugin(ScrollTrigger)
const logo = document.querySelector(".logo__svg")

function openLogo() {
    gsap.fromTo(".mask0", {x: 50}, {x: 0, duration: .7});
    gsap.fromTo(".mask1", {x: -52}, {x: 0, duration: .7});
    gsap.fromTo("#mask2", {opacity: 0, width: 0}, {opacity: 1, x: 200, width: 105, duration: .7});
    gsap.fromTo(".mask2", {opacity: 0, width: 0}, {opacity: 1, width: 105, duration: .7});
    logo.classList.add("logo__svg_fixed")
    logo.classList.remove("logo__svg_block")
}
function closeLogo(){
    gsap.fromTo(".mask0", { x: 0 }, { x: 50, duration: .5 });
    gsap.fromTo(".mask1", { x: 0 }, { x: -52, duration: .5 });
    gsap.fromTo("#mask2", { opacity: 1, width: 105 }, { opacity: 0, x: 200, width: 0, duration: .5 });
    gsap.fromTo(".mask2", { opacity: 1, width: 105 }, { opacity: 0, width: 0, duration: .5 });
    logo.classList.add("logo__svg_block")
    logo.classList.remove("logo__svg_fixed")
    logo.removeAttribute("style")
}
function getMedia() {
    const width = window.innerWidth;
    let yPos, scaleX, endPoint;

    if (width <= 361) {
        yPos = -14;
        scaleX = 0.4;
        endPoint = -34;
        return { yPos, scaleX, endPoint, width };
    } else {
        yPos = 0;
        scaleX = 0.2;
        endPoint = -35;
        console.log(width)
        return { yPos, scaleX, endPoint, width };
    }
}

const { yPos, scaleX, endPoint, width } = getMedia();

const animPath = {
    path: [
        { x: 0, y: endPoint }
    ],
};

getMedia()

const tlLogo = gsap.timeline();
tlLogo.add(
    gsap.fromTo(".logo__svg",{y : yPos }, {motionPath: animPath, scale : scaleX ,  ease: "power1.inOut", duration : 1}),
);
const tlVideo = gsap.timeline()
tlVideo.add(
    gsap.to(".video",{x : "-50%", left : "50%", width : width - 100, rotation : 0, ease: "power1.inOut", duration : 2}),
)

ScrollTrigger.create({
    trigger: ".header",
    start: "top top",
    end: "+=150",
    animation: tlLogo,
    markers: true,
    scrub : true,
    reverse : true,
    toggleActions: "play none none none",
    onEnterBack : openLogo,
    onLeave : closeLogo
})

ScrollTrigger.create({
    trigger : ".header__video",
    start : "top top",
    end : "+=200",
    animation : tlVideo,
    markers : true,
    scrub : true,
    reverse : true
})