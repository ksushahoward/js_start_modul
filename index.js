// const age = 10;
// const totalPrice = 200.74;
// const userName = 'Chelsy';
// const message = 'Добро пожаловать!';
// const isOpen = true;
// const shouldConfirm = false;

// console.log('price', totalPrice);

// const type = typeof isOpen;

// console.log('do');

// alert('qweqwe');

// console.log('posle');

// const shouldRenew = confirm('хотите продлить подписку?');
// console.log(shouldRenew);

// let quantity = prompt('введите количество товара');
// quantity = Number(quantity);
// console.log(quantity);
// console.log(typeof quantity);

// let elementWidth = '50px';
// elementWidth = Number.parseInt(elementWidth);
// console.log('elementWidth: ', elementWidth);

// let elementHeight = '200.74px';
// elementHeight = Number.parseFloat(elementHeight);
// console.log(elementHeight);

// let salary = 1300.16472;
// salary = Number(salary.toFixed(3));
// console.log(salary);

// let quantity = '30';
// let value = 'эту строку невозможно привести к числу';

// console.log(Number(quantity));
// console.log(Number(value));

// const base = 5;
// const power = 5;

// const result = Math.pow(base, power);
// console.log(base ** power);

// let base = prompt('Давай число');
// base = Number(base);

// console.log(base);

// let power = prompt('Давай степень');
// power = Number(power);

// console.log(power);

// const result = base ** power;
// console.log(result);

// const max = 50;
// const min = 30;

// const result = Math.random() * (max - min) + min;

// console.log(Math.round(result));

// const message = 'В этой строке 26 символfffffов.';

// console.log(message.length);

// const firstName = 'Chelsy';
// const lastName = 'Emerald';
// const fullName = firstName + ' ' + lastName;
// console.log(fullName);

// const room = 716;
// const type = 'VIP';

// const welcomeMsg = `Гость ${firstName} ${lastName} поселяется в номер ${room} ${type}
// `;
// console.log(welcomeMsg);

// let brand = prompt('brand');
// brand = brand.toLowerCase();

// console.log(brand);
// const inDb = 'samsung';

// let brand = 'samSUnG';
// console.log(brand[4]);
// console.log(brand.slice(1).toLowerCase());

// brand = brand[0] + brand.slice(1).toLowerCase();
// console.log(brand);

// const blacklistWord1 = 'спам';
// const blacklistWord2 = 'распродажа';

// const string1 = 'Привет я принц Абдул, это не спам, предлагаю тебе миллион';
// const string2 = 'Самая большая РАСПРОДАЖА этой недели, не пропустите!';
// const string3 = 'Рекламная компания #fatlivesmatter';

// console.log(string1.includes(blacklistWord1));
// console.log(string1.includes(blacklistWord2));

// console.log(string2.includes(blacklistWord1));
// console.log(string2.toLowerCase().includes(blacklistWord2));

// console.log(string3.includes(blacklistWord1));
// console.log(string3.includes(blacklistWord2));

// console.log(10 > 5);

// const isEqual = true === 1;

// console.log(isEqual);

// console.log(Boolean(0));

// console.log(5 && 6 && 8 && 'hghghghgh');

// console.log(false || 0 || false || 9 || 0);

// console.log(!false);

// const x1 = 10;
// const x2 = 30;
// const number = 58;

// console.log(`Число ${number} попадает в отрезок до ${x1}? `, number < x1);
// console.log(`Число ${number} попадает в отрезок после ${x2}? `, number > x2);

// const result = number < x1 || number > x2;
// console.log(
//   `Число ${number} попадает в отрезок до ${x1} или после ${x2}? `,
//   result,
// );

// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// const canOpenChat = isOnline && isFriend && !isDnd;
// console.log('Можно открыть чат? ', canOpenChat);

// const sub = 'vip';

// const canAccessContent = sub === 'pro' || sub === 'vip';
// console.log('Есть доступ к контенту? ', canAccessContent);

// if (5 > 30) {
//   console.log('qweqwe');
// }
// console.log('123123');

// if (5 > 30) {
//   console.log('x > y');
// } else {
//   console.log('x < y');
// }

// const salary = 2500;

// if (salary < 500) {
//   console.log('Уровень 1');
// } else if (salary > 50 && salary < 1500) {
//   console.log('Уровень 2');
// } else if (salary > 1500 && salary < 3000) {
//   console.log('Уровень 3');
// } else {
//   console.log('Уровень 4');
// }

// const balance = 1000;
// let message;

// if (balance >= 0) {
//   message = 'Позитивный баланс';
// } else {
//   message = 'Негативный баланс';
// }

// const message = balance >= 0 ? 'Позитивный баланс' : 'Негативный баланс';

// console.log(message);

// if (true) {
//   const a = 5;
//   console.log(a);
// }

// let balance = 10000;
// const payment = 2000;

// if (stars === 1) {
//   price = 20;
// } else if (stars === 2) {
//   price = 30;
// } else if (stars === 3) {
//   price = 50;
// } else if (stars === 4) {
//   price = 70;
// } else if (stars === 5) {
//   price = 120;
// } else {
//   console.log('Такого количества звезд нет');
// }

// switch (stars) {
//   case 1:
//     price = 20;

//   case 2:
//     price = 30;
//     break;

//   case 3:
//     price = 50;
//     break;

//   case 4:
//     price = 70;
//     break;

//   case 5:
//     price = 120;
//     break;

//   default:
//     console.log('Такого количества звезд нет');
// }

// console.log(price);

// if (stars === 1 || stars === 2) {
//   price = 20;
// } else if (stars === 3 || stars === 4) {
//   price = 30;
// } else if (stars === 5) {
//   price = 120;
// } else {
//   console.log('Такого количества звезд нет');
// }

// const stars = 6;
// let price;

// switch (stars) {
//   case 1:
//   case 2:
//     price = 20;
//     break;

//   case 3:
//   case 4:
//     price = 30;
//     break;

//   case 5:
//     price = 120;
//     break;

//   default:
//     console.log('Такого количества звезд нет');
// }

// console.log(price);

// const option = 2;
// let message = '';

// switch (option) {
//   case 1:
//     message = 'Вы сможете забрать товар завтра в нашем офисе';
//     break;

//   case 2:
//     message = 'Курьер доставит заказ завтра с 9.00';
//     break;

//   case 3:
//     message = 'Посылка будет отправлена сегодня';
//     break;

//   default:
//     message = 'Вам перезвонит менеджер';
// }

// console.log(message);

// for (let i = 10; i <= 20; i += 3) {
//   console.log(i);
// }

// console.log('qweqwe');

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// let a = 10;
// const b = a++;

// console.log(b);
// console.log(a);

// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 3;
// let totalSalary = 0;

// for (let i = 1; i <= employees; i += 1) {
//   const salary = Math.round(
//     Math.random() * (maxSalary - minSalary) + minSalary,
//   );
//   console.log(`ЗП работника номер ${i} - ${salary} `);

//   totalSalary += salary;
// }
// console.log('totalSalary: ', totalSalary);

// const min = 0;
// const max = 5;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//   console.log(i);
//   if (i % 2 !== 0) {
//     console.log('Не четное: ', i);
//     continue;
//   }
//   console.log('Четное: ', i);

//   total += i;
// }

// console.log('total: ', total);

// let balance = 10000;
// const payment = 2000;

// console.log(
//   `Общая стоимость заказа ${payment} кредитов. Проверяем кол-во доступных средств на счету.`,
// );

// if (balance >= payment) {
//   console.log('ok');

//   balance -= payment;

//   console.log(`На счету осталось ${balance} кредитов.`);
// } else {
//   console.log('На вашем счету недостаточно средств');
// }

// console.log('Операция заверщена');

// let totalSpent = 200;
// let payment = 50;
// let discount = 0;

// if (totalSpent >= 100 && totalSpent < 1000) {
//   console.log('Бронзовый партнер, скидка 2%');
//   discount = 0.02;
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//   console.log('Серебряный партнер, скидка 5%');
//   discount = 0.05;
// } else if (totalSpent >= 5000) {
//   console.log('Золотой партнер, скидка 10%');
//   discount = 0.1;
// } else {
//   console.log('Не партнер, скидка 0%');
// }

// payment -= payment * discount;
// console.log(
//   `Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`,
// );

// totalSpent += payment;

// console.log(`Общая сумма потраченного в магазине: ${totalSpent}`);
// const btnAdd = document.querySelector('button[data-add]');
// const valueInput = document.querySelector('input[data-value]');
// btnAdd.addEventListener('click', function () {
//   console.log('click heheheheh');
//   console.log(valueInput.value);
// });
