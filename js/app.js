$(document).ready(function(){

    $('#contenedorqr').qrcode({
        text    : "https://nubecolectiva.com", // URL a enlazar
        render  : "canvas", // Puedes usar también la opción 'table' 
        background : "#ffffff", // Color de fondo
        foreground : "#000000", // Color de los fragmentos del código QR 
        width : 300, // Ancho
        height: 300 // Alto 
    });
    
}); 