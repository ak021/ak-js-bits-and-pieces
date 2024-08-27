function convertCurrency(currency) {
  return (value) => {
    return `${value}${currency}`;
  };
}

const convertToDollar = convertCurrency("$");
const convertToINR = convertCurrency("INR");

console.log(convertToDollar(100));
