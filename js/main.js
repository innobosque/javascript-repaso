const btn1 = document.getElementById("b_ej1"); //objeto

//dispatch //event

// function calcularPerimetro(){}









const calcularPerimetro = (a) => {
    
    const lado = prompt("Dame un lado de un cuadrado");
    if(lado===null){
        return;
    }
    const r1 = document.getElementById("r_eje1");
    
    let l = Number(lado);
    let mensaje = `Perimetro(${lado})=${l*4}`;
    
    // console.log(mensaje);
    r1.textContent = mensaje;
    
}
btn1.onclick = calcularPerimetro;






/*
Funcuión que calcula el área de un triángulo
*/

const calcularAreaTriangulo= (base,altura) => {
    let resultado = (base*altura)/2;
    // console.log(resultado);
    return resultado; 
}





const btn2 = document.querySelector("#b_ej2");
//Capturo el envento del botón click o cuando pulso el botón
btn2.onclick =  () => {
    const longitud = prompt("Dame una longitud");
    if(longitud===null){
        return;
    }

    const base = prompt("Dame una base");
    if(base===null){
        return;
    }

    //longitud y base tienen string
    //Voy a comprobar si el string es número
    if(isNaN(longitud)){
        alert(`Formato numérico no válido [${longitud}]`)
        return;
    }

    if(isNaN(base)){
        alert(`Formato numérico no válido [${base}]`)
        return;
    }

    //A partir de aquí tengo dos números si o si
    let long = Number(longitud);
    let b = Number(base);

    let miResultado = calcularAreaTriangulo(b,long);

    const resEl = document.getElementById("r_ej2");

    resEl.innerHTML = `<div>${base}*${longitud}/2=<strong>${miResultado}</strong></div>`;



    
}



