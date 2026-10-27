/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const filteredArr = [];
    
    for (let i = 0; i < arr.length; i++) {
        // Se a função retornar um valor "truthy", adicionamos o elemento ao novo array
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }
    
    return filteredArr;
};