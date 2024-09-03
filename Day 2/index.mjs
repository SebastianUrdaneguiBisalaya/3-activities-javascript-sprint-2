import pkg from "./data.js";
const { data } = pkg;

// Beginner
// 1.
function extractCustomerNames(data) {
  return data.map((item) => item.customerName);
}
console.log(extractCustomerNames(data));
// 2.
function filterOrders(data) {
  return data.filter((item) => item.totalAmount >= 1000);
}
console.log(filterOrders(data));
// 3.
function locateSpecificOrder(data, itemId) {
  return data.find((item) => item.orderId === itemId);
}
console.log(locateSpecificOrder(data, "003"));
// 4.
function locateSpecificOrderByIndex(data, customerName) {
  return data.findIndex((item) => item.customerName === customerName);
}
console.log(locateSpecificOrderByIndex(data, "Diana Ross"));
// 5.
function checkProduct(data, nameProduct) {
  return data.some((item) =>
    item.items.some((item) => item.productName.includes(nameProduct))
  );
}
checkProduct(data, "Laptop");

// Medium
// 1.
function calculateTotalRevenue(data) {
  return data.reduce((acc, currentValue) => acc + currentValue.totalAmount, 1);
}
calculateTotalRevenue(data);
// 2.
function listAllPurchasedProducts(data) {
  return data.flatMap((item) => item.items.map((item) => item.productName));
}
listAllPurchasedProducts(data);
// 3.
function previewRecentOrder(data) {
  return data.slice(data.length - 3);
}
previewRecentOrder(data);
// 4.
function cancelAnOrder(data, orderId) {
  const index = data.findIndex((item) => item.orderId === orderId);
  return data.splice(index, 1);
}
cancelAnOrder(data, "009");
// 5.
function groupByOrders(data) {
  return Object.groupBy(data, ({ date }) => date);
}
groupByOrders(data);

// Advance
// 1.
function totalQuantityForEachProduct(data) {
  const items = data.flatMap((item) => item.items);
  const totalQ = items.reduce((acc, val) => {
    if (!acc[val.productName]) {
      acc[val.productName] = 0;
    }
    acc[val.productName] += val.quantity;
    return acc;
  }, {});
  return totalQ;
}
totalQuantityForEachProduct(data);

// 2.
function groupOrderByCustomerName(data) {
  const allOrders = data.flatMap((order) => [
    { customerName: order.customerName, order },
  ]);
  const group = allOrders.reduce((acc, { customerName, order }) => {
    if (!acc[customerName]) {
      acc[customerName] = [];
    }
    acc[customerName].push(order);
    return acc;
  }, {});
  return group;
}
groupOrderByCustomerName(data);

// 3.
function updateOrder(data, updateOrderDetail) {
  const orderIndex = data.findIndex((item) => item.orderId === orderId);
  const getOrder = data[orderIndex];
  const updateOrder = { ...getOrder, ...updateOrderDetail };
  data.splice(orderIndex, 1, updateOrder);
}

updateOrder("009", {
  items: [
    { productId: "A1", productName: "Laptop", quantity: 2, price: 1200 }, // Updated quantity
    { productId: "B2", productName: "Mouse", quantity: 3, price: 25 }, // Updated quantity
  ],
  totalAmount: 1260,
});

// 4.
function summarizeItems(data) {
  const allData = data.flatMap((item) => item.items);
  const summary = allData.reduce((acc, val) => {
    if (!acc[val.productName]) {
      acc[val.productName] = 0;
    }
    acc[val.productName] += val.quantity;
    return acc;
  }, {});
  return summary;
}

// 5.
function generateClientsVip(data) {
  const customers = data.map((item) => item.customerName);
  const quantity = customers.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  });
  const result = Object.keys(quantity).filter((item) => quantity[item] > 1);
  return result;
}

// 6. Implement the number 4 from medium exercises without mutating the array
function cancelAnOrder(data, orderId) {
  return data.filter((item) => item.orderId !== orderId);
}
