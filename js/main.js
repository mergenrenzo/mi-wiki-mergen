// Funcionalidad: Índice automático
const listaIndice = document.querySelector("#indice");
const titulosArticulo = document.querySelectorAll("main h2");

titulosArticulo.forEach((titulo) => {
    const itemLista = document.createElement("li");
    const enlace = document.createElement("a");

    enlace.textContent = titulo.textContent;
    enlace.href = `#${titulo.getAttribute("id")}`;

    itemLista.append(enlace);
    listaIndice.append(itemLista);
});

// Funcionalidad: Modo oscuro
const btnModo = document.querySelector("#btn-modo");

btnModo.addEventListener("click", () => {
    document.body.classList.toggle("oscuro");
    if (document.body.classList.contains("oscuro")) {
        btnModo.textContent = "Modo claro";
    } else {
        btnModo.textContent = "Modo oscuro";
    }
});

// Funcionalidad: Tamaño de texto (Panel de Apariencia)
const mainArticulo = document.querySelector("main");
const botonesTamano = document.querySelectorAll(".btn-tamano");

botonesTamano.forEach((boton) => {
    boton.addEventListener("click", () => {
        const tamanoElegido = boton.getAttribute("data-tamano");
        mainArticulo.classList.remove("pequeno");
        mainArticulo.classList.remove("estandar");
        mainArticulo.classList.remove("grande");
        mainArticulo.classList.add(tamanoElegido);
        botonesTamano.forEach((b) => {
            b.classList.remove("activo");
        });
        boton.classList.add("activo");
    });
});