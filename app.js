const numeroUsuario = prompt("Ingrese número entre 1 y 20");

const factorial = (numero) => {
    if( numero <= 1 ) return 1
    return numero * factorial(numero - 1)
}

const main = numero => {
    if(isNaN(numero))
    {
        console.log('numero no valido');
        return;
    }

    if(numero < 1 || numero > 20)
    {
        console.log('numero fuera de rango');
        return;
    }

    for(let i = 1; i <= numero; i++){
        console.log(`${i} x ${numero} = ${i*numero}`)
    }

    for(let i =1; i <= numero; i++){
        console.log(`El factorial de ${i} es igual a: ${factorial(i)}`)
    }
}

main(numeroUsuario)