
{
    const nameGoods = prompt("Введите наименование товара", "");
    const countGoods = +prompt("Введите количество товара", ""); // шт
    const categoryGoods = prompt("Введите категорию товара", "");
    const categoryPrice = +prompt("Введите стоимость товара", ""); // ₽

    console.log(nameGoods);
    console.log(categoryGoods);
    console.log("Общая сумма товаров: " + (countGoods * categoryPrice));
}
