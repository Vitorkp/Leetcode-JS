/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    // Agenda a execução de fn(...args) após 't' milissegundos
    const timerId = setTimeout(() => {
        fn(...args);
    }, t);

    // Retorna a função de cancelamento que limpa o timer se for chamada antes de 't'
    return function cancelFn() {
        clearTimeout(timerId);
    };
};