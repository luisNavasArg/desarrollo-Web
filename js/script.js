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

function sumar(a,b){
	return a+b;
}
function multiplicar(a,b){
	return a*b;
}
function restar(a,b){
	return a-b;
}
function dividir(a,b){
	return a/b;
}
let num = parseInt(prompt('ingrese un número', ''));
let num2 =parseInt(prompt('ingrese otro número', ''));
let operacion = prompt('introduce que operación desear hacer', '');

if(operacion){
	switch(operacion) {
		case "+":
			console.log(sumar(num,num2));
			break;
		case "*":
			console.log(multiplicar(num,num2));
			break;
		case "-":
			console.log(restar(num,num2));
			break;
		case "/":
			console.log(dividir(num,num2));
			break;
		default: 
				alert("Opcion Invalida");
				window.location="index.html"
	}
}

