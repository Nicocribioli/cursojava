/* 
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
} */

let hechizo = 10;
let espada = 15;
let arco = 10;
let vidaJugador = 95;
let vidaJefe = 35;

do{
    let ataqueDeseado = prompt("Te encuentras en la guarida del jefe final con tu hechizo, espada y arco ¿Cual deseas utilizar?");
    if(ataqueDeseado=="hechizo" || ataqueDeseado=="espada" || ataqueDeseado=="arco");


    switch(ataqueDeseado){
        case "hechizo":
            vidaJefe-=hechizo;
            alert("Tu hechizo hizo 10hp de daño.");
            alert("El jefe responde con una bola de fuego.");
            vidaJugador-=30;
            break;

        case "espada":
            vidaJefe-=espada;
            alert("Tu espada hizo 15hp de daño.");
            alert("El jefe responde con una bola de fuego.");
            vidaJugador-=30;
            break;

            case "arco":
                vidaJefe-=arco;
                alert("Tu arco hizo 10hp de daño.");
                alert("El jefe responde con una bola de fuego.");
                vidaJugador-=30;
                break;

        default:
            alert(ataqueDeseado+" No es un ataque disponible")
            break;
}
if((vidaJugador > 0) && (vidaJefe > 0)){
    alert("La batalla continua");
}

}while((vidaJugador > 0) && (vidaJefe > 0));

if(vidaJugador == 0){
    alert("Haz perdido la pelea")

}else{
    alert("¡Haz vencido al jefe final!")
}

