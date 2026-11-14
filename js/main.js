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

// Funcionalidad: Secciones plegables

titulosArticulo.forEach((titulo) => {
    const textoOriginal = titulo.textContent;
    titulo.textContent = `${textoOriginal} ▾`;

    titulo.addEventListener("click", () => {
        const seccion = titulo.parentElement;
        seccion.classList.toggle("plegada");

        if (seccion.classList.contains("plegada")) {
            titulo.textContent = `${textoOriginal} ▸`;
        } else {
            titulo.textContent = `${textoOriginal} ▾`;
        }
    });
});

// Funcionalidad: Sección de Discusión(Contador, Validación y Gestión de Comentarios)
const campoComentario = document.querySelector("#comentario");
const parrafoContador = document.querySelector("#contador");
const formComentario = document.querySelector("#form-comentario");
const campoNombre = document.querySelector("#nombre");
const parrafoAviso = document.querySelector("#aviso");
const listaComentarios = document.querySelector("#lista-comentarios");
const MAXIMO = 200;
const MINIMO = 10;

campoComentario.addEventListener("input", () => {
    const cantidadActual = campoComentario.value.length;
    parrafoContador.textContent = `Caracteres: ${cantidadActual} / ${MAXIMO}`;
});

formComentario.addEventListener("submit", (e) => {

    e.preventDefault();

    parrafoAviso.textContent = "";
    campoNombre.classList.remove("error");
    campoComentario.classList.remove("error");
    const nombreLimpio = campoNombre.value.trim();
    if (nombreLimpio === "") {
        parrafoAviso.textContent = "Por favor, ingresá un nombre válido.";
        campoNombre.classList.add("error");
        campoNombre.focus();
        return;
    }

    const comentarioLimpio = campoComentario.value.trim();
    const largoComentario = comentarioLimpio.length;

    if (largoComentario < MINIMO || largoComentario > MAXIMO) {
        parrafoAviso.textContent = `El comentario debe tener entre ${MINIMO} y ${MAXIMO} caracteres.`;
        campoComentario.classList.add("error");
        campoComentario.focus();
        return;
    }

    const itemLista = document.createElement("li");
    const spanNombre = document.createElement("strong");
    const spanTexto = document.createElement("p");
    const botonBorrar = document.createElement("button");

    spanNombre.textContent = nombreLimpio;
    spanTexto.textContent = comentarioLimpio;
    botonBorrar.textContent = "Borrar";
    botonBorrar.classList.add("btn-borrar");
    itemLista.append(spanNombre);
    itemLista.append(spanTexto);
    itemLista.append(botonBorrar);
    listaComentarios.append(itemLista);
    formComentario.reset();
    parrafoContador.textContent = `Caracteres: 0 / ${MAXIMO}`;
});

listaComentarios.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-borrar")) {
        const itemAEliminar = e.target.parentElement;
        itemAEliminar.remove();
    }
});