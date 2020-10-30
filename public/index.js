cargarSelects();

function cargarSelects() {
    fetch("/almacen")
        .then(function (res) {
            return res.json();
        })
        .then(function (datos) {
            selectTipo.innerHTML = `<option>Elije un tipo...</option>`;

            let opcionTipo = `<option value="armarios">Armarios</option>
                            <option>${datos.mesas}</option>
                            <option>${datos.sillas}</option>`
            selectTipo.innerHTML = opcionTipo;
        }
        )
};
