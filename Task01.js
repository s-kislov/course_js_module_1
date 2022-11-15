
const money = 100; //входная сумма для конвертера
const eur = 1.2; //usd
const usd = 64; //₽

const exchange = function getMoney() {
    return money * eur * usd;
}
console.log(exchange());
