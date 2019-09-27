let usuarios=[{usuario:"luis",cont:"123456"}];
function Entrar(){
	let usuario = document.querySelector('#usuario').value;
	let cont = document.querySelector('#cont').value;
	let formulario =document.querySelector('#formulario');
	usuarios.forEach((us)=>{
	if(us.usuario==usuario && us.cont==cont){
		formulario.style.display="none";
	}
	});
	// alert(usuario+" "+cont);
}