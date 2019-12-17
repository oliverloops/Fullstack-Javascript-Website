//Sticky header 
window.onscroll = () => { stickier() };

let header = document.querySelector("header");
let home = document.querySelector(".home");
let sticky = header.offsetTop;

let anchorOne = document.querySelector(".anchorOne");
let anchorTwo = document.querySelector(".anchorTwo");
let anchorThree = document.querySelector(".anchorThree");

let arrow = document.querySelector(".arrow");

const stickier = () => {
    if(window.pageYOffset > sticky){
        header.classList.add("sticky");
        home.classList.add("changer");

        anchorOne.classList.add("changer");
        anchorTwo.classList.add("changer");
        anchorThree.classList.add("changer");

        arrow.classList.add("no-show");
    } else {
        header.classList.remove("sticky");
        home.classList.remove("changer");

        anchorOne.classList.remove("changer");
        anchorTwo.classList.remove("changer");
        anchorThree.classList.remove("changer");

        arrow.classList.remove("no-show");
    }
}

//Automated Date at Footer 
const date = new Date();
let year = date.getFullYear();

document.querySelector(".year").innerHTML = `${year}`;

//Redirecting and Remplacing HTML <a></a>
const fb = document.querySelector(".facebook");
const yt = document.querySelector(".youtube");
const ig = document.querySelector(".instagram");

const redirect = social_net => {
    if(social_net == fb){
        social_net.addEventListener("click", () => { window.open('https://web.facebook.com/asterdots/')});
    } else if(social_net == yt) {
        social_net.addEventListener("click", () => { window.open('https://www.youtube.com/channel/UC3nblRQ8EN4Ax-28-f6YMRg')});
    } else if(social_net == ig) {
        social_net.addEventListener("click", () => { window.open('https://www.instagram.com/asterdots/')});
    }
}

redirect(fb);
redirect(yt);
redirect(ig);

//FORM SECTION
$('.message a').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});

