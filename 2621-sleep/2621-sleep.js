/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    // Retorna uma Promise que aguarda a quantidade especificada de milissegundos usando setTimeout
    return new Promise(resolve => setTimeout(resolve, millis));
}