/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    return function(x) {
        let res = x;
        
        // Percorremos o array de funções da direita para a esquerda
        for (let i = functions.length - 1; i >= 0; i--) {
            res = functions[i](res);
        }
        
        return res;
    };
};