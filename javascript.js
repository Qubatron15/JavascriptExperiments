logo = obj => console.log('drukowany obiekt: \n', JSON.stringify(obj, null, "  "));



let map = new Map(),
weakMap = new WeakMap();

let obj1 = {
	foo: 'foo'
},
obj2 = {
	bar: 'bar'
}

map.set(obj1, 'pierwszy');
weakMap.set(obj2, 'drugi');

console.log(map.get(obj1));
console.log(weakMap.get(obj2));

obj1 = undefined;
obj2 = undefined;

console.log(map.get(obj1));
console.log(weakMap.get(obj2));