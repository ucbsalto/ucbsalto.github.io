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

let nextBtnLog = document.getElementById("next-btn-log");
let prevBtnLog = document.getElementById("prev-btn-log");
let paragraphsLog = [
    {
        h1: "NARANJA 1",
        h4: "Naranja en agua",
        img: "imgs/logosnuevos/logon1.2.png"
    },
    {
        h1: "NARANJA 1.2",
        h4: "Naranja en agua",
        img: "imgs/logosnuevos/logon1.png"
    },
    {
        h1: "NARANJA 2",
        h4: "Naranja en agua",
        img: "imgs/logosnuevos/logon2.2.png"
    },
    {
        h1: "NARANJA 2.2",
        h4: "Naranja en agua",
        img: "imgs/logosnuevos/logon2.png"
    },
    {
        h1: "SALTO 3",
        h4: "Linea de escudo de salto",
        img: "imgs/logosnuevos/logon3.2.png"
    },
    {
        h1: "SALTO 3.2",
        h4: "Linea de escudo de salto",
        img: "imgs/logosnuevos/logon3.png"
    },
    {
        h1: "REPRESA 4",
        h4: "Represa de salto",
        img: "imgs/logosnuevos/logon4.2.png"
    },
    {
        h1: "REPRESA 4.2",
        h4: "Represa de salto",
        img: "imgs/logosnuevos/logon4.png"
    }
];

let currentIndexLog = 0;

function updateContentLogeres() {
    document.querySelector('.hero-text h1').textContent = paragraphsLog[currentIndexLog].h1;
    document.querySelector('.hero-text h4').textContent = paragraphsLog[currentIndexLog].h4;

    let imageElement = document.querySelector('.hero-img img');
    imageElement.src = paragraphsLog[currentIndexLog].img;
}

nextBtnLog.onclick = function(event) {
    event.preventDefault();
    if (currentIndexLog < paragraphsLog.length - 1) {
        currentIndexLog++;
        updateContentLogeres();
    } else {
        alert("¡Llegaste al final!");
    }
};

prevBtnLog.onclick = function(event) {
    event.preventDefault();
    if (currentIndexLog > 0) {
        currentIndexLog--;
        updateContentLogeres();
    } else {
        alert("¡No hay nada para este lado!");
    }
};

updateContentLogeres();
