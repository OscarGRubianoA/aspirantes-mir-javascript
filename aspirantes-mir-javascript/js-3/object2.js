let persona={
nombre:"fabio",
edad:45,
ciudad:"Bogota",
profesion:"Medico"
}
console.log(persona)
function presentacion(persona){
return ("Buenas mi nombre es"+persona.nombre+",mi edad es"+persona.edad+",y la ciudad donde vivo es"+persona.ciudad)
}
let mensaje=presentacion(persona)
console.log(mensaje)
persona.hobbies=["leer","bailar","correr","shooping"]
console.log(persona.hobbies)
for(let i=0;i<persona.hobbies.length;i++){
    console.log(persona.hobbies[i])
}