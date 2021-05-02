const reproductor = {
    reproducir: function(id) { //Métodos de propiedad
        console.log(`Reproduciendo Canción con el id ${id}`);
    },
    pausar: function() {
        console.log(`pausando...`)
    },
    borrar: function(id) {
        console.log(`Borrando Canción...${id}`)
    },
    crearPlayList: function(nombre) {
        console.log(`Creando PlayList de ${nombre}`)
    },
    reproducirPlayList: function(nombre) {
        console.log(`Reproduciendo la PlayList ${nombre}`)
    }
}


reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproducir.crearPlayList('Heavy Metal');
reproducir.crearPlayList('Rock 90s');
reproducir.crearPlayList('Heavy Metal');
