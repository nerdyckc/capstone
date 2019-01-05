// when a yield statement is found, execution of the function is paused

function *numbers() {
  const result = 1 + 1;
  return 20 + (yield result);
}

const generator = numbers();
generator.next();   // {"value":2, "done":false}
generator.next(10);   // {"value":30, "done":true}


// another example

function *list() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

const generator = list();
generator.next();   // {"value":1, "done":false}
generator.next();   // {"value":2, "done":false}
generator.next();   // {"value":3, "done":false}
generator.next();   // {"value":4, "done":false}
generator.next();   // {"value":5, "done":false}
generator.next();   // {"done":true}
generator.next();   // {"done":true}


// yet another example

function *list() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

const generator = list();
for (let value of generator) {
  numbers.push(value)
}
numbers;      // [1,2,3,4,5]


// Tree example
class Tree {
  constructor(value = null, children = []) {
    this.value = value;
    this.children = children;
  }

  *printValues() {
    yield this.value;
    for (let child of this.children) {
      yield* child.printValues();
    }
  }
}

const tree = new Tree(1, [
  new Tree(2, [new Tree(4)]),
  new Tree(3)
]);

const values = [];
for (let value of tree.printValues()) {
  value.push(value);
}
values;   // [1,2,4,3]

