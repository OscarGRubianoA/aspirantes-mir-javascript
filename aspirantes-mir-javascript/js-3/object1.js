let pedro={
    nombre:'Pedro Perez',
    edad:30,
    activo:true,
    hobbies:['programar','squash','piano'],
    estatura:1.8,
    saluda(){
        return 'hola me llamo '+this.nombre
    }
}
console.log(edad)
pedro.estatura=1.8
delete pedro.activo
console.log(pedro)
pedro.saluda()
