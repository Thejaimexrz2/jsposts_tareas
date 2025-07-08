const lista = document.querySelector(".lista");
const texto = document.querySelector("#txt");
const boton_agregar = document.querySelector("#crear");
const botones_eliminar = document.getElementsByClassName("eliminar");
let counter = 1;

boton_agregar.addEventListener("click", function () {
    var newPost = `
    <div class="publicacion">
        <p>${counter++}</p>
        <p>${texto.value}</p>
        <button class="eliminar">Eliminar</button>
    </div>
    `;

    lista.innerHTML += newPost;
});

const observer = new MutationObserver((mutaciones) => {
    mutaciones.forEach((mutacion) => {
        mutacion.addedNodes.forEach((nodo) => {
            if (nodo.nodeType === 1) {
                console.log("Elemento agregado!", nodo);
                const boton_eliminar = nodo.querySelector(".eliminar");
                boton_eliminar.addEventListener("click", function () {
                    nodo.remove()
                })
            }
        })
    })
});

observer.observe(lista, {
    childList: true,
    subtree: false
}
);


for (let boton of botones_eliminar) {
    boton.addEventListener("click", function () {
        boton.parentElement.remove()
    })
}