// document.getElementById('titulo').innerText = 'hola'
// document.getElementById('parrafo1').innerHTML = 'hola'


const parrafo1 = document.getElementById('parrafo1');
const boton = document.getElementById("boton")
boton.addEventListener("click", () =>{
    alert("apretaste el boton")
})
console.log(boton);
parrafo1.firstChild.data = 'hello';
// console.log(parrafo1);

const usuarios = [
    {id:1, nombre: "juan"},
    {id:2, nombre: "ana"},
    {id:3, nombre: "pedro"}]

let buscarNombrePorUsuario = nombre => {
    return usuarios.find(usuarios =>{
        return usuarios.nombre === nombre
    })
}

console.log(buscarNombrePorUsuario("pedro"));