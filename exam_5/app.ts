let someValue: any =  5;
// any : 모든 타입이 들어올 수 있음
let price: number | string = 5;
price = 'free';
// price = true; // error

// Type Aliases
type StrOrNum = number | string;
let totalCost: number;
let orderID: StrOrNum;

const calculateTotalCost = (pric: StrOrNum, qty: number): void => {
};

const findOrderID = (
  customer: { customerId: StrOrNum, name: string }, 
  productId: StrOrNum 
): StrOrNum => {
  return orderID;
}
