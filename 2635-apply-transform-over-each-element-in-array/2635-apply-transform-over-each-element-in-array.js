/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const returnedArray = new Array(arr.length);
    
    for (let i = 0; i < arr.length; i++) {
        returnedArray[i] = fn(arr[i], i);
    }
    
    return returnedArray;
};

/** Em vez de declarar um array vazio e ir adicionando elementos com .push() eu já pré-aloquei o tamanho exato do array usando o tamanho do array original **/