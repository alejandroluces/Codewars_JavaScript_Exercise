8.

// Crea un array de objetos que representen canciones. Cada objeto debe tener propiedades como "título", "artista" y "duración". Luego, utiliza un método para ordenar las canciones por duración, de la más corta a la más larga. 

// Ejemplo de entrada: const songs = [ { título: "Bohemian Rhapsody", artista: "Queen", duración: 6.07 }, { título: "Stairway to Heaven", artista: "Led Zeppelin", duración: 8.02 }, { título: "Hotel California", artista: "The Eagles", duración: 6.30 }, { título: "Sweet Child O' Mine", artista: "Guns N' Roses", duración: 5.55 } ] 

// Ejemplo de salida: // [ // { título: "Sweet Child O' Mine", artista: "Guns N' Roses", duración: 5.55 }, // { título: "Bohemian Rhapsody", artista: "Queen", duración: 6.07 }, // { título: "Hotel California", artista: "The Eagles", duración: 6.30 }, // { título: "Stairway to Heaven", artista: "Led Zeppelin", duración: 8.02 } // ]


const songs = [ 
    { título: "Bohemian Rhapsody", artista: "Queen", duracion: 6.07 }, 
    { título: "Stairway to Heaven", artista: "Led Zeppelin", duracion: 8.02 }, 
    { título: "Hotel California", artista: "The Eagles", duracion: 6.30 }, 
    { título: "Sweet Child O' Mine", artista: "Guns N' Roses", duracion: 5.55 } 

]

const orderDurSongs =(time) =>{

    return time.sort((a,b)=>a.duracion>b.duracion?1:-1)


}

console.log(orderDurSongs(songs));
