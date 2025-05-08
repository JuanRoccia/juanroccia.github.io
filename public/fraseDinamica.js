const frases = [
    "¿Tu negocio anda más lento que Internet Explorer? Dejá de renegar, che, contactame.", 
    "Con mis soluciones web, tu empresa va como piña. Desde páginas que te dejan pipón hasta automatizaciones que laburan mientras vos tomás mate.",
    "Hacemos códigos que funcionan de una, sin vueltas ni berretines.",
    "Si tu competencia te está pasando el trapo, es hora de ponerse las pilas.",
    "Mandame MP y en dos patadas te armo algo que rompe los ojos.",
    "¡La tecnología al servicio del laburo, papá!.",
    "Acá el que la rompe programando.",
    "Cuando de código se trata, soy el Messi del teclado.",
    "En el mundo del desarrollo, soy el que pone la magia.",
    "Si buscas al crack del código, ya lo encontraste.",
    "Programo con la destreza de un asado bien hecho.",
    "Cuando hablan de código de calidad, hablan de mí.",
    // "En este juego del desarrollo, soy el que mete los goles.",
    "Si el código fuera tango, yo sería Piazzolla.",
    "No necesito café para programar, con mi energía alcanza y sobra.",
    "Si el código fuera asado, el mío sería a la cruz y bien jugoso.",
    "Mientras otros sueñan con el éxito, yo me quedo despierto programando.",
    "No solo escribo código, escribo poesía en JavaScript.",
    "Donde otros ven problemas, yo veo soluciones y las programo.",
    "Soy el Maradona del frontend, el Gardel del backend.",
    // "En la cancha del desarrollo, soy el 10 siempre.",
    "Soy el Messi del frontend, el Dibu del backend.",
    "No solo escribo código, escribo poesía en Python.",
    "Soy Tita Merello en el frontend, y el Bambino Veira en el backend.",
    // "Soy Trezeguet en el frontend, y el Pipo Gorosito en el backend.",
    // "Soy el Charly Garcia del frontend, y el Spinetta del backend.",
    "Soy Tremendo Programador."
];

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
        const fraseCompleta = `${fraseAleatoria} Me apasiona el Desarrollo Web y la Inteligencia Artificial.`;
        const elementoFrase = document.getElementById("frase-dinamica");
        elementoFrase.textContent = fraseCompleta;
    }, 500);
});
