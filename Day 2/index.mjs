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
