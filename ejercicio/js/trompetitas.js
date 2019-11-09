let validar = Array(5);
let deuda = [
    [],
    [],
    [],
    [],
    []
];
let pagar = 0;
let ventas = [];
Inicio();

//dibujamos las mesas para nuestro día de trabajo
function Inicio() {
    let mesa = document.querySelector("#principal");
    for (let a = 0; a < 5; a++) {
        validar[a] = true;
        mesa.innerHTML += `<div class='card col-3 bg-info m-10' id="${a}">
        <div class="card-head">

            <button class="btn-lg btn-primary" onclick="ocuparMesa(${a})"> Ocupar Mesa </button>
            <button class="btn-lg btn-primary" onclick="HacerPedido(${a})"> Hacer el Pedido </button>       
            <button class="btn-lg btn-primary" onclick="cobrarMesa(${a})"> Cobrar Mesa </button>       
        </div>
        <div class='card-body '>
            <h5 class='card-title text-white' id="t${a}">Desocupada</h5>
            <p class='card-text' ><ol id="p${a}">aquí va el pedido:</ol></p>
            <p id="tot${a}">Total: $ </p>
        </div>
    </div>`;
    }
}


function ocuparMesa(id) {

    let mesa = document.getElementById(id);
    mesa.classList.add("bg-danger");
    let texto = document.getElementById('t' + id);
    texto.innerHTML = "Ocupada";
    validar[id] = false;
}

function HacerPedido(id) {
    console.log(validar[id]);
    if (validar[id] == false) {
        let pedido = prompt('Menú:\n 1) Papas fritas y Gaseosa\n 2). Milanesa con fritas\n 3). Budín de chocolate\n 4). Papas fritas con cheddar ', '');
        let tpedido = document.getElementById('p' + id);
        switch (pedido) {
            case '1':
                deuda[id].push({ producto: pedido, pesos: 130 });
                tpedido.innerHTML += '<li>Papas fritas y Gaseosa $130</li>';
                calcularTotal(id);
                pagar = 0;
                break;
            case '2':
                deuda[id].push({ producto: pedido, pesos: 240 });
                tpedido.innerHTML += '<li>Milanesa con fritas $240</li>';
                calcularTotal(id);
                pagar = 0;
                break;
            case '3':
                deuda[id].push({ producto: pedido, pesos: 80 });
                tpedido.innerHTML += '<li>Budín de chocolate $80</li>';
                calcularTotal(id);
                pagar = 0;
                break;
            case '4':
                deuda[id].push({ producto: pedido, pesos: 110 });
                tpedido.innerHTML += '<li>Papas fritas con cheddar $110</li>';
                calcularTotal(id);
                pagar = 0;
                break;
            default:
                alert('debes hacer un pedido valido');
                break;
        }
    } else alert('debes ocupar la mesa primero');
}

function cobrarMesa(id) {

    let mesa = document.getElementById(id);
    mesa.classList.remove("bg-danger");
    let texto = document.getElementById('t' + id);
    texto.innerHTML = "Desocupada";
    let tpedido = document.getElementById('p' + id);
    tpedido.innerHTML = 'aquí va el pedido:';
    validar[id] = true;
    guardarVentas(id);
    calcularTotal(id);
    pagar = 0;
    let total = document.getElementById('tot' + id);
    total.innerHTML = 'Total a pagar:';
}


function calcularTotal(id) {
    let total = document.getElementById('tot' + id);
    for (let a = 0; a < deuda[id].length; a++) {
        pagar += deuda[id][a].pesos;
    }
    total.innerHTML = pagar;
    return pagar;
}

function guardarVentas(id) {
    for (let a = 0; a < deuda[id].length; a++) {
        ventas.push({ producto: deuda[id][a].producto, pesos: deuda[id][a].pesos });
    }
}
let uno = 0,
    dos = 0,
    tres = 0,
    cuatro = 0;

function mostrarVentas() {
    let mostrar = document.querySelector("#principal");
    for (let a = 0; a < ventas.length; a++) {
        if (ventas[a].producto == "1") {
            uno++;
        } else if (ventas[a].producto == '2') {
            dos++;
        } else if (ventas[a].producto == '3') {
            tres++;
        } else if (ventas[a].producto == '4') {
            cuatro++;
        }
    }
    let ut = uno * 130;
    let dt = dos * 240;
    let tt = tres * 80;
    let ct = cuatro * 110;
    let totaVendido = ut + dt + tt + ct;
    mostrar.innerHTML = `
    <div class='card '>
        <div class="card-head">
            <div class="col-12">Resumen de ventas</div>
        </div>
        <div class="card-body">
            <div class='btn btn-outline-primary btn-lg btn-block' >
                <p> ${uno}   Papas fritas y Gaseosa  ${ut} </p>
            </div>
            <div class='btn btn-outline-primary btn-lg btn-block' >
                <p>${dos} Milanesa con fritas ${dt}</p>
            </div>
            <div class='btn btn-outline-primary btn-lg btn-block' >
                <p>${tres} Budín de chocolate ${tt}</p>
            </div>
            <div class='btn btn-outline-primary btn-lg btn-block' >
                <p>${cuatro} Papas fritas con cheddar ${ct}</p>
            </div>
        </div>
        <p>Total vendido ${totaVendido} Pesos</p>
    </div>
    
    `;

}