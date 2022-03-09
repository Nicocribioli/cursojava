class Instrumento{

    constructor(tipo, marca, modelo, precio, stock, imagen){
        this.tipo = tipo;
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.stock = stock;
        this.imagen = imagen;
    }

    sumaIva(){
        this.precio = this.precio*1.21;
    }

    restaStock(){
        this.stock = this.stock-1;
    }

}


const productos = [];
const carrito = [];
productos.push (new Instrumento("Guitarra","Gibson","Les Paul",800000,3,"imagenes/lespaulBlanca.jpg"));
productos.push (new Instrumento("Guitarra","Fender","Strato",300000,2,"imagenes/stratoBlanca.jpg"));
productos.push (new Instrumento("Guitarra","Jackson","Dinky",250000,3,"imagenes/jacksonBlanca.webp"));
const guitarras = productos.filter(elemento => elemento.tipo === "Guitarra");
console.log(guitarras);
productos.push (new Instrumento("Bajo","Fender","Jazz Bass",500000,1,"imagenes/jazzBassBlanco.jpg"));
productos.push (new Instrumento("Bajo","Fender","Jaguar",600000,2,"imagenes/jaguarBlanco.webp"));
productos.push (new Instrumento("Bajo","Ephi","Thunder",120000,3,"imagenes/thunderBlanco.webp"));
const bajos = productos.filter(elemento => elemento.tipo === "Bajo");
console.log(bajos);






$(() => {


    /* FORMULARIO LOG IN */


    var logIn = document.getElementById("btnLogin");
    let inner = "";


$("#btnregis").on("click",()=>{
    $("#registrarse").show("slow");
})


logIn.addEventListener("click", () =>{
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    const usuario = {
        "Nombre": nombre,
        "Apellido": apellido,
        "Email": email,
        "Password": password,
    }
    localStorage.setItem("datos", JSON.stringify(usuario));
    
    console.log(usuario);

    let formulario = document.getElementById("formulario");
    let btnregis = document.getElementById("btnregis");
    formulario.parentElement.removeChild(formulario);
    btnregis.parentElement.removeChild(btnregis);
    


    cartelSaludo(nombre,apellido,email)
    });

function cartelSaludo(nombre,apellido,email) { 
    var saludo = document.createElement("div");
    var mensaje = document.getElementById("logIn");
    var cartel = `
    <div class="card mb-5 oculto" id="saludo" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Bienvenido ${nombre} ${apellido} </h5>
            <h6 class="card-subtitle mb-2 text-muted"></h6>
            <p class="card-text">Se a enviado un mail de confirmacion a la direccion ${email} </p>
            <a href="https://outlook.live.com/mail/0/" target="_blank" class="card-link">Abrir correo</a>
        </div>
    </div>
    `;
    saludo.innerHTML = cartel;
    mensaje.appendChild(saludo);
    
}



$("#btnLogin").on("click", ()=>{
    $("#saludo").show("slow");
})

/* let URL = `https://api.mercadolibre.com/items/MLA606746813`;


$.ajax({
    type: "GET",
    url: URL,
    success: (response) =>{
        $("#guitarras").prepend(`
        <div class="col">
        <div class="card itemTienda" style="width: 18rem; height: 20rem;">
            <img class="imgTienda mt-3" src="${response.thumbnail} " class="card-img-top" alt="Guitarra Les Paul">
            <div class="card-body detallesItem">
                <h5 class="card-title text-center">${response.title}</h5>
                <p class="card-text id="itemPrecio" mt-3">$${response.price}</p>
                <p class="card-text">Elegir color</p>
                <div id=cambiarColor>
                <label for="blanco">Blanca</label>
                <input class="colorBlanco" type="radio" name="colorLespaul" value="Blanco">
                <label for="negro">Negro</label>
                <input class="colorNegro" type="radio" name="colorLespual" value="Negro">
                </div>
                <a href="#" class="btn btn-primary mt-4 comprarItem ms-5">Agregar al carrito</a>
            </div>
        </div>
    </div>

        `)
    }
}) */  


/* GENERAR DOM DE LOS PRODUCTOS */

let divGuitarras = document.createElement("div");
let tienda = document.getElementById("tienda");


for (guitarra of guitarras){
    $("#tienda").append(`
    <div class="guitarras">
        <div class="card itemTienda" style="width: 18rem; height: 20rem;">
            <img class="imgTienda mt-3" src="./${guitarra.imagen}" class="card-img-top" alt="Guitarra Les Paul">
            <div class="card-body detallesItem">
                <h5 class="card-title text-center">${guitarra.marca} ${guitarra.modelo}</h5>
                <p class="card-text itemPrecio" mt-3">$${guitarra.precio}</p>
                <p class="card-text">Elegir color</p>
                <div id=cambiarColor>
                <label for="blanco">Blanca</label>
                <input class="colorBlanco" type="radio" name="colorLespaul" value="Blanco">
                <label for="negro">Negro</label>
                <input class="colorNegro" type="radio" name="colorLespual" value="Negro">
                </div>
                <a class="btn btn-primary mt-4 comprarItem ms-5">Agregar al carrito</a>
            </div>
        </div>
    </div>
    `)

}

var gridGuitarras = document.querySelectorAll(".guitarras");
for (let i = 0; i < gridGuitarras.length; i++) {
    gridGuitarras[i].classList = "guitarra" + i;
    
}



let divBajos = document.getElementById("bajos")


for (bajo of bajos){
    $("#tienda").append(`
    <div class="bajos">
        <div class="card itemTienda" style="width: 18rem; height: 20rem;">
            <img class="imgTienda mt-3" src="./${bajo.imagen}" class="card-img-top" alt="Guitarra Les Paul">
            <div class="card-body detallesItem">
                <h5 class="card-title text-center">${bajo.marca} ${bajo.modelo}</h5>
                <p class="card-text itemPrecio" mt-3">$${bajo.precio}</p>
                <p class="card-text">Elegir color</p>
                <div id=cambiarColor>
                <label for="blanco">Blanca</label>
                <input class="colorBlanco" type="radio" name="colorLespaul" value="Blanco">
                <label for="negro">Negro</label>
                <input class="colorNegro" type="radio" name="colorLespual" value="Negro">
                </div>
                <a class="btn btn-primary mt-4 comprarItem ms-5">Agregar al carrito</a>
            </div>
        </div>
    </div>
    `)

}

var gridBajos = document.querySelectorAll(".bajos");
for (let i = 0; i < gridBajos.length; i++) {
    gridBajos[i].classList = "bajo" + i;
    
}






/* AGREGAR ITEMS AL CARRITO */

var btnAgregarCarrito = document.getElementsByClassName("comprarItem");
for (let i = 0; i < btnAgregarCarrito.length; i++) {
    var boton = btnAgregarCarrito[i];
    boton.addEventListener("click", btnCarritoClick);
    
}

function btnCarritoClick(event){
    let boton = event.target;
    let itemTienda = boton.parentElement.parentElement;
    let nombre = itemTienda.getElementsByClassName("card-title")[0].innerText;
    let precio = itemTienda.getElementsByClassName("itemPrecio")[0].innerText;
    let imagen = itemTienda.getElementsByClassName("imgTienda")[0].src;  
    agregarItemCarrito(nombre,precio,imagen);

}

function agregarItemCarrito(nombre,precio,imagen) {
    let listaCarrito = document.createElement("div");
    listaCarrito.classList.add("contenidoItems");
    let itemsCarrito = document.getElementsByClassName("items-carrito")[0];
    let nombreItems = itemsCarrito.getElementsByClassName("cart-title")
    for (let i = 0; i < nombreItems.length; i++) {
        if (nombreItems[i].innerText == nombre){
            console.log(nombreItems)
            return;
        }
    }
    console.log(nombreItems)
    let contenidoCarrito = `
    <div class="offcanvas-body item-carrito">
        <div class="d-flex align-items-center justify-content-end">
            <img class="card-img-top" src="${imagen}" width="200" height="200"> 
            <span class="cart-title me-3">${nombre}</span>
            <span class="itemPrecio">${precio}</span>
            <input class="carritoCantidad" type="number" value="1">
            <button class="btn btn-danger eliminarItem justify" type="button">X</button>
        </div>
    </div>`;
    listaCarrito.innerHTML = contenidoCarrito;
    itemsCarrito.append(listaCarrito);
    listaCarrito.getElementsByClassName("eliminarItem")[0].addEventListener("click", eliminarItem);
}

let btnEliminar = document.getElementsByClassName("eliminarItem");


/* ELIMINAR ITEMS DEL CARRITO */

for (let i = 0; i < btnEliminar.length; i++) {
    let borrar = btnEliminar[i];
    borrar.addEventListener("click", eliminarItem);
    
}

function eliminarItem(event){
    let borrarClick = event.target
    borrarClick.parentElement.parentElement.remove();
    actualizarCarrito();
}


/* ACTUALIZAR EL TOTAL CARRITO */

function actualizarCarrito(){
    let carritoContainer = document.getElementsByClassName("contenidoCarrito")[0];
    let filasCarrito = carritoContainer.getElementsByClassName("item-carrito");
    let total = 0;
    for (let i = 0; i < filasCarrito.length; i++) {

        let filaCarrito = filasCarrito[i];
        let elementoPrecio = filaCarrito.getElementsByClassName("itemPrecio")[0];
        let elementoCantidad = filaCarrito.getElementsByClassName("carritoCantidad")[0];
        console.log(elementoPrecio, elementoCantidad);

        let precioItem = parseFloat(elementoPrecio.innerText.replace("$", ""));
        let cantidadItem = elementoCantidad.value
        total = total + (precioItem * cantidadItem);
    }

    document.getElementsByClassName("carritoTotal")[0].innerText = "TOTAL " + " $ " + total;
}

/* let cantidadCarrito = document.getElementsByClassName("carritoCantidad")
for (let i = 0; i < cantidadCarrito.length; i++) {
    var input = cantidadCarrito[i];
    input.addEventListener("change", cantidadCambiada())
}

function cantidadCambiada(event){
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    actualizarCarrito();
} */

/* CAMBIAR DE COLOR LOS PRODUCTOS */
let clasesImg = document.querySelectorAll(".imgTienda")
let cambioColor = document.querySelectorAll(".colorBlanco")
let cambioColor2 = document.querySelectorAll(".colorNegro")

for (let i = 0; i < cambioColor.length; i++) {
    clasesImg[i].id = "img" + i;
    
}

for (let i = 0; i < cambioColor.length; i++) {
    cambioColor[i].id = "blanco" + i;
    
}

for (let i = 0; i < cambioColor.length; i++) {
    cambioColor2[i].id = "negro" + i;
    
}

function cambiarColor(color){
    document.getElementById("img0").src=color;
}

function cambiarColor1(color){
    document.getElementById("img1").src=color;
}

function cambiarColor2(color){
    document.getElementById("img2").src=color;
}

$("#cambiarColor #blanco0").on("click",()=>{
    cambiarColor("./imagenes/lespaulBlanca.jpg");
})

$("#cambiarColor #negro0").on("click",()=>{
    cambiarColor("./imagenes/lespaulNegra.jpg");
})

$("#cambiarColor #blanco1").on("click",()=>{
    cambiarColor1("./imagenes/stratoBlanca.jpg");
})

$("#cambiarColor #negro1").on("click",()=>{
    cambiarColor1("./imagenes/stratoNegra.png");
})


$("#cambiarColor #blanco2").on("click",()=>{
    cambiarColor2("./imagenes/jacksonBlanca.webp");
})

$("#cambiarColor #negro2").on("click",()=>{
    cambiarColor2("./imagenes/jacksonNegra.jpg");
}) 

function cambiarColor3(color){
    document.getElementById("img3").src=color;
}

function cambiarColor4(color){
    document.getElementById("img4").src=color;
}

function cambiarColor5(color){
    document.getElementById("img5").src=color;
}

$("#cambiarColor #blanco3").on("click",()=>{
    cambiarColor3("./imagenes/jazzBassBlanco.jpg");
})

$("#cambiarColor #negro3").on("click",()=>{
    cambiarColor3("./imagenes/jazzBassNegro.webp");
})

$("#cambiarColor #blanco4").on("click",()=>{
    cambiarColor4("./imagenes/jaguarBlanco.webp");
})

$("#cambiarColor #negro4").on("click",()=>{
    cambiarColor4("./imagenes/jaguarNegro.jpg");
})

$("#cambiarColor #blanco5").on("click",()=>{
    cambiarColor5("./imagenes/thunderBlanco.webp");
})

$("#cambiarColor #negro5").on("click",()=>{
    cambiarColor5("./imagenes/thunderNegro.webp");
})


})