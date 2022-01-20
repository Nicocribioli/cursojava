class Personaje{

    constructor(nombre, vida){
        this.nombre = nombre;
        this.vida = vida;
    }

}

class Ataque {

    constructor(nombre, daño, durabilidad, precio){
        this.nombre = nombre;
        this.daño = daño;
        this.durabilidad = durabilidad;
        this.precio = precio;
    }

    desgaste(){
        if(this.durabilidad == 0){
            alert(personaje1.nombre+ " usaste tu ultimo "+ this.nombre);
        }
    }

}

class itemsNuevos {

    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

const personaje1=new Personaje(prompt("Ingresa el nombre de tu personaje"), 150);
const personaje2=new Personaje("Dragon", 40);
const personaje3=new Personaje("Troll", 500);
const hechizo=new Ataque("Hechizo", 120, 2, 200);
const espada=new Ataque("Espada", 150, 1, 350);
const arco=new Ataque("Arco", 110, 3, 100);
const pocion=new itemsNuevos("Pocion de vida", 100);


do{
    let ataqueDeseado = prompt(personaje1.nombre+ " te encuentras en la guarida del dragon con tu hechizo, espada y arco ¿Cual deseas utilizar?").toLowerCase();
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
            alert("El dragon responde con una bola de fuego.");
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
            alert("El dragon responde con una bola de fuego.");
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
                alert("El dragon responde con una bola de fuego.");
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
    alert(personaje1.nombre+" ¡Haz vencido al dragon! 1000 monedas de oro se agregaron a tu inventario")
}

const inventario = ["Nombre:",personaje1.nombre,"Vida:",personaje1.vida,"Ataques:",hechizo.nombre,hechizo.durabilidad,espada.nombre,espada.durabilidad,arco.nombre,arco.durabilidad,"Oro"];
const tienda = [pocion.nombre,espada.nombre,arco.nombre,hechizo.nombre];
inventario.push(1000)

alert("Tu iventario:\n"+ inventario.join('\n'));

alert(personaje1.nombre+ " saliendo de la guarida te encuentras con 3 tuneles ¿Por cual quieres ir?")

do {

    let caminoDeseado = (prompt("Derecha\n Medio\n Izquierda")).toLowerCase();
    if (caminoDeseado =="derecha" || caminoDeseado =="medio" || caminoDeseado =="izquierda");

    switch(caminoDeseado){

        case "derecha":
            alert("Observas una gran puerta de madera con una cerradura");
            let accion = prompt("¿Que deseas hacer?\n Abrir\n Regresar").toLowerCase();
            if(accion == "abrir" || accion == "regresar");
            
            switch(accion){
                case "abrir":
                    alert("La puerta se encuentra cerrada");
                    break;

                case "regresar":
                    break;
            }

        case "medio":
            alert("Entras en una cueva donde puedes ver un enorme Troll con una llave colgando de su cuello")
            let accion2 = prompt("¿Que deseas hacer? Atacar\n Regresar").toLowerCase();
            if (accion2 == "atacar" || accion2 == "regresar");

            switch(accion2){

                case "atacar":
                    do {
                        let ataqueDeseado = prompt("¿Que ataque deseas usar? "+inventario.join('\n')).toLowerCase();
                        if(ataqueDeseado=="hechizo" || ataqueDeseado=="espada" || ataqueDeseado=="arco");
                    
                    
                        switch(ataqueDeseado){
                            case "hechizo":
                                hechizo.durabilidad-=1;
                                hechizo.desgaste();
                                if(hechizo.durabilidad < 0){
                                    alert("Ya no tienes mas hechizos")
                                    break
                                }
                                personaje3.vida-=hechizo.daño;
                                alert("Tu hechizo hizo 120hp de daño.");
                                alert("El Troll responde con un puñetazo.");
                                personaje1.vida-=30;
                                break;

                            case "espada":
                                espada.durabilidad-=1;
                                espada.desgaste();
                                if(espada.durabilidad < 0){
                                    alert("Tu espada se rompio")
                                    break
                                }
                                personaje3.vida-=espada.daño;
                                alert("Tu espada hizo 150hp de daño.");
                                alert("El Troll responde con una puñetazo.");
                                personaje1.vida-=30;
                                break;

                                case "arco":
                                    arco.durabilidad-=1;
                                    arco.desgaste();
                                    if(arco.durabilidad < 0){
                                        alert("Te quedaste sin flechas")
                                        break
                                    }
                                    personaje3.vida-=arco.daño;
                                    alert("Tu arco hizo 110hp de daño.");
                                    alert("El troll responde con un puñetazo.");
                                    personaje1.vida-=30;
                                    break;

                            default:
                                alert(ataqueDeseado+" No es un ataque disponible")
                                break;
                    }
                    if((personaje1.vida > 0) && (personaje3.vida > 0)){
                        alert("La batalla continua");
                    }

                    }while((personaje1.vida > 0) && (personaje3.vida > 0));

                    if(personaje1.vida == 0){
                        alert("Haz perdido la pelea")
                    
                    }else{
                        alert(personaje1.nombre+" ¡Haz vencido al Troll! 1000 monedas de oro y la llave se agregaron a tu inventario")
                    }

                    case "regresar":
                        break;


            } 










    }







} while (personaje1.vida > 0);



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



