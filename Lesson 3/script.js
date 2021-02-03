// Homework lesson 3 task 1
console.log('Homework lesson 3 task 1')
// заполняем массив целыми числами от 2 до 100
var arr = [];

for (var i = 2; i < 100; i++) {
    arr[i] = true;
}

// объявляем переменную с первым простым числом
var p = 2;

do {
    // обозначаем составные числа - false
    for (i = 2 * p; i < 100; i += p) {
        arr[i] = false;
    }

    for (i = p + 1; i < 100; i++) {
        if (arr[i]) break;
    }

    p = i;
} while (p * p < 100);

var j = 0;

// выводим простые числа
while (j < arr.length) {
    j++;

    if (arr[j] === true) {
        console.log(j);
    }
}

// Homework lesson 3 task 2
console.log('Homework lesson 3 task 2')

var product1 = ['футболка', 'nike', 'муж', 3000];
var product2 = ['майка', 'reebok', 'жен', 3500];
var product3 = ['толстовка', 'reebok', 'жен', 5000];
var cart = [];

// добавляем продукт в корзину

function addToCart(item) {

    if (cart.includes(item)) {
        console.log('Товар есть в корзине');
        return cart;
    }
    else {
        cart.push(item);
        console.log(item[0] + ' добавлена в корзину');
        return cart;
    }

}

// удаляем продукт из корзины

function removeCart(item) {
    cart.pop(item);

    console.log('Товар удален из корзины' + '\n' + 'В корзине: ' + cart.length + ' товар(а)');

    return cart;
}

// подсчет суммы корзины

function countBasketPrice() {
    var total = 0;

    for (i = 0; i < cart.length; i++) {
        total += cart[i][3];
    }

    var result = console.log('Общая стоимость ' + total + ' руб');

    return result;
}

console.log('Homework lesson 3 task 3')

for (var i = 0; i < 10; console.log(i++)) { }

console.log('Homework lesson 3 task 4')

var x = '';

for (i = 0; i < 20; i++) {
    x += 'x';

    console.log(x);
}