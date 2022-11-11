const salary = +prompt("Укажите ваш заработок");

let tax13 = 15_000 * 0.13;
let tax20 = 0;
let tax30 = 0;


switch (salary !== 0) {
    case salary < 15_000:
        console.log(salary * 0.13);
        break;
    case salary >= 15_000 && salary < 50_000:
        tax20 = salary - 15_000;
        console.log(tax20 * 0.2 + tax13);
        break;
    case salary > 50_000:
        tax30 = salary - 15_000;
        console.log(tax30 * 0.3 + tax13);
        break;
}
