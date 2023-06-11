import {RangeSlider} from "./RangeSlider.js";

const SliderRange = new RangeSlider("range__slider", "progressBar", "resItem", "resCost")

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

const tlFunction = gsap.timeline({
    repeat : -1,
    defaults : {
        duration : 1,
        ease : "linear"
    }
})

tlFunction.from(".function__overlay",{opacity : 0, duration : .5, delay : .2})
    .fromTo('.info__line',{width : 0}, {width : "100%", delay : 1, duration : 1})
    .fromTo(".manage__line", {width : 0}, {width : "100%", delay: 0, duration : 1})
    .fromTo(".function__overlay", {opacity : 0}, {opacity : 1, duration : .2, delay : 0})
    .fromTo(".start__block", {display : "block"}, {display: "none", duration : .1, delay : 0})
    .fromTo(".end__block", {display : "none"}, {display: "block", delay : .2})
    .fromTo(".function__overlay", {opacity : 1}, {opacity : 0, delay : .2})
    .fromTo(".function__overlay", {opacity : 0}, {opacity : 1, delay : .6})



const tlProduct = gsap.timeline()
const tlEco = gsap.timeline({repeat: -1})

tlProduct.fromTo(".bottom__block",{left : 15, bottom: 0,} ,{left : 45, bottom : 60, duration : 2, delay : 2, repeat : -1, yoyo : true})
tlEco.fromTo(".present__element-plus", {background: "none"}, {background : "#5B5B5C", delay : 1, duration : .4})
    .fromTo(".elem__not1", {display : "none"}, {display : "flex", duration : .4, delay : .4})
    .to(".present__element-plus", {background: "transparent", delay : .4, duration : .4})
    .fromTo(".present__element-plus", {background: "none"}, {background : "#5B5B5C", delay : 1, duration : .4})
    .fromTo(".elem__not2", {display : "none"}, {display : "flex", duration : .4, delay : .4})
    .to(".present__element-plus", {background: "transparent", delay : .4, duration : .4})
    .fromTo(".present__element-plus", {background: "none"}, {background : "#5B5B5C", delay : 1, duration : .4})
    .fromTo(".elem__not3", {display : "none"}, {display : "flex", duration : 1, delay : .4})


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
    trigger : ".header__text",
    start : "top top",
    end : "+=200",
    animation : tlVideo,
    markers : true,
    scrub : true,
    reverse : true
})