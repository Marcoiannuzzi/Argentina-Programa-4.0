const cambiarColor = () => {
    let cuadrado = document.getElementById("cuadrado");
    let color = document.getElementById("input").value
    cuadrado.style.backgroundColor = color;
}

const fromfunction=()=>{

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let telefonoe = document.getElementById("telefono").value;
    let dni = document.getElementById("dni").value;
    let sexo = document.getElementById("sexo").value;


    let tablaNombre = document.getElementById("tnombre");
    let tablaapellido = document.getElementById("tapellido");
    let tablatelefono = document.getElementById("ttelefono");
    let tabladni = document.getElementById("tdni");
    let tablasexo = document.getElementById("tsexo");

    tablaNombre.innerHTML = nombre;
    tablaapellido.innerHTML = apellido
    tablatelefono.innerHTML = telefonoe;
    tabladni.innerHTML = dni;
    tablasexo.innerHTML = sexo;
}