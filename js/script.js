class Personaje{

    constructor(nombre, vida){
        this.nombre = nombre;
        this.vida = vida;
    }

}

class Ataque {

    constructor(nombre, daño, durabilidad){
        this.nombre = nombre;
        this.daño = daño;
        this.durabilidad = durabilidad;
    }

    desgaste(){
        if(this.durabilidad == 0){
            alert(personaje1.nombre+ " usaste tu ultimo "+ this.nombre);
        }
    }

}

const personaje1=new Personaje(prompt("Ingresa el nombre de tu personaje"), 150);
const personaje2=new Personaje("Jefe final", 400);
const hechizo=new Ataque("hechizo", 120, 2);
const espada=new Ataque("espada", 150, 1);
const arco=new Ataque("arco", 110, 3);


do{
    let ataqueDeseado = prompt(personaje1.nombre+ " te encuentras en la guarida del jefe final con tu hechizo, espada y arco ¿Cual deseas utilizar?").toLowerCase();
    if(ataqueDeseado=="hechizo" || ataqueDeseado=="espada" || ataqueDeseado=="arco");


    switch(ataqueDeseado){
        case "hechizo":
            hechizo.durabilidad-=1;
            hechizo.desgaste();
            if(hechizo.durabilidad < 0){
                alert("Ya no tienes mas hechizos")
                break
            }
            personaje2.vida-=hechizo.daño;
            alert("Tu hechizo hizo 120hp de daño.");
            alert("El jefe responde con una bola de fuego.");
            personaje1.vida-=30;
            break;

        case "espada":
            espada.durabilidad-=1;
            espada.desgaste();
            if(espada.durabilidad < 0){
                alert("Tu espada se rompio")
                break
            }
            personaje2.vida-=espada.daño;
            alert("Tu espada hizo 150hp de daño.");
            alert("El jefe responde con una bola de fuego.");
            personaje1.vida-=30;
            break;

            case "arco":
                arco.durabilidad-=1;
                arco.desgaste();
                if(arco.durabilidad < 0){
                    alert("Te quedaste sin flechas")
                    break
                }
                personaje2.vida-=arco.daño;
                alert("Tu arco hizo 110hp de daño.");
                alert("El jefe responde con una bola de fuego.");
                personaje1.vida-=30;
                break;

        default:
            alert(ataqueDeseado+" No es un ataque disponible")
            break;
}
if((personaje1.vida > 0) && (personaje2.vida > 0)){
    alert("La batalla continua");
}

}while((personaje1.vida > 0) && (personaje2.vida > 0));

if(personaje1.vida == 0){
    alert("Haz perdido la pelea")

}else{
    alert(personaje1.nombre+" ¡Haz vencido al jefe final!")
}



/* function pedirDatos(){
    return parseFloat(prompt("Ingrese las notas del alumno"));
}

function promedio(num1,num2,num3,num4){
    let notaFinal = (num1+num2+num3)/num4;
    return notaFinal;
}


function mostrar(mensaje){
    alert(mensaje);
}

mostrar(promedio(pedirDatos(),pedirDatos(),pedirDatos(),3)); */

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



