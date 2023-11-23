// # incrementa en 1
// @ decrementa en 1
// * multiplica el valor por si mismo
// & imprime el valor actual en consola

let valor = 0;
let values = [];
const secret = "&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&"

for (let i = 0; i < secret.length; i++) {
    if (secret[i] === "#") {
        valor++;
    } else if (secret[i] === "@") {
        valor--;
    }
    else if (secret[i] === "*") {
        valor *= valor;
    }
    else if (secret[i] === "&") {
        values.push(valor);
    }
}

valor = values.join("");
console.log(valor);
