const preloader = document.querySelector('.preloader');
const transition = document.querySelector('.glitch-transition video');

window.onload = function() {
    setTimeout(function() {
        transition.play();
    }, 500)
    setTimeout(function() {
        preloader.style.display = 'none';
    }, 1000)
}

const navLinks = document.querySelectorAll('.nav a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        let linkId = link.getAttribute('href');
        let positionY;

        switch (linkId) {
            case 'home': 
                positionY = 0;
                break;

            case '#about':
                positionY = windowWidth <= 599 ? 1400 : 950;
                break;
            
            case '#work':
                positionY = windowWidth <= 599 ? 6000 : 5400;
                break;

            case '#contact':
                positionY =  windowWidth <= 599 ? 9400 : 8400;
                break;
                
            default:
                break;
        }
        

        setTimeout(function() {
            window.scrollTo(0, positionY)
        }, 400)

        // transition.style.display = 'block';
        transition.play();
    })
})



const html = document.documentElement;
const spotlight = document.querySelector('.spotlight');
const home = document.querySelector('#home');
const about = document.querySelector('#about')
const buffer = document.querySelector('.buffer-section');
const bufferText = buffer.querySelector('p');
const work = document.querySelector('#work');
const body = document.body;


const lenis = new Lenis({
        duration: 2,
        // lerp: 5,
        easing: (t) => (t === 1 ? 10 : 1 - Math.pow(1 - t, 5)),
        direction: "vertical",
        gestureDirection: "vertical",
        smoothWheel: true,
        wheelMultiplier: 2.5,
        smoothTouch: true,
        touchMultiplier: 2.5
    })


// let bufferPosition = buffer.getBoundingClientRect()
// let aboutPosition = about.getBoundingClientRect()
// let workPosition = work.getBoundingClientRect()

let bufferPosition = 3700; //bufferPosition = height(home + about + margin-top buffer)
let scrollPosition = 0;

lenis.on('scroll', (e) => {
    scrollPosition = e.animatedScroll;
    html.style.setProperty('--scrollY', scrollPosition + 'px')
    // html.style.setProperty('--aboutPost', aboutPosition.top + 'px');
    // html.style.setProperty('--bufferPost', bufferPosition.top + 'px')
    // html.style.setProperty('--workPost', workPosition.top + 'px');

    // const height = Math.max(body.scrollHeight, body.offsetHeight,
    //   html.clientHeight, html.scrollHeight, html.offsetHeight);
    // console.log(height)
    // console.log(bufferPosition.top)

    console.log(scrollPosition)
    bufferAction(scrollPosition, bufferPosition)
})

function raf(time) {
    lenis.raf(time)
    //   ScrollTrigger.update()
    requestAnimationFrame(raf)
    requestAnimationFrame(updateStyle);
}

requestAnimationFrame(updateStyle);
requestAnimationFrame(raf)

function bufferAction(scrollPosition, bufferPosition ) {
    function myFunction(x) {
        if (x.matches) { // If media query matches
            // 450 & 1700 is just adjustment of buffer action. try to delete it if you want see the utility
            if (scrollPosition > (bufferPosition + 450) && scrollPosition < (bufferPosition + 1700)) {
                spotlight.classList.add('action');
                // buffer.querySelector('p').style.display = 'block';
                // spotlight.style.background = 'radial-gradient(circle at calc(var(--scrollY) * 1.2 - var(--bufferPost)) 50%, transparent 0.6%, rgba(0, 0, 0, 0.6) 40%)';
                // html.style.setProperty('--scrollY', scrollPosition)
                // html.style.setProperty('--bufferPost', bufferPosition.top)
            } else {
                spotlight.classList.remove('action');
                // spotlight.style.background = 'radial-gradient(circle at var(--x) var(--y), transparent 0.6%, rgba(0, 0, 0, 0.6) 40%)';
                // html.style.setProperty('--scrollY', scrollPosition + 'px')
                // html.style.setProperty('--bufferPost', bufferPosition.top + 'px')
            }


        } else {
            // 450 & 1300 is just adjustment of buffer action. try to delete it if you want see the utility
            if (scrollPosition > (bufferPosition - 450) && scrollPosition < (bufferPosition + 1300)) {
                spotlight.classList.add('action');
                // buffer.querySelector('p').style.display = 'block';
                // spotlight.style.background = 'radial-gradient(circle at calc(var(--scrollY) * 1.2 - var(--bufferPost)) 50%, transparent 0.6%, rgba(0, 0, 0, 0.6) 40%)';
                // html.style.setProperty('--scrollY', scrollPosition)
                // html.style.setProperty('--bufferPost', bufferPosition.top)
            } else {
                spotlight.classList.remove('action');
                // spotlight.style.background = 'radial-gradient(circle at var(--x) var(--y), transparent 0.6%, rgba(0, 0, 0, 0.6) 40%)';
                // html.style.setProperty('--scrollY', scrollPosition + 'px')
                // html.style.setProperty('--bufferPost', bufferPosition.top + 'px')
            }
        }
    }

    var x = window.matchMedia("(max-width: 599px)")

    myFunction(x);

    x.addEventListener("change", function() {
        myFunction(x);
        changeHomeBg(x)
    });

    // console.log((scrollPosition - bufferPosition)/100)
}

// Event listener untuk mendeteksi saat halaman di-reload
window.addEventListener('beforeunload', function() {
    window.scrollTo(0, 0);
});

document.addEventListener('DOMContentLoaded', checkViewPort)
window.addEventListener('resize', checkViewPort)

function checkViewPort() {
    if (windowWidth <= 599) {
        home.style.backgroundImage = 'url(./background/hero-potrait.jpg)'
    } else {
        home.style.backgroundImage = 'url(./background/imgonline-com-ua-CompressToSize-kcFkYjkZG5I.jpg)'
    }
}



let mouseX = 350;
let mouseY = 150;
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
let isMouseMoveScheduled = false;
html.addEventListener('mousemove', function(e) {
    if (!isMouseMoveScheduled) {
        isMouseMoveScheduled = true;

        mouseX = e.clientX;
        mouseY = e.clientY;
        windowWidth = this.clientWidth;
        windowHeight = this.clientHeight;
        
        requestAnimationFrame(updateStyle);
    }
});

function updateStyle() {
    isMouseMoveScheduled = false;
    // console.log(mouseX)
    // console.log(mouseY)
    html.style.setProperty('--x', mouseX + 'px');
    html.style.setProperty('--y', mouseY + 'px');
    // position.style.setProperty('--scrollY', offset + 'px');
    // position.style.setProperty('--scrollYAbout', offset / 1.8 + 1950 + 'px');
    // position.style.setProperty('--scrollTextAbout', offset / 5 - 50 + 'px');
    // position.style.setProperty('--scrollTextSkills', offset / 5 - 300 + 'px');
    html.style.setProperty('--shadowX', (mouseX - 0.5 * windowWidth) /-35 + 'px');
    html.style.setProperty('--shadowY', (mouseY - (0.5 * windowHeight) + (scrollPosition * 0.5)) /-20 + 'px');
}











function validateForm() {

    const name = document.getElementById('name-input').value;
    const email = document.getElementById('email-input').value;

    const alertName = document.getElementById('name-alert');
    const alertEmail = document.getElementById('email-alert');

    let returnValue = true;

    if (name === '') {
        alertName.style.display = 'block';
        returnValue = false;
    } else {
        alertName.style.display = 'none'
    }

    if (email === '') {
        alertEmail.style.display = 'block';
        returnValue = false;
    } else {
        alertEmail.style.display = 'none'
    } 

    return returnValue;
}









































// const wrapper = document.getElementById('smooth-scroll-wrapper');
// const parallax = document.querySelectorAll('.parallax');
//     new Ukiyo(parallax, {
//         scale: 1.1,
//         speed: 10,
//         // wrapperClass: wrapper
//     })






// const scrollWrapper = document.getElementById('smooth-scroll-wrapper');
// const homeBackground = document.querySelector('.home-background');
// const aboutBackground = document.querySelector('.about-background');

// const timeln = gsap.timeline({paused: false});
// const timeln2 = gsap.timeline({paused: false});

// timeln.fromTo(homeBackground, {y: 0}, {y: '300vh', duration: 3, ease: "none"}, 0);
// timeln2.fromTo(aboutBackground, {y: '0vh'}, {y: '600vh', duration: 3, ease: "none"}, 0);

// const scroll_1 = ScrollTrigger.create({
//     animation: timeln,
//     trigger: scrollWrapper,
//     start: 'top top',
//     end: 'bottom center',
//     scrub: true
// })

// const scroll_2 = ScrollTrigger.create({
//     animation: timeln2,
//     trigger: scrollWrapper,
//     start: 'top top',
//     end: 'bottom center',
//     scrub: true
// })


// lenis.on('scroll', ScrollTrigger.update)

// gsap.ticker.add((time)=>{
//   lenis.raf(time * 800)
// })

// gsap.ticker.lagSmoothing(0)