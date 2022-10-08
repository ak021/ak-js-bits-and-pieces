function outerFunction(outerval) {
  return function innerFucntion(innerVal) {
    console.log("inisde inner fn");
    console.log({ innerVal });
    console.log({ outerval });
  };
}

outerFunction("outer")("inner9999");
