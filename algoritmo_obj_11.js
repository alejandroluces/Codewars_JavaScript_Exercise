
/* 
Crea un array de objetos que representen libros. Cada objeto debe tener 
propiedades como "título", "autor" y "año de publicación". Luego, utiliza un 
método para encontrar el libro más antiguo en el array y imprimir su título y año 
de publicación en la consola. 

Ejemplo de entrada: 
const books = [ { título: "1984", autor: "George Orwell", año: 1949 }, 
                { título: "Cien años de soledad", autor: "Gabriel García Márquez", año: 1967 }, 
                { título: "El viejo y el mar", autor: "Ernest Hemingway", año: 1952 }, 
                { título: "Matar a un ruiseñor", autor: "Harper Lee", año: 1960 } ] 

Ejemplo de salida: // { título: "Cien años de soledad", autor: "Gabriel García Márquez", año: 1967 }
*/

const books = [ { title: "Nineteen Eighty-Four", autor: "George Orwell", age: 1949 }, 
                { title: "Cien años de soledad", autor: "Gabriel García Márquez", age: 1967 }, 
                { title: "El viejo y el mar", autor: "Ernest Hemingway", age: 1952 }, 
                { title: "Matar a un ruiseñor", autor: "Harper Lee", age: 1960 } 
]


const searchOld =(a,b,c,d) =>{
    // let pru=a.autor
    // let sear= books.filter(books=>books.age)
    if (a.age<b.age&&a.age<c.age&&a.age<d.age ) {return a}
    if (b.age<a.age&&b.age<c.age&&b.age<d.age ) {return b}
    if (c.age<a.age&&c.age<b.age&&c.age<d.age ) {return c}
    if (d.age<a.age&&d.age<b.age&&d.age<c.age ) {return d}


}
    
console.log(searchOld({ title: "Nineteen Eighty-Four", autor: "George Orwell", age: 1969 },
        { title: "Cien años de soledad", autor: "Gabriel García Márquez", age: 1967 },
        { title: "El viejo y el mar", autor: "Ernest Hemingway", age: 1952 },
        { title: "Matar a un ruiseñor", autor: "Harper Lee", age: 1960 }));

     
     
     
        
        

            
        



// console.log(searchOld);

                