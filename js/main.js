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