function tiempoPasadoHastaHoy(timestamp) {
    // Convierte el timestamp en milisegundos multiplicando por 1000
    const fechaPublicacion = new Date(timestamp * 1000);
    const fechaActual = new Date();

    // Calcula la diferencia en milisegundos
    const diferenciaEnMilisegundos = fechaActual - fechaPublicacion;

    // Convierte la diferencia en milisegundos a un objeto de duración (días, horas, minutos, segundos)
    const duracion = new Date(diferenciaEnMilisegundos);

    // Obtén los componentes de tiempo individuales
    const años = duracion.getUTCFullYear() - 1970; // Resta 1970 ya que es el año de referencia Unix
    const meses = duracion.getUTCMonth();
    const días = duracion.getUTCDate() - 1; // Resta 1 porque la fecha de referencia Unix es 1 de enero de 1970
    const horas = duracion.getUTCHours();
    const minutos = duracion.getUTCMinutes();
    const segundos = duracion.getUTCSeconds();

    return {
        años,
        meses,
        días,
        horas,
        minutos,
        segundos
    };
}

// Ejemplo de uso:
const timestampUnix = 1695855707.0; // Reemplaza con el timestamp Unix que desees
const resultado = tiempoPasadoHastaHoy(timestampUnix);
console.log(resultado);