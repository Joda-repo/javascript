//var userName = 'Va1sya';
//let b = 2;
//const c = 3; 
//console.log(userName);
//console.log('1' + '1')

// Homework Lesson_2_task_1
console.log("Homework Lesson_2_task_1");
var a = 1;
var b = 1;
var c;
var d;
c = ++a; console.log("Строка 1", c);           // 2 В строке префиксная форма ++а увеличивает а и возвращает новое значение.
d = b++; console.log("Строка 2", d);           // 1 В строке постфиксная форма а++ также увеличивает а, но возвращает старое значение (которое было до увеличения).
c = (2 + ++a); console.log("Строка 3", c);     // 5 так как была префиксная форма "а" , а значит значение сохранилось и к нему прибавили 2+1 = 3. с = 2 + 3 = 5.
d = (2 + b++); console.log("Строка 4", d);     // 4 так как была постфиксная форма b++ значение равно 2, *после выполнения 3*, поэтому 2 + 2 = 4.
console.log("Строка 5", a);                    // 3 префиксная форма как в предыдущем примера равна 3, что возвратило, с тем и пошло.
console.log("Строка 6", b);                    // 3 постфиксная форма равна 3, так как после выполнения в предыдущем значение изменилось и стало равно 3.


// Homework Lesson_2_task_2 
console.log("Homework Lesson_2_task_2");
var a = 2;
var x = 1 + (a *= 2); // работает как а * 2, а= 2 * 2 = 4, х = 4 + 1.

console.log("Строка 7", x);

// Homework Lesson_2_task_3
console.log("Homework Lesson_2_task_3");

var a = 2
var b = 3

function Check(a, b) {
    (a >= 0 && b >= 0) ? (console.log(a - b)) : (a < 0 && b < 0) ? (console.log(a * b)) : ((a < 0 && b > 0) || (a > 0 && b < 0)) ? console.log(a + b) : (console.log('Значение не отвечает условиям задачи'));
}

Check(a, b);

// Homework Lesson_2_task_4
console.log("Homework Lesson_2_task_4");

var number = 3

function Array(number) {
    switch (true) {
        case (number <= 15): console.log(number); Array(++number);
    }
}

Array(number)

// Homework Lesson_2_task_5
console.log("Homework Lesson_2_task_5");

function addition(a, b) {
    return (a + b)
}
function subtraction(a, b) {
    return (a - b)
}

function multiplication(a, b) {
    return (a * b)
}

function division(a, b) {
    return (a / b)
}

console.log(addition(a, b))
console.log(subtraction(a, b))
console.log(multiplication(a, b))
console.log(division(a, b))

// Homework Lesson_2_task_5
console.log("Homework Lesson_2_task_6");
var a = 2
var b = 3
operation = 'division'
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "addition": return (addition(arg1, arg2));
        case "subtraction": return (subtraction(arg1, arg2));
        case "multiplication": return (multiplication(arg1, arg2));
        case "division": return (division(arg1, arg2));
    }
}

console.log(mathOperation(a, b, operation))
