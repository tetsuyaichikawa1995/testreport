
const getToralPrice = (price, quantity) => price * quantity;

const addTax = total => total * 1.1;

const total = getToralPrice(1000, 2);

console.log(`税抜金額は${total}円です。`);

const taxedTotal = addTax(total);

console.log(`税込金額は${taxedTotal}円です。`);

