
let text = "привЕт миР";


const textNew = function change() {
    text = text[0].toUpperCase() + text.slice(1, text.length).toLowerCase();

    return text;
}


console.log(textNew());