let mob = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ? true : false;




function scrollTo(element, to, duration) {
    let start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;

    let animateScroll = function () {
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if (currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };
    animateScroll();
}

Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
};



const back_btn = document.querySelector('.back_btn');

back_btn.addEventListener('click', function(){
    scrollTo(document.documentElement, 0, 1300);
})




const body = document.querySelector('body');
const root = document.querySelector(':root');
const mode_btn = document.querySelector('.mode_btn');



function pageMode() {
    if (sessionStorage.getItem('dark_mode') == 'true') {
        root.classList.add('dark_mode');
    } else {
        root.classList.remove('dark_mode');
    }
}

mode_btn.addEventListener('click', () =>{
    if (sessionStorage.getItem('dark_mode') == 'true') {
        sessionStorage.setItem('dark_mode', 'false')
    } else {
        sessionStorage.setItem('dark_mode', 'true')
    }
    pageMode()
})



window.addEventListener('load', function(){
    body.classList.add('show_page');
    pageMode();

    if(mob) {
        body.classList.add('mob')
    }
})


const container = document.querySelector('.container')

window.addEventListener('resize', videoResize);

videoResize()

function videoResize() {
    if(document.documentElement.clientWidth / document.documentElement.clientHeight <= 1.897) {
        container.classList.add('video_size');
    } else {
        container.classList.remove('video_size');
    }
}
