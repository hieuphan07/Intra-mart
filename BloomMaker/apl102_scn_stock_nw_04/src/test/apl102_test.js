const arrayMethods = Reflect.ownKeys(Array.prototype).filter(
  (key) => typeof Array.prototype[key] === "function"
);

console.log(arrayMethods);
