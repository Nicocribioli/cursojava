class Instrumento{

    constructor(tipo, marca, modelo, precio, stock ){
        this.tipo = tipo;
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.stock = stock;
    }

    sumaIva(){
        this.precio = this.precio*1.21;
    }

    restaStock(){
        this.stock = this.stock-1;
    }

}



var continuar = true;
const productos = [];
const carrito = [];
productos.push (new Instrumento("Guitarra","Gibson","Les Paul",1000,3));
productos.push (new Instrumento("Guitarra","Fender","Stratocaster",800,2));
productos.push (new Instrumento("Guitarra","Jackson","Dinky",650,3));
const guitarras = productos.filter(elemento => elemento.tipo === "Guitarra");
console.log(guitarras);
productos.push (new Instrumento("Bajo","Fender","Jazz Bazz",1000,1));
productos.push (new Instrumento("Bajo","Gibson","SG",800,2));
productos.push (new Instrumento("Bajo","Ephiphone","Thunderbird",500,3));
const bajos = productos.filter(elemento => elemento.tipo === "Bajo");
console.log(bajos);


const menu = () =>{
    let opcion
do {

    opcion = prompt("Bienvenido a la tienda de instrumentos ¿Que desea hacer?\n 1- Comprar\n 2- Ver carrito\n 3- Salir");
    if(opcion == "1" || opcion == "2" || opcion == "3");

    switch(opcion){

        case "1": 

        let eleccion = prompt("Ingrese el instrumento que desa ver:\n 1- Guitarras\n 2- Bajos")
        if(eleccion == "1" || eleccion == "2")

        switch(eleccion){

            case "1":
                for (guitarra of guitarras){
                    alert("Marca: "+guitarra.marca+'\n'+"Modelo: "+guitarra.modelo+'\n'+"Precio: "+guitarra.precio);
                }
                let compra = prompt('¿Cual guitarra desea agregar al carrito?\n 1- Gibson\n 2- Fender\n 3-Jackson');
                if (compra == "1"){
                    carrito.push(productos[0]);
                }else if (compra == "2"){
                    carrito.push(productos[1]);
                }else{
                    carrito.push(productos[2]);
                }
            break;
        


            case "2":
                for (bajo of bajos){
                    alert("Marca: "+bajo.marca+'\n'+"Modelo: "+bajo.modelo+'\n'+"Precio: "+bajo.precio);
                }
                let compra2 = prompt('¿Cual bajo desea agregar al carrito?\n 1- Fender\n 2- Gibson\n 3-Ephiphone');
                if (compra2 == "1"){
                    carrito.push(productos[3]);
                }else if (compra2 == "2"){
                    carrito.push(productos[4]);
                }else{
                    carrito.push(productos[5]);
                }
                break;
        }

        break;

        case "2":
            for (precioIva of productos){
                precioIva.sumaIva();
            }
        for (items of carrito){
            alert("Producto: "+items.marca+"\n"+items.modelo+"\n"+"Precio final+iva: "+items.precio);
        }
        break;


        case "3":
            alert("Gracias por su compra");
            continuar = false;
            break;


    }




}while (continuar == true);



    

}    





menu();