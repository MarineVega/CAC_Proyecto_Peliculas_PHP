function resetMesajesError(){
    // levanto todos los elementos que tengan la clase mensaje-error
    let errorElementos = document.querySelectorAll(".mensaje-error");
    errorElementos.forEach(function(elemento) {
        elemento.innerText = " ";
    });
}

function mostrarMensajeError(elementId, mensaje) {
    let errorElemento = document.getElementById(elementId);
    errorElemento.innerText = mensaje;
}
    

document.addEventListener("DOMContentLoaded", ()=>{
    const form = document.getElementById("loginForm");
    console.log(form);
    form.addEventListener("submit", (event)=>{
        // Evito que se envíe el formulario automáticamente
        event.preventDefault();

        // Reseteo los mensajes de error
        resetMesajesError();

        // Valido los campos
        let email = document.getElementById("email").value.trim();  //trim elimina espacios
        let contrasenia = document.getElementById("contrasenia").value.trim();
        let esValido = true;

      //  if (!esValidoEmail(email)) {
        if (email === "") {
            mostrarMensajeError("emailError", "Por favor ingrese un correo electrónico válido.");
            esValido = false;
        }

        if (contrasenia.length > 8) {
            mostrarMensajeError("contraseniaError", "La contraseña debe tener al menos 8 caracteres.");
            esValido = false;
        }

        if (esValido) {
            alert("¡Formulario enviado correctamente!");
        }
    });
} );



