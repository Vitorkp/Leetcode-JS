/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let called = false; // Variável para controlar se a função já foi chamada
    let result;         // Armazena o resultado da primeira chamada

    return function(...args){
        if (!called) {
            called = true;             // Marca que foi chamada
            result = fn(...args);      // Executa a função original e guarda o resultado
            return result;             // Retorna o resultado da primeira chamada
        }
        return undefined;              // Nas chamadas seguintes, retorna undefined
    }
};