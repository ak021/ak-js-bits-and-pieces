function* getId() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

const idgenerator = getId();
console.log(idgenerator.next().value);
console.log(idgenerator.next().value);
console.log(idgenerator.next().value);
console.log(idgenerator.next().value);
console.log(idgenerator.next().value);
