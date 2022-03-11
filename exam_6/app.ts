type StringOrNum = string | number;
let itemPrice: number;

const setItemPrice = (price: StringOrNum):void => {
  // 타입가드 : 유니언 타입을 사용할 때 코드 검증
  if(typeof price === 'string'){
    itemPrice = 0;
  }else {
    itemPrice = price;
  }
};

setItemPrice(50);