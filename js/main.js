function myFunction(){
    alert('La imagen de perfil no se ha podido cargar. Intente actualizar.');
}

document.getElementById('botonDescargar').addEventListener('click',function(){
    document.getElementById('botonDescargar').innerHTML = "Descargado!";
});

document.getElementById('botonEnviar').addEventListener('click',function(){
    document.getElementById('botonEnviar').innerHTML = "Enviado!";
});



