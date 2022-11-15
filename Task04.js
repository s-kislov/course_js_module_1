
const totalPrice = 0;
const countProduct = 0;
const baseSale = 30_000;
const promocode1 = "";
const promocode2 = "";

function calculate(totalPrice, countProduct, promocode1, promocode2) {
    switch (true) {
        case countProduct > 10:
            return totalPrice = totalPrice - (totalPrice * 0.03);
        case totalPrice >= baseSale:
            return totalPrice = baseSale - (totalPrice - baseSale) * 0.15;
        case promocode1 === "METHED":
            return totalPrice = totalPrice - (totalPrice * 0.1);
        case promocode2 === "G3H2Z1" && totalPrice > 2000:
            return totalPrice = totalPrice - 500;
    }

    return totalPrice;
}

console.log(calculate(2500, 11,"METHED", "G3H2Z1"));