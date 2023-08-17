// Quierro argeregar propiedades a los nombres del siguiente arreglo. Quiero que cada nombre contenha apellido y edad. Devolverlo en un objeto nuevo.

const names = [
    { name: "Juan", lastname: "Perez" },
    { name: "Ana", lastname: "Fernandez" },
    { name: "Pedro", lastname: "Marti" },
    { name: "Pablo", lastname: "Picasso" },
    { name: "Javier", lastname: "Bardem" },
    { name: "Penelope", lastname: "Cruz" },
    { name: "Miguel", lastname: "Bose" },
]

const namesWithAge = names.map((name, index) => {
    return {
        ...name,
        age: index + 20
    }
}
)

console.log(namesWithAge)   
