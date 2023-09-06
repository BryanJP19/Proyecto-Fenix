 // Manejo del evento de envío del formulario
 document.getElementById('citaForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar la recarga de la página

    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const fechaHora = document.getElementById('fechaHora').value;

    // Aquí puedes agregar la lógica para guardar la cita en tu sistema o mostrar un mensaje de confirmación
    console.log('Nombre:', nombre);
    console.log('Fecha y Hora:', fechaHora);

    // Limpia el formulario después de enviar
    document.getElementById('citaForm').reset();
});