    var pantallaCarga = new bootstrap.Modal(
    document.getElementById("pantallaCarga"),
    {}
    );
    let pantallaVacio = document.getElementById("pantallaVacio");
    let pantallaListado = document.getElementById("pantallaListado");
    let pantallaListadoLista = document.getElementById("pantallaListadoLista");
    let pantallaDetalle = document.getElementById("pantallaDetalle");

    let guardar = document.getElementById("pantallaCargaAdd").addEventListener("click", function () {
    let producto = document.getElementById("pantallaCargaProducto").value;
    let icono = document.getElementById("pantallaCargaIcono").value;
    let info = document.getElementById("pantallaCargaInfo").value;
    document.getElementById("pantallaCargaProducto").value = "";
    document.getElementById("pantallaCargaIcono").value = "";
    document.getElementById("pantallaCargaInfo").value = "";
    let modelo = `<li class="list-group-item" data-producto="${producto}" data-icono="${icono}" data-info="${info}"><img src="${icono}" alt="${producto}" class="pantallaListado__icono">${producto}</li>`;
    console.log("ouch" + producto + info + icono + pantallaListadoLista);
    pantallaListadoLista.innerHTML += modelo;
    pantallaCarga.hide();
    pantallaVacio.style.display = "none";
    pantallaListado.style.display = "block";
});

let click = document.getElementById("pantallaListadoLista").addEventListener("click", function (e) {
    document.getElementById("pantallaDetalleProducto").innerHTML = e.target.getAttribute("data-producto");
    document.getElementById("pantallaDetalleIcono").src = e.target.getAttribute("data-icono");
    document.getElementById("pantallaDetalleInfo").innerHTML = e.target.getAttribute("data-info");
    pantallaListado.style.display = "none";
    pantallaDetalle.style.display = "block";
    });

let pantallaDetalleCerrar = document.getElementById("pantallaDetalleCerrar").addEventListener("click", () => {
    pantallaListado.style.display = "block";
    pantallaDetalle.style.display = "none";
});
/*
},
    "window.zoomLevel": 0,
    "editor.formatOnSave": true,
    "emmet.includeLanguages": {
        "javascript": "javascriptreact",
        "vue-html": "html"
    },

    "emmet.syntaxProfiles": {
        "javascript": "jsx",
        "xml": {
            "attr_quotes": "single"
        }
    },
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    }
}
*/