window.onload = function() {
    for (let a = 1; a < 13; a++) {
        document.getElementById('principal').innerHTML += `
	<div class="col-4" >
		<div class="card text-white bg-success mb-3" style="max-width: 18rem;" id="${a}">
  		<div class="card-header" >Mesa# ${a}</div>
  		<div class="card-body">
  			<button type="button" class="btn btn-primary btn-lg" onclick="hacerPedido(${a})">Hacer pedido</button>
			<button type="button" class="btn btn-secondary btn-lg" onclick="cobrar(${a})">Cobrar</button>
    		<h5 class="card-title">Desocupada</h5>
    		<p class="card-text">aquí muestra el pedido</p>
  		</div>
  		</div>
	</div>`;
    }
}

function hacerPedido(id) {
    alert(id);
    let boton = document.getElementById(id);
    boton.classList.remove("bg-success");
    boton.classList.add("bg-secondary");
    mostrarMenu(id);
}

function cobrar(id) {
    alert('cobrando');
    let boton = document.getElementById(id);
    boton.classList.add("bg-success");
    boton.classList.remove("bg-secondary");
}

function mostrarMenu(id) {
    let menu = prompt('Ingresa tu pedido \n 1).Papas fritas con gaseosa', '');
    alert("id: " + id);
}