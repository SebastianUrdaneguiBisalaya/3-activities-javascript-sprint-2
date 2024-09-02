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
