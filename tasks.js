const rain = Math.round(Math.random());

if (1 === rain) {
    console.log("Дождь есть!");
} else if (0 === rain) {
    console.log("Дождичка нет!");
}


const mathScore = +prompt("Количество баллов по математике", "0");
const rusLangScore = +prompt("Количество баллов по русскому языку", "0");
const informScore = +prompt("Количество баллов по информатике", "0");
const enterScore = (mathScore + rusLangScore + informScore);

const answerUniversity = enterScore >= 265 ? "Вы поступили на бюджет!" : "Придётся заплатить!";
console.log(answerUniversity);

const withdrawalMoney = +prompt("Какую сумму вы планируете снять?");
const atm = 100;
const cash = withdrawalMoney / atm;

if (withdrawalMoney % atm === 0) {
    console.log(`Сейчас выдам ${cash} купюр.`)
} else {
    console.log(`Введите сумму кратную ${atm} рублям!`)
}