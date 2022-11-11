

    const nameGoods = prompt("Введите наименование товара", "");
    const countGoods = +prompt("Введите количество товара", ""); // шт

    if (isNaN(countGoods)) {
        alert("Введите число");
        const countGoods = +prompt("Введите количество товара", ""); // шт
    }

    const categoryGoods = prompt("Введите категорию товара", "");
    const categoryPrice = +prompt("Введите стоимость товара", ""); // ₽
    if (isNaN(categoryPrice)) {
        alert("Введите число");
        const categoryPrice = +prompt("Введите стоимость товара", ""); // ₽
    }

    console.log(nameGoods);
    console.log(categoryGoods);
    console.log("Общая сумма товаров: " + (countGoods * categoryPrice));

