function showMultiplication() {
    let number = parseInt(document.getElementById("number").value);
    let longOfTable = parseInt(document.getElementById("longOfTable").value);
    let resultsDiv = document.getElementById("results");

    // Limpiar resultados anteriores
    resultsDiv.innerHTML = "";

    // Generar y mostrar la tabla de multiplicación
    for (let i = 1; i <= longOfTable; i++) {
        let result = number * i;
        resultsDiv.innerHTML += number + " * " + i + " = " + result + "<br>";
    }
}

function showRectangle() {
    let width = parseInt(document.getElementById("width").value);
    let height = parseInt(document.getElementById("height").value);
    let character = document.getElementById("character").value;

    let figure = document.getElementById("resultsRectangle");

    // Limpiar el contenido anterior
    figure.innerHTML = "";

    // Generar el rectángulo
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            figure.innerHTML += character;
        }
        figure.innerHTML += "<br>";
    }
}

function showLeapYear() {
    let startedYear = parseInt(document.getElementById("startedYear").value);
    let endYear = parseInt(document.getElementById("endYear").value);
    let LeapYears = document.getElementById("leapsYears");

    let numberOfLeapYears = 0;

    for (let i = startedYear; i <= endYear; i++) {
        if ((i % 4 === 0 && i % 100 !== 0) || (i % 400 === 0)) {
            numberOfLeapYears++;
        }
    }

    LeapYears.innerHTML = numberOfLeapYears;
}

// Funciones para el ingreso de números
let cantidadNumeros = 0;
let numerosIngresados = [];
let sumatoria = 0;

function comenzarIngreso() {
    cantidadNumeros = obtenerCantidadNumeros();
    if (cantidadNumeros <= 0) return;

    reiniciarVariables();
    mostrarSeccionIngreso();
}

function obtenerCantidadNumeros() {
    const cantidad = parseInt(document.getElementById('cantidad').value);
    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Por favor, ingrese una cantidad válida de números.");
        return 0;
    }
    return cantidad;
}

function reiniciarVariables() {
    numerosIngresados = [];
    sumatoria = 0;
    document.getElementById('mensaje').textContent = "";
    document.getElementById('numero').value = "";
}

function mostrarSeccionIngreso() {
    document.getElementById('inputNumberSection').style.display = 'block';
}

function ingresarNumero() {
    const numero = obtenerNumero();
    if (numero === null) return;

    if (esDistintoAlAnterior(numero)) {
        procesarNumeroValido(numero);
        if (numerosIngresados.length === cantidadNumeros) {
            mostrarResultadoFinal();
        }
    } else {
        mostrarErrorNumeroRepetido(numero);
    }
}

function obtenerNumero() {
    const numero = parseInt(document.getElementById('numero').value);
    if (isNaN(numero)) {
        alert("Por favor, ingrese un número válido.");
        return null;
    }
    return numero;
}

function esDistintoAlAnterior(numero) {
    if (numerosIngresados.length > 0 && numero === numerosIngresados[numerosIngresados.length - 1]) {
        return false;
    }
    return true;
}

function procesarNumeroValido(numero) {
    numerosIngresados.push(numero);
    sumatoria += numero;
    document.getElementById('mensaje').textContent = "";
    document.getElementById('numero').value = "";
}

function mostrarErrorNumeroRepetido(numero) {
    const ultimoNumero = numerosIngresados[numerosIngresados.length - 1];
    document.getElementById('mensaje').textContent = `¡${numero} no es distinto de ${ultimoNumero}!`;
}

function mostrarResultadoFinal() {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <p>Gracias por su colaboración.</p>
        <p>La sumatoria de todos los números es: ${sumatoria}</p>
    `;
    ocultarSeccionIngreso();
}

function ocultarSeccionIngreso() {
    document.getElementById('inputNumberSection').style.display = 'none';
}

// Validar si una cadena es un correo electrónico
function esCorreoElectronico(cadena) {
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexCorreo.test(cadena);
}

function validarCorreo() {
    const email = document.getElementById("email").value;
    const resultadoCorreo = document.getElementById("resultadoCorreo");

    if (esCorreoElectronico(email)) {
        resultadoCorreo.textContent = "Es un correo electrónico válido.";
    } else {
        resultadoCorreo.textContent = "No es un correo electrónico válido.";
    }
}

// Procesar múltiples cadenas
let cantidadCadenas = 0;
let cadenasIngresadas = [];
let sumatoriaLongitudes = 0;

function iniciarProcesoCadenas() {
    cantidadCadenas = parseInt(document.getElementById("cantidadCadenas").value);
    if (isNaN(cantidadCadenas) || cantidadCadenas <= 0) {
        alert("Por favor, ingrese una cantidad válida.");
        return;
    }

    reiniciarCadenas();
    mostrarSeccionCadenas();
}

function reiniciarCadenas() {
    cadenasIngresadas = [];
    sumatoriaLongitudes = 0;
    document.getElementById("mensajeCadenas").textContent = "";
    document.getElementById("cadena").value = "";
}

function mostrarSeccionCadenas() {
    document.getElementById("inputCadenasSection").style.display = "block";
}

function agregarCadena() {
    const cadena = document.getElementById("cadena").value;
    if (!cadena) {
        alert("Por favor, ingrese una cadena válida.");
        return;
    }

    cadenasIngresadas.push(cadena);
    sumatoriaLongitudes += cadena.length;
    document.getElementById("mensajeCadenas").textContent = `Cadena ${cadenasIngresadas.length} ingresada con éxito.`;

    // Si ya se ingresaron todas las cadenas
    if (cadenasIngresadas.length === cantidadCadenas) {
        mostrarResultadoCadenas();
    }

    // Limpiar el input de la cadena
    document.getElementById("cadena").value = "";
}

function mostrarResultadoCadenas() {
    const resultadoDiv = document.getElementById("resultadoCadenas");
    resultadoDiv.innerHTML = "<h3>Resultado:</h3>";

    // Mostrar longitudes de cada cadena
    cadenasIngresadas.forEach((cadena, index) => {
        resultadoDiv.innerHTML += `<p>Cadena ${index + 1}: "${cadena}" tiene ${cadena.length} caracteres</p>`;
    });

    // Mostrar la sumatoria total
    resultadoDiv.innerHTML += `<p><strong>Sumatoria total de las longitudes: ${sumatoriaLongitudes}</strong></p>`;

    // Ocultar la sección de ingreso de cadenas
    document.getElementById("inputCadenasSection").style.display = "none";
}

