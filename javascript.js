logo = obj => console.log('drukowany obiekt: \n', JSON.stringify(obj, null, "  "));
hr = () => console.log('--------------------------------');



let set = new Set();

set.add('tak');

set.add(1);

set.add('nie');

set.add('tak');

console.log(set.size);

console.log(set.keys());

console.log(set.values());

console.log(set.has(2));


let array = [1,2,3,4,3,2,5];

let unique = Array.from(new Set(array));

console.log('unique', unique);

hr();

let weakSet = new WeakSet();

let obj1 = {
	a: 'pierwszy'
},
obj2 = {
	b: 'drugi'
}

set.add(obj1);

weakSet.add(obj1);

console.log(set.has(obj1));
console.log(weakSet.has(obj1));

obj1 = null;

console.log(set.has(obj1));
console.log(weakSet.has(obj1));