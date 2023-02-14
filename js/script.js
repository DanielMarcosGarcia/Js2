

class Producto {

    constructor(nombre, precio, stock) {

        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;

    }

    get_datos() {

        console.log("Producto");
        console.log("Nombre: ", this.nombre);
        console.log("Precio: ", this.precio);
        console.log("Stock: ", this.stock);
        console.log("");

    }

    get_stock() {

        if (this.stock <= 0) {
            return false
        }
        else {
            return true
        }
    }

    venta_stock(cantidad) {
        //chequeo de unidades menor del stock//
        if (this.stock >= cantidad) {

            this.stock = this.stock - cantidad;
            return true
        }
        else {
            return false
        }
    }
}


// alta de productos //

/*
for ( let i = 0 ; i < 3 ; i = i + 1){

    let nombre = prompt("Ingrese el nombre del producto");
    let precio = prompt("Ingrese el precio del producto");
    let stock = prompt("Ingrese el stock del producto");

    let producto = new Producto ( nombre , precio , stock );

    lista_productos.push(producto);
}
*/

let lista_productos = [];

lista_productos.push(new Producto("Esmalte", 5000, 12));
lista_productos.push(new Producto("Quitaesmalte", 2500, 27));
lista_productos.push(new Producto("Corrector", 3000, 6));
lista_productos.push(new Producto("Shampoo", 3299, 50));
lista_productos.push(new Producto("Acondicionador", 2890, 0));


// fin del alta de productos //


// inicio de productos //

console.log("Lista de productos");
console.log("");

for (let producto of lista_productos) {

    producto.get_datos();

}

// fin de productos //


// simulacion de compra //

function buscar_producto(producto) {

    return producto.nombre == compra_usuario

}

let compra_usuario = prompt("Ingrese el producto que desea comprar");
let resultado_busqueda = lista_productos.find(buscar_producto);

if (resultado_busqueda != undefined) {
//se encontro producto de compra//
    if (resultado_busqueda.get_stock()) {
        //chequeo de stock//
        let unidades = prompt(" ¿Cuantas unidades queres?");

        if (resultado_busqueda.venta_stock(unidades)) {
            //chequeo cantidad de unidades//
            console.log(`Gracias por la compra de ${unidades} unidades de ${resultado_busqueda.nombre} :D`);
            console.log("");
        }
        else{
            console.log("No se puede realizar la compra");
            console.log("El stock disponible del producto es de", resultado_busqueda.stock);
            console.log("");
        }
    }
    else {
        console.log("No se puede realizar la compra");
        console.log("No tenemos stock del producto", resultado_busqueda.nombre);
    }

    resultado_busqueda.get_datos();

}

else {
    console.log("No se encontro el producto");
}
 // fin de la simulacion de compra //