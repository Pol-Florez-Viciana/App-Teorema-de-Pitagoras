var LadoA = 0;
var LadoB = 0;
var LadoC = 0;

function Cargar(){
	const Pantalla = document.getElementById("Pantalla");
	const ctx = Pantalla.getContext("2d");
	ctx.clearRect(0,0,300,300);
	ctx.fillStyle = "gray";
	ctx.fillRect(0, 0, 300, 300);
	ctx.font = "20px Georgia";
	ctx.strokeStyle = "blue";
	ctx.strokeText("Inserte Valores", 80, 150);
	
}

function PintarPantalla(TipoTriangulo){
	// Comprobación de si existen medidas de lados
	if (Number.isNaN(LadoA) == true ){ Cargar(); return; }
	if (Number.isNaN(LadoB) == true ){ Cargar(); return; }
	if (Number.isNaN(LadoC) == true ){ Cargar(); return; }
	// Comprobado pasamos a pintar la pantalla 
	const Pantalla = document.getElementById("Pantalla");
	const ctx = Pantalla.getContext("2d");
	ctx.clearRect(0,0,300,300);
	ctx.beginPath();
	ctx.fillStyle = "gray";
	ctx.fillRect(0, 0, 300, 300);
	
	
	var Izquierda = 0;
	var Arriba = 0;
	
	if (parseFloat(LadoA) >= parseFloat(LadoB)){
		Izquierda = PorUnidaje(LadoA,LadoA,260);
		Arriba = PorUnidaje(LadoB,LadoA,260);
	}else{
		Izquierda = PorUnidaje(LadoA,LadoB,260);
		Arriba = PorUnidaje(LadoB,LadoB,260);
	}
	
	
	// pinto el interior con una nueva figura triángulo amarillo
	ctx.fillStyle = "yellow";
	ctx.strokeStyle = "yellow";
	ctx.lineWidth = 2;
	ctx.beginPath();
	// Iniciamos
	ctx.moveTo(22, 22);
	// Arriba
	ctx.lineTo(22, Arriba - 4);
	// Izquierda
	ctx.lineTo(22 + (Izquierda - 4), 22);
	// Hipotenusa
	ctx.moveTo(22 + (Izquierda - 4), 22);
	ctx.lineTo(22, Arriba - 4);
	ctx.fill();
	ctx.stroke();
	
	ctx.fillStyle = "orange";
	ctx.strokeStyle = "orange";
	ctx.lineWidth = 5;
	ctx.beginPath();
	ctx.moveTo(22 + (Izquierda - 4) , 22);
	ctx.lineTo(22 + (Izquierda - 4) , Arriba - 1 );
	// Izquierda
	ctx.lineTo(22 ,  Arriba - 1);
	ctx.fill();
	ctx.stroke();
	
	ctx.strokeStyle = "blue";
	ctx.beginPath();
	ctx.moveTo(20, 20);
	// Pinto un Lado de Arriba a Abajo
	ctx.lineTo(20, Arriba);
	//ctx.closePath();
	ctx.stroke();
	// Pinto un lado de Izquierda a Derecha
	ctx.beginPath();
	ctx.strokeStyle = "green";
	ctx.lineWidth = 5;
	ctx.moveTo(20, 20);
	ctx.lineTo(20 + Izquierda, 20);
	ctx.stroke();
	// Pinto la hipotenusa
	ctx.beginPath();
	ctx.strokeStyle = "red";
	ctx.lineWidth = 5;
	ctx.moveTo(20 + Izquierda, 20);
	ctx.lineTo(20, Arriba);
	ctx.stroke();
	
	// Escribo las letras y titulos
	ctx.lineWidth = 1;
	ctx.font = "20px Georgia";
	ctx.strokeStyle = "blue";
	ctx.strokeText("B", 2, 35);
	ctx.strokeStyle = "green";
	ctx.strokeText("A", 25, 15);
	ctx.lineWidth = 1;
	ctx.strokeStyle = "red";
	if (Arriba < 55){
		ctx.strokeText("C", 2, 55);
	}else{
		ctx.strokeText("C", 2, Arriba);
	}
	if (Izquierda < 45){
		ctx.strokeText("C", 45, 15);
	}else{
		ctx.strokeText("C", Izquierda, 15);
	}
	ctx.font = "15px Arial";
	ctx.strokeStyle = "black";
	ctx.strokeText("Triángulo Rectángulo " + TipoTriangulo, 40, 285);
	
	
}
function CalcularTeoremaPitagoras(){
	var ElDato1 = document.getElementById("ElInput1").value;
	var ElDato2 = document.getElementById("ElInput2").value;
	var ElDato3 = document.getElementById("ElInput3").value;
	if (ElDato1.length == 0 ) { ElDato1 = 0; }
	if (ElDato2.length == 0 ) { ElDato2 = 0; }
	if (ElDato3.length == 0 ) { ElDato3 = 0; }
	if (ElDato1 < 0 ) { ElDato1 = ElDato1 - ElDato1 - ElDato1; }
	if (ElDato2 < 0 ) { ElDato2 = ElDato2 - ElDato2 - ElDato2; }
	if (ElDato3 < 0 ) { ElDato3 = ElDato3 - ElDato3 - ElDato3; }
	
	var Resultado = 0;
	var A = 0;
	var B = 0;
	var C = 0;
	var Sumas = 0;
	
	
		
	if ( parseFloat(ElDato1) != 0 && parseFloat(ElDato2) != 0 && parseFloat(ElDato3) == 0 ){ 
		A = Math.pow(parseFloat(ElDato1),2);
		B = Math.pow(parseFloat(ElDato2),2);
		Sumas = parseFloat(A + B);
		Resultado = Math.sqrt(Sumas);
		document.getElementById("Resultado1").innerHTML = "(A·A)+(B·B)=(C·C)<br>(" + A + ")+(" + B + ")=" + Sumas + " donde " + Sumas + "yRoot2=C=" + Resultado;
		LadoA = parseFloat(ElDato1);
		LadoB = parseFloat(ElDato2);
		LadoC = parseFloat(Resultado);
		if (Number.isNaN(LadoA) == true ){ Cargar(); return; }
		if (Number.isNaN(LadoB) == true ){ Cargar(); return; }
		if (Number.isNaN(LadoC) == true ){ Cargar(); return; }
		var EsTerna = " No es Terna Pitagórica.";
		var LargadaC = "" + Cuadrado(LadoC);
		var LargadaLadoC = "" + LadoC;
		let DatoA = parseFloat(LadoA);
		let DatoB = parseFloat(LadoB);
		let TextoDato = "";
		if (Cuadrado(LadoA)+Cuadrado(LadoB)==Cuadrado(LadoC) && LargadaC.length > LargadaLadoC.length ){ EsTerna = " es Terna Pitagórica."; }
		document.getElementById("Resultado1").innerHTML = document.getElementById("Resultado1").innerHTML + '<br><label style="color: yellow;">(' + LadoA + "^2)+(" + LadoB + "^2)=(" + LadoC + "^2)</label>" + EsTerna;
		var GradoLadoB = 0; // Grados(LadoA,LadoB,LadoC);
		var GradoLadoA = 0; // 90 - Grados(LadoA,LadoB,LadoC);
		
		if (LadoA >= LadoB){
			GradoLadoA = Grados(LadoA,LadoB,LadoC);
			GradoLadoB = 90 - Grados(LadoA,LadoB,LadoC);
			if ( Number.isInteger(DatoA) == true && Number.isInteger(DatoB) == true ) {
				if ((DatoA + DatoB) % 2 != 0 ){
					if (DatoA % 2 != 0){
						TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(" + (DatoB - 2) + ")=" + ((DatoA + DatoB)-(DatoB - 2));
					}else{
						TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(" + (DatoB - 1) + ")=" + ((DatoA + DatoB)-(DatoB - 1));
					}
				}else{
					if ( DatoA % 2 == 0 && DatoB % 2 == 0 ){
						TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(" + (DatoB - (DatoA-DatoB)) + ")=" + ((DatoA + DatoB)-(DatoB - (DatoA-DatoB)));
					}else{
						TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(" + (DatoB - 1) + ")=" + ((DatoA + DatoB)-(DatoB - 1));
					}
				}
			}else{
				if ( Number.isInteger(DatoA) == true ) {
					if ( (DatoA + DatoB) >= 1 ){
						if ((DatoB - 1) % 2 != 0 ){
							if ( DatoB <= 2 ){
								if (DatoA == 1) {
									TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(0.5)=" + ((DatoA + DatoB) - 0.5);
								}else{
									TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(1)=" + ((DatoA + DatoB) - 1);
								}
							}else{
								if (DatoA == 1) {
									TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(0.5)=" + ((DatoA + DatoB) - 0.5);
								}else{
									TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(2)=" + ((DatoA + DatoB) - 2);
								}
							}
						}else{
							TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(2)=" + ((DatoA + DatoB) - 2);
						}	
					}else{
						TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(" + (DatoB - 2) + ")=" + (DatoB - 2);
					}
				}
				if ( Number.isInteger(DatoB) == true ) {
					if ( DatoB == 2  ){
						TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(1.5)=" + ((DatoA + DatoB) - 1.5);
					}else{
						TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(" + ((DatoA + DatoB) - (DatoB -1)) + ")=" + ((DatoA + DatoB) - (DatoB -1));
					}
				}
				if ( Number.isInteger(DatoA) == false && Number.isInteger(DatoB) == false ) {
					if ( DatoA >= 1  ){
						TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(" + (0.5)  + ")=" + ((DatoA+DatoB)-0.5);
					}else{	
						if ((DatoA + DatoB) <= 1 ){
							TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(" + (DatoA * 0.5)  + ")=" + ((DatoA+DatoB)-(DatoA * 0.5));
						}else{
							TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(" + (0.5*0.5)  + ")=" + ((DatoA+DatoB)-(0.5*0.5))
						}
					}
				}
			}
		}else{
			GradoLadoB = Grados(LadoA,LadoB,LadoC);
			GradoLadoA = 90 - Grados(LadoA,LadoB,LadoC);
			if ( Number.isInteger(DatoA) == true && Number.isInteger(DatoB) == true ) {
				if ((DatoA + DatoB) % 2 != 0 ){
					if (DatoB % 2 != 0){
						TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(" + (DatoA - 2) + ")=" + ((DatoA + DatoB)-(DatoA - 2));
					}else{
						TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(" + (DatoA - 1) + ")=" + ((DatoA + DatoB)-(DatoA - 1));
					}
				}else{
					if ( DatoA % 2 == 0 && DatoB % 2 == 0 ){
						TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(" + (DatoA - (DatoB-DatoA)) + ")=" + ((DatoA + DatoB)-(DatoA - (DatoB-DatoA)));
					}else{
						TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(" + (DatoA - 1) + ")=" + ((DatoA + DatoB)-(DatoA - 1));
					}
				}
			}else{
				if ( Number.isInteger(DatoB) == true ) {
					if ((DatoA + DatoB) >= 1 ){
						if ((DatoA - 1) % 2 != 0 ){
							if ( DatoA <= 2 ){
								if (DatoB == 1) {
									TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(0.5)=" + ((DatoA + DatoB) - 0.5);
								}else{
									TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(1)=" + ((DatoA + DatoB) - 1);
								}
							}else{
								if (DatoB == 1) {
									TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(0.5)=" + ((DatoA + DatoB) - 0.5);
								}else{
									TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(2)=" + ((DatoA + DatoB) - 2);
								}
							}	
						}else{
							TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(2)=" + ((DatoA + DatoB) - 2);
						}
					}else{
						TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(" + ((DatoB - 2)) + ")=" + ((DatoB - 2));
					}
				}
				if ( Number.isInteger(DatoA) == true ) {
					if ( DatoA == 2 ){
						TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(1.5)=" + ((DatoA + DatoB) - 1.5);
					}else{
						TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(" + ((DatoA + DatoB) - (DatoA -1)) + ")=" + ((DatoA + DatoB) - (DatoA -1));
					}
				}
				if ( Number.isInteger(DatoA) == false && Number.isInteger(DatoB) == false ) {
					if ( DatoB >= 1  ){
						TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(" + (0.5)  + ")=" + ((DatoA+DatoB)-0.5);
					}else{
						if ((DatoA + DatoB) <= 1 ){
							TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(" + (DatoB * 0.5)  + ")=" + ((DatoA+DatoB)-(DatoB * 0.5));
						}else{
							TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(" + (0.5*0.5)  + ")=" + ((DatoA+DatoB)-(0.5*0.5))
						}
					}
				}
			}
		}
		if (Cuadrado(LadoA)+Cuadrado(LadoB)==Cuadrado(LadoC) && LargadaC.length > LargadaLadoC.length ){ TextoDato = TextoDato; }else{ TextoDato = " No es terna Pitagórica..."; }
		document.getElementById("Resultado1").innerHTML = document.getElementById("Resultado1").innerHTML + "<br>Ángulo Lado A: " + GradoLadoA + "<br>Ángulo Lado B: " + GradoLadoB;
		var Perimetro = LadoA + LadoB + LadoC;
		var Area = (LadoA * LadoB)/2;
		document.getElementById("Resultado1").innerHTML = document.getElementById("Resultado1").innerHTML + "<br>Perimetro: " + Perimetro + " Área: " + Area;
		document.getElementById("Resultado1").innerHTML = document.getElementById("Resultado1").innerHTML + "<br>" + TextoDato;
		var TipoT = "";
		if ( LadoA == LadoB ){ TipoT = "Isósceles"; }else{ TipoT = "Escaleno"; }
		PintarPantalla(TipoT); 
		return 
	}
	if ( parseFloat(ElDato1) != 0 && parseFloat(ElDato3) != 0 && parseFloat(ElDato2) == 0 ){ 
		A = Math.pow(parseFloat(ElDato1),2);
		C = Math.pow(parseFloat(ElDato3),2);
		Sumas = parseFloat(C - A);
		Resultado = Math.sqrt(Sumas);
		document.getElementById("Resultado1").innerHTML = "(C·C)-(A·A)=(B·B)<br>(" + C + ")-(" + A + ")=" + Sumas + " donde " + Sumas + "yRoot2=B=" + Resultado;
		LadoA = parseFloat(ElDato1);
		LadoC = parseFloat(ElDato3);
		LadoB = parseFloat(Resultado);
		if (Number.isNaN(LadoA) == true ){ Cargar(); return; }
		if (Number.isNaN(LadoB) == true ){ Cargar(); return; }
		if (Number.isNaN(LadoC) == true ){ Cargar(); return; }
		var EsTerna = " No es Terna Pitagórica.";
		var LargadaC = "" + Cuadrado(LadoC);
		var LargadaLadoC = "" + LadoC;
		let DatoA = parseFloat(LadoA);
		let DatoB = parseFloat(LadoB);
		let DatoC = 0;
		let TextoDato = "";
		if (Cuadrado(LadoA)+Cuadrado(LadoB)==Cuadrado(LadoC) && LargadaC.length > LargadaLadoC.length ){ EsTerna = " es Terna Pitagórica."; }
		document.getElementById("Resultado1").innerHTML = document.getElementById("Resultado1").innerHTML + '<br><label style="color: yellow;">(' + LadoA + "^2)+(" + LadoB + "^2)=(" + LadoC + "^2)</label>" + EsTerna;
		var GradoLadoB = 0; // Grados(LadoA,LadoB,LadoC);
		var GradoLadoA = 0; // 90 - Grados(LadoA,LadoB,LadoC);
		if (LadoA >= LadoB){
			GradoLadoA = Grados(LadoA,LadoB,LadoC);
			GradoLadoB = 90 - Grados(LadoA,LadoB,LadoC);
			if ( Number.isInteger(DatoA) == true && Number.isInteger(DatoB) == true ) {
				if ((DatoA + DatoB) % 2 != 0 ){
					if (DatoA % 2 != 0){
						TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(" + (DatoB - 2) + ")=" + ((DatoA + DatoB)-(DatoB - 2));
					}else{
						TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(" + (DatoB - 1) + ")=" + ((DatoA + DatoB)-(DatoB - 1));
					}
				}else{
					if ( DatoA % 2 == 0 && DatoB % 2 == 0 ){
						TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(" + (DatoB - (DatoA-DatoB)) + ")=" + ((DatoA + DatoB)-(DatoB - (DatoA-DatoB)));
					}else{
						TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(" + (DatoB - 1) + ")=" + ((DatoA + DatoB)-(DatoB - 1));
					}
				}
			}else{
				if ( Number.isInteger(DatoA) == true ) {
					if ( (DatoA + DatoB) >= 1 ){
						if ((DatoB - 1) % 2 != 0 ){
							if ( DatoB <= 2 ){
								if (DatoA == 1) {
									TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(0.5)=" + ((DatoA + DatoB) - 0.5);
								}else{
									TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(1)=" + ((DatoA + DatoB) - 1);
								}
							}else{
								if (DatoA == 1) {
									TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(0.5)=" + ((DatoA + DatoB) - 0.5);
								}else{
									TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(2)=" + ((DatoA + DatoB) - 2);
								}
							}
						}else{
							TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(2)=" + ((DatoA + DatoB) - 2);
						}	
					}else{
						TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(" + (DatoB - 2) + ")=" + (DatoB - 2);
					}
				}
				if ( Number.isInteger(DatoB) == true ) {
					if ( DatoB == 2  ){
						TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(1.5)=" + ((DatoA + DatoB) - 1.5);
					}else{
						TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(" + ((DatoA + DatoB) - (DatoB -1)) + ")=" + ((DatoA + DatoB) - (DatoB -1));
					}
				}
				if ( Number.isInteger(DatoA) == false && Number.isInteger(DatoB) == false ) {
					if ( DatoA >= 1  ){
						TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(" + (0.5)  + ")=" + ((DatoA+DatoB)-0.5);
					}else{	
						if ((DatoA + DatoB) <= 1 ){
							TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(" + (DatoA * 0.5)  + ")=" + ((DatoA+DatoB)-(DatoA * 0.5));
						}else{
							TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(" + (0.5*0.5)  + ")=" + ((DatoA+DatoB)-(0.5*0.5))
						}
					}
				}
			}
		}else{
			GradoLadoB = Grados(LadoA,LadoB,LadoC);
			GradoLadoA = 90 - Grados(LadoA,LadoB,LadoC);
			if ( Number.isInteger(DatoA) == true && Number.isInteger(DatoB) == true ) {
				if ((DatoA + DatoB) % 2 != 0 ){
					if (DatoB % 2 != 0){
						TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(" + (DatoA - 2) + ")=" + ((DatoA + DatoB)-(DatoA - 2));
					}else{
						TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(" + (DatoA - 1) + ")=" + ((DatoA + DatoB)-(DatoA - 1));
					}
				}else{
					if ( DatoA % 2 == 0 && DatoB % 2 == 0 ){
						TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(" + (DatoA - (DatoB-DatoA)) + ")=" + ((DatoA + DatoB)-(DatoA - (DatoB-DatoA)));
					}else{
						TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(" + (DatoA - 1) + ")=" + ((DatoA + DatoB)-(DatoA - 1));
					}
				}
			}else{
				if ( Number.isInteger(DatoB) == true ) {
					if ((DatoA + DatoB) >= 1 ){
						if ((DatoA - 1) % 2 != 0 ){
							if ( DatoA <= 2 ){
								if (DatoB == 1) {
									TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(0.5)=" + ((DatoA + DatoB) - 0.5);
								}else{
									TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(1)=" + ((DatoA + DatoB) - 1);
								}
							}else{
								if (DatoB == 1) {
									TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(0.5)=" + ((DatoA + DatoB) - 0.5);
								}else{
									TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(2)=" + ((DatoA + DatoB) - 2);
								}
							}	
						}else{
							TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(2)=" + ((DatoA + DatoB) - 2);
						}
					}else{
						TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(" + ((DatoB - 2)) + ")=" + ((DatoB - 2));
					}
				}
				if ( Number.isInteger(DatoA) == true ) {
					if ( DatoA == 2 ){
						TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(1.5)=" + ((DatoA + DatoB) - 1.5);
					}else{
						TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(" + ((DatoA + DatoB) - (DatoA -1)) + ")=" + ((DatoA + DatoB) - (DatoA -1));
					}
				}
				if ( Number.isInteger(DatoA) == false && Number.isInteger(DatoB) == false ) {
					if ( DatoB >= 1  ){
						TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(" + (0.5)  + ")=" + ((DatoA+DatoB)-0.5);
					}else{
						if ((DatoA + DatoB) <= 1 ){
							TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(" + (DatoB * 0.5)  + ")=" + ((DatoA+DatoB)-(DatoB * 0.5));
						}else{
							TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(" + (0.5*0.5)  + ")=" + ((DatoA+DatoB)-(0.5*0.5))
						}
					}
				}
			}
		}
		if (Cuadrado(LadoA)+Cuadrado(LadoB)==Cuadrado(LadoC) && LargadaC.length > LargadaLadoC.length ){ TextoDato = TextoDato; }else{ TextoDato = " No es terna Pitagórica..."; }
		document.getElementById("Resultado1").innerHTML = document.getElementById("Resultado1").innerHTML + "<br>Ángulo Lado A: " + GradoLadoA + "<br>Ángulo Lado B: " + GradoLadoB;
		var Perimetro = LadoA + LadoB + LadoC;
		var Area = (LadoA * LadoB)/2;
		document.getElementById("Resultado1").innerHTML = document.getElementById("Resultado1").innerHTML + "<br>Perimetro: " + Perimetro + " Área: " + Area;
		document.getElementById("Resultado1").innerHTML = document.getElementById("Resultado1").innerHTML + "<br>" + TextoDato;
		var TipoT = "";
		if ( LadoA == LadoB ){ TipoT = "Isósceles"; }else{ TipoT = "Escaleno"; }
		PintarPantalla(TipoT);
		return
	}
	if ( parseFloat(ElDato2) != 0 && parseFloat(ElDato3) != 0 && parseFloat(ElDato1) == 0 ){ 
		B = Math.pow(parseFloat(ElDato2),2);
		C = Math.pow(parseFloat(ElDato3),2);
		Sumas = parseFloat(C - B);
		Resultado = Math.sqrt(Sumas);
		document.getElementById("Resultado1").innerHTML = "(C·C)-(B·B)=(A·A)<br>(" + C + ")-(" + B + ")=" + Sumas + " donde " + Sumas + "yRoot2=A=" + Resultado;
		LadoC = parseFloat(ElDato3);
		LadoB = parseFloat(ElDato2);
		LadoA = parseFloat(Resultado);
		if (Number.isNaN(LadoA) == true ){ Cargar(); return; }
		if (Number.isNaN(LadoB) == true ){ Cargar(); return; }
		if (Number.isNaN(LadoC) == true ){ Cargar(); return; }
		var EsTerna = " No es Terna Pitagórica.";
		var LargadaC = "" + Cuadrado(LadoC);
		var LargadaLadoC = "" + LadoC;
		let DatoA = parseFloat(LadoA);
		let DatoB = parseFloat(LadoB);
		let DatoC = 0;
		let TextoDato = "";
		if (Cuadrado(LadoA)+Cuadrado(LadoB)==Cuadrado(LadoC) && LargadaC.length > LargadaLadoC.length ){ EsTerna = " es Terna Pitagórica."; }
		document.getElementById("Resultado1").innerHTML = document.getElementById("Resultado1").innerHTML + '<br><label style="color: yellow;">(' + LadoA + "^2)+(" + LadoB + "^2)=(" + LadoC + "^2)</label>" + EsTerna;
		var GradoLadoB = 0; // Grados(LadoA,LadoB,LadoC);
		var GradoLadoA = 0; // 90 - Grados(LadoA,LadoB,LadoC);
		if (LadoA >= LadoB){
			GradoLadoA = Grados(LadoA,LadoB,LadoC);
			GradoLadoB = 90 - Grados(LadoA,LadoB,LadoC);
			if ( Number.isInteger(DatoA) == true && Number.isInteger(DatoB) == true ) {
				if ((DatoA + DatoB) % 2 != 0 ){
					if (DatoA % 2 != 0){
						TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(" + (DatoB - 2) + ")=" + ((DatoA + DatoB)-(DatoB - 2));
					}else{
						TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(" + (DatoB - 1) + ")=" + ((DatoA + DatoB)-(DatoB - 1));
					}
				}else{
					if ( DatoA % 2 == 0 && DatoB % 2 == 0 ){
						TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(" + (DatoB - (DatoA-DatoB)) + ")=" + ((DatoA + DatoB)-(DatoB - (DatoA-DatoB)));
					}else{
						TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(" + (DatoB - 1) + ")=" + ((DatoA + DatoB)-(DatoB - 1));
					}
				}
			}else{
				if ( Number.isInteger(DatoA) == true ) {
					if ( (DatoA + DatoB) >= 1 ){
						if ((DatoB - 1) % 2 != 0 ){
							if ( DatoB <= 2 ){
								if (DatoA == 1) {
									TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(0.5)=" + ((DatoA + DatoB) - 0.5);
								}else{
									TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(1)=" + ((DatoA + DatoB) - 1);
								}
							}else{
								if (DatoA == 1) {
									TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(0.5)=" + ((DatoA + DatoB) - 0.5);
								}else{
									TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(2)=" + ((DatoA + DatoB) - 2);
								}
							}
						}else{
							TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(2)=" + ((DatoA + DatoB) - 2);
						}	
					}else{
						TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(" + (DatoB - 2) + ")=" + (DatoB - 2);
					}
				}
				if ( Number.isInteger(DatoB) == true ) {
					if ( DatoB == 2  ){
						TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(1.5)=" + ((DatoA + DatoB) - 1.5);
					}else{
						TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(" + ((DatoA + DatoB) - (DatoB -1)) + ")=" + ((DatoA + DatoB) - (DatoB -1));
					}
				}
				if ( Number.isInteger(DatoA) == false && Number.isInteger(DatoB) == false ) {
					if ( DatoA >= 1  ){
						TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(" + (0.5)  + ")=" + ((DatoA+DatoB)-0.5);
					}else{	
						if ((DatoA + DatoB) <= 1 ){
							TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(" + (DatoA * 0.5)  + ")=" + ((DatoA+DatoB)-(DatoA * 0.5));
						}else{
							TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(" + (0.5*0.5)  + ")=" + ((DatoA+DatoB)-(0.5*0.5))
						}
					}
				}
			}
		}else{
			GradoLadoB = Grados(LadoA,LadoB,LadoC);
			GradoLadoA = 90 - Grados(LadoA,LadoB,LadoC);
			if ( Number.isInteger(DatoA) == true && Number.isInteger(DatoB) == true ) {
				if ((DatoA + DatoB) % 2 != 0 ){
					if (DatoB % 2 != 0){
						TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(" + (DatoA - 2) + ")=" + ((DatoA + DatoB)-(DatoA - 2));
					}else{
						TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(" + (DatoA - 1) + ")=" + ((DatoA + DatoB)-(DatoA - 1));
					}
				}else{
					if ( DatoA % 2 == 0 && DatoB % 2 == 0 ){
						TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(" + (DatoA - (DatoB-DatoA)) + ")=" + ((DatoA + DatoB)-(DatoA - (DatoB-DatoA)));
					}else{
						TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(" + (DatoA - 1) + ")=" + ((DatoA + DatoB)-(DatoA - 1));
					}
				}
			}else{
				if ( Number.isInteger(DatoB) == true ) {
					if ((DatoA + DatoB) >= 1 ){
						if ((DatoA - 1) % 2 != 0 ){
							if ( DatoA <= 2 ){
								if (DatoB == 1) {
									TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(0.5)=" + ((DatoA + DatoB) - 0.5);
								}else{
									TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(1)=" + ((DatoA + DatoB) - 1);
								}
							}else{
								if (DatoB == 1) {
									TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(0.5)=" + ((DatoA + DatoB) - 0.5);
								}else{
									TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(2)=" + ((DatoA + DatoB) - 2);
								}
							}	
						}else{
							TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(2)=" + ((DatoA + DatoB) - 2);
						}
					}else{
						TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(" + ((DatoB - 2)) + ")=" + ((DatoB - 2));
					}
				}
				if ( Number.isInteger(DatoA) == true ) {
					if ( DatoA == 2 ){
						TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(1.5)=" + ((DatoA + DatoB) - 1.5);
					}else{
						TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(" + ((DatoA + DatoB) - (DatoA -1)) + ")=" + ((DatoA + DatoB) - (DatoA -1));
					}
				}
				if ( Number.isInteger(DatoA) == false && Number.isInteger(DatoB) == false ) {
					if ( DatoB >= 1  ){
						TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(" + (0.5)  + ")=" + ((DatoA+DatoB)-0.5);
					}else{
						if ((DatoA + DatoB) <= 1 ){
							TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(" + (DatoB * 0.5)  + ")=" + ((DatoA+DatoB)-(DatoB * 0.5));
						}else{
							TextoDato = "C=(" + DatoA + "+" + DatoB + ")-(" + (0.5*0.5)  + ")=" + ((DatoA+DatoB)-(0.5*0.5))
						}
					}
				}
			}
		}
		if (Cuadrado(LadoA)+Cuadrado(LadoB)==Cuadrado(LadoC) && LargadaC.length > LargadaLadoC.length ){ TextoDato = TextoDato; }else{ TextoDato = " No es terna Pitagórica..."; }
		document.getElementById("Resultado1").innerHTML = document.getElementById("Resultado1").innerHTML + "<br>Ángulo Lado A: " + GradoLadoA + "<br>Ángulo Lado B: " + GradoLadoB;
		var Perimetro = LadoA + LadoB + LadoC;
		var Area = (LadoA * LadoB)/2;
		document.getElementById("Resultado1").innerHTML = document.getElementById("Resultado1").innerHTML + "<br>Perimetro: " + Perimetro + " Área: " + Area;
		document.getElementById("Resultado1").innerHTML = document.getElementById("Resultado1").innerHTML + "<br>" + TextoDato;
		var TipoT = "";
		if ( LadoA == LadoB ){ TipoT = "Isósceles"; }else{ TipoT = "Escaleno"; }
		PintarPantalla(TipoT);
		return 
	}	
	Cargar();
}
function CalcularTeoremaPol(){
	var ElDato1 = parseFloat(document.getElementById("ElInput4").value);
	var ElDato2 = parseFloat(document.getElementById("ElInput5").value);
	//var ElDato3 = parseFloat(document.getElementById("ElInput6").value);
	if (ElDato1 < 0 ) { ElDato1 = ElDato1 - ElDato1 - ElDato1; }
	if (ElDato2 < 0 ) { ElDato2 = ElDato2 - ElDato2 - ElDato2; }
	
	var A = 0;
	var B = 0;
	var C = 0;
	var D = 0;
	if (ElDato1 >= 1 && ElDato2 >= 1){
		A = Antecuadrado(ElDato1);
		B = Antecuadrado(ElDato1 - 1);
		if (A < 0 ) { A = A - A - A; }
		if (B < 0 ) { B = B - B - B; }
		
		C = Antecuadrado(ElDato2);
		D = Antecuadrado(ElDato2 - 1);
		if (C < 0 ) { C = C - C - C; }
		if (D < 0 ) { D = D - D - D; }
	}else{
		if (ElDato1 >= 1 ){
			A = Antecuadrado(ElDato1);
			B = Antecuadrado(ElDato1 - 1);
			if (A < 0 ) { A = A - A - A; }
			if (B < 0 ) { B = B - B - B; }
		}else{
			A = Antecuadrado(ElDato1);
			B = Antecuadrado(ElDato1 - 1);
		}
		if (ElDato2 >= 1 ){
			C = Antecuadrado(ElDato2);
			D = Antecuadrado(ElDato2 - 1);
			if (C < 0 ) { C = C - C - C; }
			if (D < 0 ) { D = D - D - D; }
		}else{
			C = Antecuadrado(ElDato2);
			D = Antecuadrado(ElDato2 - 1);
		}	
	}
	
	var Sumas = A + B + C + D;

	if (Sumas < 0 ) { Sumas = Sumas - Sumas - Sumas; }
	
	var Resultado = Math.sqrt(Sumas);
	
	document.getElementById("Resultado2").innerHTML = "Terna Polidiana: (" + A + "+" + B + ")+(" + C + "+" + D + ")=(" + (A+B) + "+" + (C+D) + ")" ;			
}
function Grados(LadoA,LadoB,Hipotenusa){
	return 90 * ((LadoB/Hipotenusa)*(LadoA/Hipotenusa));
}
function Cuadrado(Numero){
	return Numero*Numero;
}
function Antecuadrado(Numero){
	return Numero * ((Numero / 2)+0.5);
}
function PorUnidaje(Cuantia,Tamano,Escala){
	return (Cuantia*Escala)/Tamano;
}
function Ir1(){
	document.getElementById("Pantalla1").style = "display: inline-block;";
	document.getElementById("Pantalla2").style = "display: none;";
	document.getElementById("Pantalla3").style = "display: none;";
	document.getElementById("Pantalla4").style = "display: none;";
}
function Ir2(){
	document.getElementById("Pantalla1").style = "display: none;";
	document.getElementById("Pantalla2").style = "display: inline-block;";
	document.getElementById("Pantalla3").style = "display: none;";
	document.getElementById("Pantalla4").style = "display: none;";
}
function Ir3(){
	document.getElementById("Pantalla1").style = "display: none;";
	document.getElementById("Pantalla2").style = "display: none;";
	document.getElementById("Pantalla3").style = "display: inline-block;";
	document.getElementById("Pantalla4").style = "display: none;";
}
function Ir4(){
	document.getElementById("Pantalla1").style = "display: none;";
	document.getElementById("Pantalla2").style = "display: none;";
	document.getElementById("Pantalla3").style = "display: none;";
	document.getElementById("Pantalla4").style = "display: inline-block;";
}