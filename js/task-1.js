function makeTransaction(quantity, pricePerDroid, customerCredits) {
  // Оголошення змінної для зберігання загальної суми замовлення
  const totalPrice = quantity * pricePerDroid;
  
  // Перевірка, чи зможе клієнт оплатити замовлення
  if (totalPrice > customerCredits) {
    return "Insufficient funds!";
  } else {
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
  }
}

// Приклади виклику функції для перевірки її роботи
console.log(makeTransaction(5, 300, 1500)); // повертає "You ordered 5 droids worth 1500 credits!"
console.log(makeTransaction(5, 300, 1200)); // повертає "Insufficient funds!"
console.log(makeTransaction(3, 400, 1200)); // повертає "You ordered 3 droids worth 1200 credits!"
console.log(makeTransaction(10, 100, 1000)); // повертає "You ordered 10 droids worth 1000 credits!"
console.log(makeTransaction(1, 1500, 1000)); // повертає "Insufficient funds!"
