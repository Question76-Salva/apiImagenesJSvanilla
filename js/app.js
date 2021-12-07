    //* ============================================
    //* === consumir api imagenes | lorem picsum ===
    //* ============================================

// consumir api imagenes, lo que nos devuelva lo renderizamos en un html | https://picsum.photos/200/300

// === url de la api ===
const url = "https://picsum.photos/200/300";

// === seleccionar elementos ===
let contenedor = document.querySelector('.imagenes');

window.addEventListener('load', () => {

    // === identificando carga completa de la web | una vez que carge la página haz lo demás ===

    // === id | para que no se repitan imagenes | contador ===
    let api = 0;

    // === itera y crea | 200 -> número imagenes ===
    for(let i = 0; i < 200; i++) {
        let img = document.createElement('img');
        img.src = `https://picsum.photos/300/300?=${api++}`;
        contenedor.appendChild(img);
    }    
})