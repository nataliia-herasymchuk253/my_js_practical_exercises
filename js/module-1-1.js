//1. Створіть змінну з ім'ям name і присвойте їй ваше ім'я. Виведіть це ім'я в консоль.
// let Name = "Nataliy";
// console.log(Name);

//2. Створіть змінну age і присвойте їй ваш вік. Виведіть в консоль рядок, що містить ваш вік у такому форматі: "Мені {вік} років".
// let age = 41;
//console.log("Мені " + age + " років");

//3. Створіть змінні x і y і присвойте їм довільні числа. Виведіть в консоль результати додавання, віднімання, множення та ділення цих чисел.
// let x = 2;
// let y = 3;
//console.log(x + y);
//console.log(x - y);
//console.log(x * y);
//console.log(x / y);

//4. Створіть змінну city і присвойте їй назву вашого міста. Створіть рядок, який містить "Я живу в місті {назва міста}", і виведіть його в консоль.
// let city = "Odessa";
// let message = `Я живу в місті ${city}`;
//console.log(message);

// 5.Створіть рядок з вашою електронною поштою. Використайте методи рядка, щоб витягнути ваше ім'я та доменну частину. Виведіть обидва ці значення в консоль.
// const email = "nataliya@gmail.com";
// const namePart = email.substring(0, email.indexOf("@"));
// const domainPart = email.substring(email.indexOf("@") + 1);

// console.log("Ім'я:", namePart);
// console.log("Доменна частина:", domainPart);

//6.Створіть змінну price і присвойте їй число. Створіть рядок, що містить ціну з символом гривні, наприклад: "Ціна: 500 грн".

// let price = 500;
// let message = `Ціна: ${price}грн.`;
// console.log(message);

//7.Створи дві змінні firstName і lastName.
// Присвой їм своє ім'я та прізвище.
// Обєднай ці два рядки в один, з пробілом між ними. Запиши результат в змінну fullName.
// Виведи fullName в консоль.

// let firstName = "Nataliy";
// let lastName = "Gerasymchuk";
// let fullName = `${firstName} ${lastName}`;
// let fullName = firstName + " " + lastName;
// console.log(fullName);

//8.Створи дві змінні a і b, присвой їм якісь цілі числа.
// Виконай над ними додавання, віднімання, множення і ділення.
// Запиши результати в змінні sum, difference, product, quotient.
// Виведи всі ці результати в консоль.

// let a = 2;
// let b = 7;
// let sum = a + b;
// let difference = a - b;
// let product = a * b;
// let quotient = a / b;

// console.log(sum);
// console.log(difference);
// console.log(product);
// console.log(quotient);

// 9.Створи змінну radius і присвой їй деяке значення (наприклад, 5).
// Використай формулу площі кола (π * r²) для обчислення площі кола з радіусом, який було встановлено.
// Використовуй значення π = 3.14. Запиши результат у змінну area.
// Виведи area в консоль.

// let radius = 5;
// let Pi = 3.14;
// let area = Pi * (radius * radius);
// console.log(area);

// 10.Створи змінну someString і присвой їй будь-який рядок.
// Обчисли довжину цього рядка, використовуючи властивість .length.
// Виведи довжину рядка в консоль.
// let someString = "Happy New Year";
// console.log(someString.length);

//11.Створи змінну someString і присвой їй будь-який рядок.
// Створи змінну firstLetter і присвой їй першу літеру рядка someString.
// Створи змінну lastLetter і присвой їй останню літеру рядка someString.

// let someString = "Happy New Year";
// let firstLetter = someString[0];
// let lastLetter = someString[someString.length - 1];
// console.log(firstLetter);
// console.log(lastLetter);

//12.Створи дві змінних str1 та str2.
// Отримай з кожної змінної останню літеру
// Створи третю змінну де обєднай попередні літери
// Приклад: для рядків "HELLO" та "WORLD" результатом буде рядок "OD"

// let first = "str1";
// let second = "str2";
// let lastLetters1 = first[first.length - 1];
// let lastLetters2 = second[second.length - 1];
// let three = lastLetters1 + lastLetters2;
// console.log(three);

//13.Створи змінну userValue та запиши до неї будь-яке число.

// Створи нову змінну до якої потрібно записати результат математичної операції а саме:
// userValue помножити на число 5 у степені (кількість цифр у змінній userValue).

// Приклади:
// для числа 1 = 1 * 5^1 = 5;
// для числа 2 = 2 * 5^1 = 10;
// для числа 12 = 12 * 5^2 = 300;
// для числа 512 = 512 * 5^3 = 64000;

// let userValue = 512;

// let totalNumber = userValue.toString().length;
// let result = userValue * Math.pow(5, totalNumber);
// console.log(result);

//14.Виведіть на екран загальну кількість яблок і винограду. Різницю яблока і винограду теж виведіть у консоль.

// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total);
// const diff = grapes - apples;
// console.log(diff);
//15. Замінити вираз перевизначення комбінованим оператором `+=`.
// let students = 100;
// students = students + 50;
// console.log(students);

// let students = 100;
// students += 50;
// console.log(students);

//16. Розбери пріоритет операторів в інструкції визначення значення змінної
//`result`.

// const result = 108 + 223 - 2 * 5;
// console.log(result);
//17.Склади фразу за допомогою шаблонних рядків `A has B bots in stock`, де A, B -
// змінні вставлені у рядок.

// const companyName = "Cyberdyne Systems";
// const repairBots = 150;
// const defenceBots = 50;
// let totalBots = repairBots + defenceBots;
// const message = `${companyName} has ${totalBots} bots in stock`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"
