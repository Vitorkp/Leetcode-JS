/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = {}; // Objeto para armazenar os resultados já calculados

    return function(...args) {
        const key = JSON.stringify(args); // Converte os argumentos em string para usar como chave

        if (key in cache) {
            return cache[key]; // Se já foi calculado, retorna o valor do cache sem chamar a função
        }

        const result = fn(...args); // Se não existe, executa a função original
        cache[key] = result;        // Salva o resultado no cache
        return result;              // Retorna o resultado
    }
}