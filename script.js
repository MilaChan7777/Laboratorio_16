document.addEventListener('DOMContentLoaded', () => {
    const cancionesLista = document.getElementById('canciones-lista');

    async function obtenerDatosDesdeAPI() {
        try {
            const respuesta = await fetch('https://itunes.apple.com/search?term=music&media=music');
            const datos = await respuesta.json();

            construirInterfaz(datos.results);
        } catch (error) {
            console.error('Error al obtener datos desde la API:', error);
        }
    }

    function construirInterfaz(datos) {
        cancionesLista.innerHTML = '';

        datos.forEach(cancion => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <h3>${cancion.trackName}</h3>
                <p>Artista: ${cancion.artistName}</p>
                <p>Álbum: ${cancion.collectionName}</p>
                <img src="${cancion.artworkUrl100}" alt="${cancion.trackName}">
            `;
            card.addEventListener('click', () => mostrarDetalles(cancion.trackId));
            cancionesLista.appendChild(card);
        });
    }

    function mostrarDetalles(idCancion) {
        console.log(`Mostrar detalles de la canción con ID ${idCancion}`);
    }

    obtenerDatosDesdeAPI();
});
