
const salary = +prompt("Укажите ваш заработок");

switch (salary !== 0) {
    case salary < 15_000:
        console.log(salary * 0.13);
        break;
    case salary >= 15_000 && salary <= 50_000:
        console.log(salary * 0.2);
        break;
    case salary > 50_000:
        console.log(salary * 0.3);
        break;
}