let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.hero-text',{delay:200, origin:'top'});
sr.reveal('.hero-img',{delay:450, origin:'top'});
sr.reveal('.icons',{delay:500, origin:'left'});
sr.reveal('.scroll-down',{delay:450, origin:'right'});

let nextBtnLid = document.getElementById("next-btn-lideres");
let prevBtnLid = document.getElementById("prev-btn-lideres");
let paragraphsLid = [
    {
        h1: "PASTOR",
        h4: "Felipe Jorquera Pinto",
        img: "imgs/familiapastoral.avif"
    },
    {
        h1: "??",
        h4: "??",
        img: "imgs/inicio.png"
    }
];

let currentIndexLid = 0;

function updateContentLideres() {
    document.querySelector('.hero-text h1').textContent = paragraphsLid[currentIndexLid].h1;
    document.querySelector('.hero-text h4').textContent = paragraphsLid[currentIndexLid].h4;

    let imageElement = document.querySelector('.hero-img img');
    imageElement.src = paragraphsLid[currentIndexLid].img;
}

nextBtnLid.onclick = function(event) {
    event.preventDefault();
    if (currentIndexLid < paragraphsLid.length - 1) {
        currentIndexLid++;
        updateContentLideres();
    } else {
        alert("¡Llegaste al final!");
    }
};

prevBtnLid.onclick = function(event) {
    event.preventDefault();
    if (currentIndexLid > 0) {
        currentIndexLid--;
        updateContentLideres();
    } else {
        alert("¡No hay nada para este lado!");
    }
};

updateContentLideres();
