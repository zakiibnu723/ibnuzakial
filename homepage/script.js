let isMouseMoveScheduled = false;

const body = document.body, 
    spotlight = document.querySelector('.spotlight'),
    scrollwrap = document.getElementsByClassName('smooth-scroll-wrapper')[0],
    height = scrollwrap.getBoundingClientRect().height - 1,
    speed = 0.07;

var offset = 0;

body.style.height = Math.floor(height) + 'px';
spotlight.style.height = Math.floor(height) + 'px';

function smoothScroll() {
    offset += (window.scrollY - offset) * speed;

    var scroll = 'translateY(-' + offset + 'px) translateZ(0)';
    scrollwrap.style.transform = scroll;

    // console.log(offset)
    requestAnimationFrame(smoothScroll);
    requestAnimationFrame(updateStyle)

}

requestAnimationFrame(smoothScroll)

const position = document.documentElement;
let mouseX = 0;
let mouseY = 0;
let windowWidth;
let windowHeight;
position.addEventListener('mousemove', function(e) {
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

    position.style.setProperty('--x', mouseX + 'px');
    position.style.setProperty('--y', mouseY + 'px');
    position.style.setProperty('--scrollY', offset + 'px');
    // position.style.setProperty('--scrollYAbout', offset / 1.8 + 1950 + 'px');
    // position.style.setProperty('--scrollTextAbout', offset / 5 - 50 + 'px');
    // position.style.setProperty('--scrollTextSkills', offset / 5 - 300 + 'px');
    position.style.setProperty('--shadowX', (mouseX - 0.5 * windowWidth) /-35 + 'px');
    position.style.setProperty('--shadowY', (mouseY - (0.5 * windowHeight) + offset) /-25 + 'px');
}
