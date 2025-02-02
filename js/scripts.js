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

let nextBtnNosotros = document.getElementById("next-btn-nosotros");
let prevBtnNosotros = document.getElementById("prev-btn-nosotros");
let paragraphsNos = [
    {
        h1: "¿QUIÉNES SOMOS?",
        h4: "NUESTRA MISIÓN",
        p: "Comunicar a nuestra comunidad el mensaje de Jesucristo, su gracia, su justicia y su amor, mediante el compartir y enseñar acerca de nuestra única autoridad: la Biblia."
    },
    {
        h1: "¿QUIÉNES SOMOS?",
        h4: "NUESTRA VISIÓN",
        p: "Alcanzar a más personas con el mensaje del evangelio, desarrollar y capacitar a cada miembro de nuestra comunidad con la Palabra de Dios, logrando vidas transformadas y maduras, alcanzando a la familia, que es la base de nuestra sociedad, en un ambiente fraternal. Buscamos tener un conocimiento profundo de la persona de Dios, su Palabra y su plan para la humanidad."
    },
    {
        h1: "¿QUÉ CREEMOS?",
        p: "Amor, Justicia, Unidad, y Solidaridad.  en la importancia de vivir como Cristo nos enseñó, buscando el bienestar de los demás."
    },
    {
        h1: "¿QUÉ CREEMOS?",
        h4: "Creemos",
        p: "que las Escrituras del Antiguo y Nuevo Testamento son la verdadera Palabra de Dios, inspiradas plenaria y verbalmente por Él, sin error. Son la suprema y final autoridad en todo asunto de vida y fe."
    },
    {
        h1: "¿QUÉ CREEMOS?",
        h4: "Creemos",
        p: "que hay un solo Dios, que existe eternamente en tres personas: el Padre, el Hijo y el Espíritu Santo. Cada una de estas tres personas posee la misma naturaleza, atributos y perfecciones de la Deidad."
    },
    {
        h1: "¿QUÉ CREEMOS?",
        h4: "Creemos",
        p: "que el Señor Jesucristo es la encarnación de Dios el Hijo. Fue engendrado por el Espíritu Santo en el vientre de María; Él es verdadero Dios y verdadero hombre, sin pecado ni mancha."
    },
    {
        h1: "¿QUÉ CREEMOS?",
        h4: "Creemos",
        p: "que la muerte de Cristo en el Calvario fue un sacrificio sustitutivo y expiatorio. Al derramar su sangre, resucitar corporalmente y ascender a los cielos, provee la base suficiente para la salvación de todos los que, a través del arrepentimiento, crean en Él. Ahora permanece a la diestra de Dios como intercesor y abogado a favor de todo creyente."
    },
    {
        h1: "¿QUÉ CREEMOS?",
        h4: "Creemos",
        p: "en la deidad y personalidad del Espíritu Santo. Él convence al hombre de pecado y, de una vez para siempre, regenera a cada creyente, lo bautiza en el cuerpo de Cristo, lo sella y lo habita permanentemente. El Espíritu Santo capacita para vivir para el Señor y servirle si permanecemos en sumisión y dependencia total de Él. Creemos que algunos de los dones del Espíritu Santo, como lenguas y sanidades milagrosas, no están vigentes."
    },
    {
        h1: "¿QUÉ CREEMOS?",
        h4: "Creemos",
        p: "que cada persona que está en Cristo ya está santificada, es decir, apartada para Dios, en cuanto a su posición ante Él. Dios ha hecho provisión, mediante la obra de Cristo y el ministerio del Espíritu Santo, para que el creyente pueda vencer el pecado y crecer en santidad. La santificación del creyente no será completa hasta el día de la redención final."
    },
    {
        h1: "¿QUÉ CREEMOS?",
        h4: "Creemos",
        p: "que el hombre fue creado directamente por Dios a su imagen y semejanza. Habiendo pecado voluntariamente, quedó bajo el castigo de la muerte física y espiritual, separado de Dios. Todo ser humano nace con una naturaleza pecaminosa y es responsable de sus pensamientos, palabras y hechos."
    },
    {
        h1: "¿QUÉ CREEMOS?",
        h4: "Creemos",
        p: "que cada persona que se convierte al Señor Jesucristo, por medio de la fe que trae arrepentimiento, aparte de cualquier obra humana, es justificada ante Dios con base en la obra de Cristo. Es nacido de nuevo y se convierte en hijo de Dios, creado para buenas obras. Todos los redimidos son guardados eternamente por el poder de Dios."
    },
    {
        h1: "¿QUÉ CREEMOS?",
        h4: "Creemos",
        p: "que Dios eligió a Israel como su pueblo; sin embargo, en este tiempo está formando un pueblo principalmente gentil llamado la iglesia. La iglesia universal, y su manifestación visible en la iglesia local, se inició el día de Pentecostés y refleja el propósito especial de Dios en esta era. Cristo ha instituido dos ordenanzas para la iglesia: el bautismo por inmersión en agua y la cena del Señor."
    },
    {
        h1: "¿QUÉ CREEMOS?",
        h4: "Creemos",
        p: "que el Señor vendrá por segunda vez, personal y corporalmente. Vendrá en las nubes para arrebatar a su Iglesia antes de la Tribulación, y después vendrá nuevamente a la tierra en poder y gran gloria para establecer su reino de mil años."
    },
    {
        h1: "¿QUÉ CREEMOS?",
        h4: "Creemos",
        p: "en la resurrección de los muertos, justos e injustos. Los primeros resucitarán para bendición eterna en los cielos y los otros para condenación eterna en el lago de fuego. Los muertos en Cristo parten de inmediato a la presencia del Señor, y sus cuerpos serán resucitados en el día de la resurrección."
    },
    {
        h1: "¿QUÉ CREEMOS?",
        h4: "Creemos",
        p: "en la existencia de los ángeles como espíritus con personalidad que se encuentran divididos en dos grupos: los ángeles de Dios y los ángeles caídos. Los ángeles de Dios le sirven en el cumplimiento de sus propósitos. Los ángeles caídos, llamados también demonios, junto a Satanás, se oponen a Dios. Estos fueron vencidos por Jesucristo en la cruz y serán arrojados al lago de fuego."
    }
];

let currentIndexNos = 0;
function updateContentNosotros() {
    document.querySelector('.hero-text h1').textContent = paragraphsNos[currentIndexNos].h1;
    document.querySelector('.hero-text h4').textContent = paragraphsNos[currentIndexNos].h4;
    document.querySelector('.hero-text p').textContent = paragraphsNos[currentIndexNos].p;
}
nextBtnNosotros.onclick = function(event) {
    event.preventDefault();
    if (currentIndexNos < paragraphsNos.length - 1) {
        currentIndexNos++;
        updateContentNosotros();
    } else {
        alert("¡Llegaste al final!");
    }
};
prevBtnNosotros.onclick = function(event) {
    event.preventDefault();
    if (currentIndexNos > 0) {
        currentIndexNos--;
        updateContentNosotros();
    } else {
        alert("¡No hay nada para este lado!");
    }
};

updateContentNosotros();