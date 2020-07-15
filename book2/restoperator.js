const names = ["one", "two", "three"];
const [first, ...rest] = names;
console.log('first', first);
console.log('rest', ...rest);

