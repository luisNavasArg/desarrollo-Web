Inicio();

function Inicio() {
    let mesa = document.querySelector("#principal");
    for (let a = 0; a < 5; a++) {
        mesa.innerHTML += `<div class='card col-3' id="${a}">
        <div class="card-head">
            <button class="btn btn-primary" onclick="ocuparMesa(${a})"> Ocupar Mesa </button>
            <button class="btn btn-primary" onclick="HacerPedido()"> Hacer el Pedido </button>       
        </div>
        <div class='card-body '>
            <h5 class='card-title'>Card title</h5>
            <p class='card-text'>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            <p class='card-text'><small class='text-muted'>Last updated 3 mins ago</small></p>
        </div>
    </div>`;
    }
}

function ocuparMesa(id) {
    let mesa = document.querySelector(id);
    mesa.classList.add("bg-danger");
}