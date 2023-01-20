const btn = document.querySelector('#btn');
const imgs = document.querySelectorAll('.imgs');

const btn_logo = document.querySelector('#btn_logo');
const svgs = document.querySelectorAll('.svgs');

const NB_IMAGES = 12;
const BASE_CLK = 2;
let try_click = BASE_CLK;

btn.innerHTML = `Changer le fond - ${try_click-1}/${NB_IMAGES-1}`;

btn.addEventListener('click', function() {
    if(try_click === NB_IMAGES) {
        try_click = BASE_CLK
    } else {
        try_click++
    }

    btn.innerHTML = `Changer le fond - ${try_click-1}/${NB_IMAGES-1}`;

    imgs.forEach(img => {
        img.classList.add('none');
    });

    const the_img = document.querySelector(`#img${try_click}`);

    if(try_click === 5 || try_click === 11) {

        svgs.forEach(svg => {
            svg.classList.add('svg_black');
        })
    } else {
        svgs.forEach(svg => {
            svg.classList.remove('svg_black');
        })
    }

    the_img.classList.remove('none');
});


const NB_LOGO = 3;
const BASE_CLK_2 = 1;
let change_logo = BASE_CLK_2;

btn_logo.innerHTML = `Changer le fond - ${change_logo}/${NB_LOGO}`;

btn_logo.addEventListener('click', function() {
    if(change_logo === NB_LOGO) {
        change_logo = BASE_CLK_2
    } else {
        change_logo++
    }

    btn_logo.innerHTML = `Changer le fond - ${change_logo}/${NB_LOGO}`;

    const the_svg = document.querySelector(`#svg${change_logo}`);

    svgs.forEach(svg => {
        svg.classList.add('none');
    });

    the_svg.classList.remove('none');
})










