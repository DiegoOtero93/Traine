document.addEventListener("DOMContentLoaded", function() {
    const hoverImage = document.getElementById("hover-image");
    let originalBackground = document.body.style.backgroundImage;

    function changeBackground(imageUrl) {
        document.body.style.backgroundImage = `url(${imageUrl})`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundPosition = 'center';
    }

    function restoreBackground() {
        document.body.style.backgroundImage = originalBackground;
    }

    document.getElementById("text1").addEventListener("mouseenter", function() {
        changeBackground("./media/bunny.jpg");
    });
    document.getElementById("text1").addEventListener("mouseleave", function() {
        restoreBackground();
    });

    document.getElementById("text2").addEventListener("mouseenter", function() {
        changeBackground('"./media/coche1.jpg"');
    });
    document.getElementById("text2").addEventListener("mouseleave", function() {
        restoreBackground();
    });

    document.getElementById("text3").addEventListener("mouseenter", function() {
        changeBackground('./media/futbol.jpg');
    });
    document.getElementById("text3").addEventListener("mouseleave", function() {
        restoreBackground();
    });

    document.getElementById("text4").addEventListener("mouseenter", function() {
        changeBackground("./media/cerveza.jpg");
    });
    document.getElementById("text4").addEventListener("mouseleave", function() {
        restoreBackground();
    });

    document.getElementById("text5").addEventListener("mouseenter", function() {
        changeBackground("./media/beisbol.jpg");
    });
    document.getElementById("text5").addEventListener("mouseleave", function() {
        restoreBackground();
    });
});





// function handleEvents() {
//     const textElements = document.querySelectorAll(".text"); // Seleccionamos elementos con la clase .text

//     textElements.forEach((text) => {
//         const imageUrl = obtenerImageUrl(text.textContent.trim()); // Obtener la URL de la imagen correspondiente al texto del elemento y con trim nos aseguramos  que no queden espacios en blanco
//         //en la cadena de nuestro texto
//         text.addEventListener("mouseenter", () => aparecefondo(imageUrl));
//         text.addEventListener("mouseleave", desaparecefondo);
//     });
// }

// function obtenerImageUrl(texto) {
//     switch(texto) {// 
//         case "bunyy hop wheelie":
//             return "/img/bunny.jpg"; //cada case representa un valor representa al texto del elemento .text
//         case "Cars":
//             return "/img/coche1.jpg";
//         case "Futbol":
//             return "/img/futbol.jpg";
//         case "Baseball":
//             return "/img/beisbol.jpg";
//         case "Alhambra":
//             return "/img/cerveza.jpg";
//         default:
//             return null; // Si no hay una URL de imagen correspondiente, devolvemos null
//     }
// }

// function aparecefondo(imageUrl) {
//     document.body.style.backgroundImage = `url(${imageUrl})`;
//     document.body.style.backgroundSize = 'cover';
//     document.body.style.backgroundRepeat = 'no-repeat';
//     document.body.style.backgroundPosition = 'center';
// }

// function desaparecefondo() {
//     document.body.style.backgroundImage = 'none';
// }

// window.onload = handleEvents;
