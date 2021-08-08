// comece a criar a sua função add na linha abaixo
function add(a, b) {

    let resul = a + b
    return resul
}
console.log(add(3,5))
// descomente a linha seguinte para testar sua função
//console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');

// comece a criar a sua função multiply na linha abaixo
function multiply(c, d) {

    let resul = c
    for (let i = 1; i < d; i++) {
        resul = add(c, resul);
    }

    return resul
}
console.log(multiply(4,6));

// descomente a linha seguinte para testar sua função
// console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
function power(x, n) {

    let resul = x
    for (let i = 1; i < n; i++) {
        resul = multiply(x, resul)
    }
    return resul
}
console.log(power(3,4))

// descomente a linha seguinte para testar sua função
// console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial(f) {

    let result = f
    for (let i = f - 1; i > 0; i--) {
        result = multiply(result, i)
    }
    return result
}
console.log(factorial(5))

// descomente a linha seguinte para testar sua função
// console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci
function fibonacci(f) {

    let x = 1
    let y = 0
    let resul

    for (let i = 1; i < f; i++) {
        resul = add(y, x)
        y = x
        x = resul
    }
    return resul
}
console.log(fibonacci(7))

// descomente a linha seguinte para testar sua função
// console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
