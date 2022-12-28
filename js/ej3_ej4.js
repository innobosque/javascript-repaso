/**
 * Ej. Escribir un programa en el cual se ingresen cuatro números, calcular e informar la suma de los dos primeros y el producto del tercero y el cuarto.
 *  
 */


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
