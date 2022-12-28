
const esNumero = (textoValor) => {
    if(textoValor!=="" && textoValor!==null && !isNaN(textoValor)){
        return true;
    }else{
        return false;
    }
}


const alerta= (parametro) => {
    let mensaje = `[${parametro}] no es un número válido`;
    return mensaje;
}


/**
 * Ej.3 Escribir un programa en el cual se ingresen cuatro números, calcular e informar la suma de los dos primeros y el producto del tercero y el cuarto.
 *  
 */


const b3 = document.querySelector("#b_ej3");


b3.onclick = () => {
    let n1,n2,n3,n4;

    n1 = prompt("Número 1");
    if(esNumero(n1)){
       n2 = prompt("Número 2");
       if(esNumero(n2)){
        n3 = prompt("Número 3");
         if(esNumero(n3)){
            n4 = prompt("Número 4");
            if(esNumero(n4)){
                //Es que todo son números
                let res3 = document.querySelector("#r_ej3");
                res3.innerHTML = `<div>${n1}+${n2}=${Number(n1)+Number(n2)}<br>${n3}*${n4}=${n3*n4}<div>`;
            }else{
                alert(alerta(n4));
            }
         }else{
            alert(alerta(n3));
         }

       }else{
         alert(alerta(n2));
       }
    }else{
        alert(alerta(n1));   
    }
}

/**
 * 5. Realizar un programa que lea cuatro valores numéricos enteros y cuente cuántos son positivos o negativos.
 */
//Capturar el botón

document.querySelector("#b_ej5").onclick = () => {
   let pos = neg = cero = 0;
   let num1 = prompt("Número 1");
   let num2 = prompt("Numero 2");
   let num3 = prompt("Número 3");
   let num4 = prompt("Número 4");

   if(esNumero(num1) && esNumero(num2) && esNumero(num3) && esNumero(num4)){
    //Convierto los string en number
    num1 = Number(num1);
    num2 = Number(num2);
    num3 = Number(num3);
    num4 = Number(num4);
    //Mirar is num1 es negativo positivo o cero
    if(num1>0){
        pos++; //pos = pos +1
    }else if(num1<0){
       neg++; 
    }else{
        cero++;
    }

    //Mirar is num2 es negativo positivo o cero
    if(num2>0){
        pos++; //pos = pos +1
    }else if(num2<0){
       neg++; 
    }else{
        cero++;
    }

    //Mirar is num3 es negativo positivo o cero
    if(num3>0){
        pos++; //pos = pos +1
    }else if(num3<0){
       neg++; 
    }else{
        cero++;
    }

    //Mirar is num4 es negativo positivo o cero
    if(num4>0){
        pos++; //pos = pos +1
    }else if(num4<0){
       neg++; 
    }else{
        cero++;
    }


    //Mostrar resultados
    document.getElementById("r_ej5").innerHTML = 
    `<p>[${num1},${num2},${num3},${num4}]: Positivos: ${pos}, Negativos: ${neg}, Ceros: ${cero}</p>`




   }else{
     alert(`Todos los valores tienen que ser numéricos:\n ${num1},${num2},${num3},${num4}`);
   }



}