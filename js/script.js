/*declaración de una variable
alert();*/
// let nombre_variable = "Luis";
// alert(nombre_variable);
//variable string
// console.log(nombre_variable);
//variable numerica
// let y = 5;
//operador aritmetico
// alert(y + 3);
// console.log("El resultado es: " + y+"3");
//variable booleana
// let llueve=true;
// if(llueve){
// 	console.log("Entrá la ropa");
// }else{
// 	console.log("Sacamos la ropa al sol");
// }
// if(y<10){
// 	console.log("se cumple la condición");
// }else{
// 	console.log("No se cumple la condición");
// }

// let a =parseInt(prompt("Escribí un número"));
// let b =parseInt(prompt("Escribí otro número"));
// if(a < b){
// 	console.log("a es menor y b es mayor");
// }else{
// 	console.log("b es menor y a es mayor");
// }

// let pedido = prompt('Hacé tu pedido! \n1.Papas fritas con Cheddar\n2. Milanesa con fritas\n3. Tocino con huevos\n4. Pancho con Gaseosa. ', '')

// switch(pedido){
// 	case "1":
// 		console.log("Disfruta de tus Papas fritas ");
// 		break;
// 	case "2":
// 		console.log("Disfruta tu Milanesa");
// 		break;
// 	case "3":
// 		console.log("Bien Tocino con huevos");
// 		break;
// 	case "4":
// 		console.log("Aja Pancho con Gaseosa");
// 		break;
// 	default:
// 		alert("Esa no es una opción valida");
// 		window.location="index.html";
// }

//parseInt parseFloat

// function sumar(a,b){
// 	return a+b;
// }
// function multiplicar(a,b){
// 	return a*b;
// }
// function restar(a,b){
// 	return a-b;
// }
// function dividir(a,b){
// 	return a/b;
// }
// let num = parseInt(prompt('ingrese un número', ''));
// let num2 =parseInt(prompt('ingrese otro número', ''));
// let operacion = prompt('introduce que operación desear hacer', '');

// if(operacion){
// 	switch(operacion) {
// 		case "+":
// 			console.log(sumar(num,num2));
// 			break;
// 		case "*":
// 			console.log(multiplicar(num,num2));
// 			break;
// 		case "-":
// 			console.log(restar(num,num2));
// 			break;
// 		case "/":
// 			console.log(dividir(num,num2));
// 			break;
// 		default: 
// 				alert("Opcion Invalida");
// 				window.location="index.html"
// 	}
// }


// function mostrarCirculo() {
//     let canvas = document.getElementById('reloj');
//     let context = canvas.getContext('2d');
//     context.strokeStyle = '#666666';
//     context.fillRect(0, 0, 500, 300);

//     context.strokeStyle = 'rgba(200, 200, 15, 70%)';
//     context.beginPath();
//     context.arc(50, 50, 44, 0, Math.PI * 2);
//     context.stroke();

// }

// function limpiarCanvas() {
//     let canvas = document.getElementById('reloj');
//     let context = canvas.getContext('2d');
//     context.clearRect(0, 0, canvas.width, canvas.height);

// }
// setInterval(mostrarLinea, 10);
// let a = 0;
// let b = 0;

// function mostrarLinea() {

//     let canvas = document.getElementById('reloj');
//     canvas.style.width = "600px";
//     canvas.style.height = "600px";
//     let context = canvas.getContext('2d');
//     context.strokeStyle = 'red';
//     context.beginPath();
//     context.moveTo(Math.floor(Math.random() * 300), 0);
//     context.lineTo(Math.floor(Math.random() * 3000), Math.floor(Math.random() * 300));
//     context.stroke();
//     a++;
//     b++;
// }
//evento onload
window.onload= function(){
	let width = 100;
	let height = 100;
	let centerX = Math.floor(width/2);
	let centerY = Math.floor(height/2);

    let canvas = document.getElementById('reloj');
    let context = canvas.getContext('2d');

setInterval(mostrarReloj,1000);
    function mostrarReloj(){
    	let date = new Date();
    	let hour = date.getHours();
    	let minute = date.getMinutes();
    	let second = date.getSeconds();

    	if((hour==21) &&(minute == 15) && (second ==0)){
    		alert('Nos vamos todes!');
    	}

    	context.strokeStyle="#666666";
    	context.clearRect(0,0,canvas.width, canvas.height);

    	context.beginPath();
    	context.fillStyle='rgba('+Math.floor(Math.random() * 255) +',	'+Math.floor(Math.random() * 255) +','+Math.floor(Math.random() * 255) +',50%)';

    	context.arc(centerX, centerY, centerX -1, 0, Math.PI*2,false);
    	context.fill();
    	context.stroke();
    	context.save();

    	context.translate(width/2,height/2);
    	for(let i = 0; i < 360; i++){
    		context.rotate(30 * Math.PI /180);
    		context.beginPath();
    		context.moveTo(0, centerY * 0.8);
    		context.lineTo(0, centerY * 0.9);
    		context.stroke();
    	}
    	context.translate(-width/2, - height/2);
    	context.restore();
    	dibujarAgujas(centerY * 0.5, hour * 30 + minute /60 * 30);
    	dibujarAgujas(centerY * 0.8, minute * 6 + second/60 * 6);

    	context.strokeStyle='rgba('+Math.floor(Math.random() * 255) +',	'+Math.floor(Math.random() * 255) +','+Math.floor(Math.random() * 255) +',90%)';
    	dibujarAgujas(centerY * 0.8, second * 6);

    }
    function dibujarAgujas(length, angle){
    	context.save();
    	context.translate(centerX, centerY);
    	context.rotate(angle * Math.PI /180);
    	context.beginPath();
    	context.moveTo(0,0);
    	context.lineTo(0,-length);
    	context.stroke();
    	context.translate(-centerX, -centerY);
    	context.restore();

    }
}










