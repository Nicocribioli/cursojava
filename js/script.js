let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");
alert ("Bienvenido "+nombre+" "+apellido);
let preferencia = prompt("¿Usted prefiere guitarra o bajo?");

if ((preferencia == "guitarra")||(preferencia == "Guitarra")){
    alert ("¡Podes ser un gran guitarrista!")
} else if ((preferencia == "bajo")||(preferencia == "Bajo")){
    alert("¡Podes ser un gran bajista!")
}else{
    alert("No ingresaste una opcion correcta")
}

let edad = parseInt(prompt("Ingrese su edad"))

if (edad < 18){
    alert("Sos joven "+nombre+" tenes tiempo para aprender a tocar "+preferencia)
}else if (edad > 18){
    alert("Nunca es tarde para apreder a tocar "+preferencia+" "+nombre)
}