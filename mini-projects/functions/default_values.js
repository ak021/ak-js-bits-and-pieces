function defaultValueFunc(
  num = 10,
  num2 = 20,
  bool = false,
  sum = num + num2,
  string = "Hello"
) {
  console.log(num, string, bool, sum);
}

// driver code
defaultValueFunc(); //  10, 'Hello', false, 30
defaultValueFunc(4, 8); //  4, 'Hello', false, 12
defaultValueFunc(10, 4, true); //  10, 'Hello', true, 14
defaultValueFunc(5, 6, false, 11); //  5, 'Hello', false, 11
defaultValueFunc(undefined, undefined, false); //  10, 'Hello', false, 30
