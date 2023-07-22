// 5.))

// Crea un array de objetos que representen películas. Cada objeto debe tener propiedades como "título", "director" y "género". Luego, utiliza un método para crear un nuevo array con solo las películas de un género determinado. 

//Ejemplo de entrada: const movies =[ { título: "El Padrino", director: "Francis Ford Coppola", género: "drama" }, { título: "Star Wars", director: "George Lucas", género: "ciencia ficción" }, { título: "Forrest Gump", director: "Robert Zemeckis", género: "drama" }, { título: "Jurassic Park",director: "Steven Spielberg", género: "aventura" } ] "drama" 

//Ejemplo de salida (género "drama"): // [ // { título: "El Padrino", director: "Francis Ford Coppola", género: "drama" }, // { título: "Forrest Gump", director: "Robert Zemeckis", género: "drama" } // ]


const movies =[ 
    { título: "El Padrino", director: "Francis Ford Coppola", genero: "drama" }, 
    { título: "Star Wars", director: "George Lucas", genero: "ciencia ficción" }, 
    { título: "Forrest Gump", director: "Robert Zemeckis", genero: "drama" }, 
    { título: "Jurassic Park",director: "Steven Spielberg", genero: "aventura" } 
]


const selecMovies =(a) =>{
    return a.filter(gender=>gender.genero==="drama")
}

console.log(selecMovies(movies));
