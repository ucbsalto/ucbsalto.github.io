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

let nextBtnEve = document.getElementById("next-btn-eve");
let prevBtnEve = document.getElementById("prev-btn-eve");

let paragraphsEve = [
    {
        h1: "EVENTOS",
        h4: "EXPLORA LOS DISPONIBLES",
        p: "¡No te pierdas nuestros próximos eventos!",
        img: "imgs/eventos.png"
    },
    {
        h1: "EVENTO",
        h4: "CAMPAMENTO",
        p: "INFO ACA <br><a href='campamento.html'>FORMULARIO</a>",
        img: "imgs/campamento.png"
    },
    {
        h1: "EVENTO",
        h4: "CLUB DE ADOLESCENTES",
        p: "INFO ACA",
        img: "imgs/clubteen.png"
    },
    {
        h1: "EVENTO",
        h4: "CLUB DE NIÑOS",
        p: "INFO ACA",
        img: "imgs/clubpekes.png"
    },
    {
        h1: "EVENTO",
        h4: "RETIRO DE HOMBRES",
        p: "INFO ACA",
        img: "imgs/retirohombres.png"
    },
    {
        h1: "EVENTO",
        h4: "REUNIÓN DE DAMAS",
        p: "INFO ACA",
        img: "imgs/clubdamas.png"
    },
    {
        h1: "EVENTO",
        h4: "REUNIÓN DE MATRIMONIOS",
        p: "INFO ACA",
        img: "imgs/matrimonio.png"
    },
];

let currentIndexEve = 0;

function updateContentEventos() {
    document.querySelector('.hero-text h1').textContent = paragraphsEve[currentIndexEve].h1;
    document.querySelector('.hero-text h4').textContent = paragraphsEve[currentIndexEve].h4;
    document.querySelector('.hero-text p').innerHTML = paragraphsEve[currentIndexEve].p;  // Usar innerHTML para permitir HTML en el texto

    let imageElement = document.querySelector('.hero-img img');
    imageElement.src = paragraphsEve[currentIndexEve].img;
}

nextBtnEve.onclick = function(event) {
    event.preventDefault();
    if (currentIndexEve < paragraphsEve.length - 1) {
        currentIndexEve++;
        updateContentEventos();
    } else {
        alert("¡Llegaste al final!");
    }
};

prevBtnEve.onclick = function(event) {
    event.preventDefault();
    if (currentIndexEve > 0) {
        currentIndexEve--;
        updateContentEventos();
    } else {
        alert("¡No hay nada para este lado!");
    }
};

updateContentEventos();

