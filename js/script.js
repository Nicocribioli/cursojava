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
productos.push (new Instrumento("Guitarra","Fender","Stratocaster",300000,2,"imagenes/stratoBlanca.jpg"));
productos.push (new Instrumento("Guitarra","Jackson","Dinky",250000,3,"imagenes/jacksonBlanca.webp"));
const guitarras = productos.filter(elemento => elemento.tipo === "Guitarra");
console.log(guitarras);
productos.push (new Instrumento("Bajo","Fender","Jazz Bazz",500000,1));
productos.push (new Instrumento("Bajo","Gibson","SG",600000,2));
productos.push (new Instrumento("Bajo","Ephiphone","Thunderbird",120000,3));
const bajos = productos.filter(elemento => elemento.tipo === "Bajo");
console.log(bajos);




var logIn = document.getElementById("btnLogin");
let inner = "";

$(() => {  

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
    formulario.parentElement.removeChild(formulario);

    cartelSaludo(nombre,apellido,email)
    });

function cartelSaludo(nombre,apellido,email) { 
    var saludo = document.createElement("div");
    var mensaje = document.getElementById("logIn");
    var cartel = `
    <div class="card" style="width: 18rem;">
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




let divGuitarras = document.createElement("div");
divGuitarras.classList.add("row");
let tienda = document.getElementById("tienda");

for (guitarra of guitarras){
    inner += `
    <div class="col">
        <div class="card itemTienda" style="width: 18rem;">
            <img class="imgTienda" src="./${guitarra.imagen}" class="card-img-top" alt="Guitarra Les Paul">
            <div class="card-body detallesItem">
                <h5 class="card-title">${guitarra.marca} ${guitarra.modelo}</h5>
                <p class="card-text itemPrecio">$${guitarra.precio}</p>
                <p class="card-text">Elegir color</p>
                <div id=cambiarColor>
                <label for="blanco">Blanca</label>
                <input class="colorBlanco" type="radio" name="colorLespaul" value="Blanco">
                <label for="negro">Negro</label>
                <input class="colorNegro" type="radio" name="colorLespual" value="Negro">
                </div>
                <a href="#" class="btn btn-primary mt-3 comprarItem">Agregar al carrito</a>
            </div>
        </div>
    </div>
    `

}
divGuitarras.innerHTML = inner;
$("#tienda").prepend(divGuitarras);




var btnAgregarCarrito = document.getElementsByClassName("comprarItem");
for (let i = 0; i < btnAgregarCarrito.length; i++) {
    var boton = btnAgregarCarrito[i];
    boton.addEventListener("click", btnCarritoClick);
    
}

function btnCarritoClick(event){
    var boton = event.target;
    var itemTienda = boton.parentElement.parentElement;
    var nombre = itemTienda.getElementsByClassName("card-title")[0].innerText;
    var precio = itemTienda.getElementsByClassName("itemPrecio")[0].innerText;
    var imagen = itemTienda.getElementsByClassName("card-img-top")[0].src;  
    agregarItemCarrito(nombre,precio,imagen);

}

function agregarItemCarrito(nombre,precio,imagen) {
    var listaCarrito = document.createElement("div");
    var itemsCarrito = document.getElementsByClassName("items-carrito")[0];
    var contenidoCarrito = `
    <div class="offcanvas-body items-carrito">
    <div>
        <img class="card-img-top" src="${imagen}" width="100" height="200"> 
        <span class="card-title">${nombre}</span>
        <span class="itemPrecio">${precio}</span>
    </div>
</div>`;
    listaCarrito.innerHTML = contenidoCarrito;
    itemsCarrito.appendChild(listaCarrito);
}



var clasesImg = document.querySelectorAll(".imgTienda")
var cambioColor = document.querySelectorAll(".colorBlanco")
var cambioColor2 = document.querySelectorAll(".colorNegro")

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
    cambiarColor1("./imagenes/stratoNegra.jpg");
})


$("#cambiarColor #blanco2").on("click",()=>{
    cambiarColor2("./imagenes/jacksonBlanca.webp");
})

$("#cambiarColor #negro2").on("click",()=>{
    cambiarColor2("./imagenes/jacksonNegra.jpg");
}) 





})