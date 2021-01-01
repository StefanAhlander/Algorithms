const a = {
  value: 'a',
};
const b = {
  value: 'b',
};
const c = {
  value: 'c',
};
const d = {
  value: 'd',
};
a.next = b;
b.next = c;
c.next = d;
d.next = 'none';

const reverseList = (head) => {
  let current = head;
  let previous = undefined;

  while (current !== 'none') {
    let nextNode = current.next;

    if (previous === undefined) {
      current.next = 'none';
    } else {
      current.next = previous;
    }

    previous = current;
    current = nextNode;
  }

  return previous;
};

const logList = (head) => {
  let current = head;

  while (current !== 'none') {
    console.log(
      `${current.value} => ${
        typeof current.next === 'string' ? current.next : current.next.value
      }`
    );
    current = current.next;
  }
};

logList(a);

console.log('Reverse');
const result = reverseList(a);
logList(d);

console.log('Result: ', result);
