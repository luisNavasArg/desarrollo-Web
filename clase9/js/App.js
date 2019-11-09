class App {
    constructor(cantMesas, caja, menu, barra) {
        this.cantMesas = cantMesas;
        this.caja = caja;
        this.menu = menu;
        this.barra = barra;
    }
    crearMesas() {
        for (let a = 0; a < this.cantMesas; a++) {
            document.getElementById('principal').innerHTML += `
            <div class="col-4">
                <div class="card text-white bg-success mb-3" id="${a}">
                   <div class="card-header">Mesa# ${a}</div>
                   <div class="card-body">
                   <button type="button" class="btn btn-primary btn-lg"
                    onclick="restaurante.ocuparMesa(${a})">Ocupar Mesa</button>
                    <button type="button" class="btn btn-primary btn-lg"
                    onclick="restaurante.hacerPedido(${a})">Hacer Pedido</button>
                    <button type="button" class="btn btn-primary btn-lg"
                    onclick="restaurante.cobrar(${a})">Cobrar</button>
                   </div> 
                </div>
            </div>
            `;
        }
    }
    ocuparMesa(id) {
        let boton = document.getElementById(id);
        boton.classList.remove("bg-success");
        boton.classList.add("bg-danger");
    }
    cobrar(id) {
        let boton = document.getElementById(id);
        boton.classList.add("bg-success");
        boton.classList.remove("bg-danger");
    }


}
let platosDelDia = "elige tu pedido\n 1).Papas fritas con Gaseosa\n2).Milanesa con fritas\n 3).Choripan con Gaseosa\n 4)Polenta con tuco\n 5)Empanada de Carne con Manaos de Uva";
//instanciar la clase App
let restaurante = new App(12, 0, platosDelDia, 0);
restaurante.crearMesas();