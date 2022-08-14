// import { CircleParticle } from '../node_modules/confetti.ts/lib/cjs/particles/circle.js';


const jsData: any[] = [
    { info: "😀The querySelector() method returns the first element that matches a CSS selector. To return all matches (not only the first), use the querySelectorAll() instead. Both querySelector() and querySelectorAll() throw a SYNTAX_ERR exception if the selector(s) is invalid." },
    { info: "😀The getElementById() method returns an element with a specified value.The getElementById() method returns null if the element does not exist. The getElementById() method is one of the most common methods in the HTML DOM. It is used almost every time you want to read or edit an HTML element." },
    { info: "😀The setAttribute() method sets a new value to an attribute. If the attribute does not exist, it is created first." },
    { info: "😀The appendChild() method appends a node (element) as the last child of an element." },
    { info: "😀The addEventListener() method attaches an event handler to an element." },
    { info: "😀The removeEventListener() method removes an event handler from an element." },
    { info: "😀The innerText property sets or returns the text content of an element." },
    { info: "🤐The innerHTML property sets or returns the HTML content (inner HTML) of an element." },
    { info: "The map() method creates a new array populated with the results of calling a provided function on every element in the calling array." },
    { info: "The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function." },
    { info: "The reduce() method executes a user-supplied 'reducer' callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value." },
    { info: "The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object." },
    { info: "The Object.values() method returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop. (The only difference is that a for...in loop enumerates properties in the prototype chain as well.)" },
    { info: "The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables." },
    { info: "The Null type has exactly one value: null." },
    { info: "A variable that has not been assigned a value has the value undefined." },
    { info: "The BigInt type is a numeric primitive in JavaScript that can represent integers with arbitrary precision. With BigInts, you can safely store and operate on large integers even beyond the safe integer limit for Numbers." },
    { info: "NaN ('Not a Number') is typically encountered when the result of an arithmetic operation cannot be expressed as a number. It is also the only value in JavaScript that is not equal to itself." },
    { info: "A Symbol is a unique and immutable primitive value and may be used as the key of an Object property (see below). In some programming languages, Symbols are called 'atoms'." },
    { info: "In computer science, an object is a value in memory which is possibly referenced by an identifier." },
    { info: "In JavaScript, objects can be seen as a collection of properties. With the object literal syntax, a limited set of properties are initialized; then properties can be added and removed. Properties are identified using key values." },
    { info: `<div class="flex flex-col items-center justify-center" ><textarea id="message" rows="8" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-stone-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="a doodle for you to write your memorized..."></textarea><button onclick="alert('Congrats!!! 😁')" type="button" class="focus:outline-none text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 m-4 ">If you learned this CLICK here</button></div>` },
    { info: "JSON (JavaScript Object Notation) is a lightweight data-interchange format, derived from JavaScript, but used by many programming languages. JSON builds universal data structures." },
    { info: "The constructor method is a special method of a class for creating and initializing an object instance of that class." },
    { info: "The extends keyword is used in class declarations or class expressions to create a class that is a child of another class." },
    { info: "The static keyword defines a static method or property for a class, or a class static initialization block (see the link for more information about this usage). Neither static methods nor static properties can be called on instances of the class. Instead, they're called on the class itself." },
    { info: "Class fields are public by default, but private class members can be created by using a hash # prefix. The privacy encapsulation of these class features is enforced by JavaScript itself." },
    { info: "Encapsulation is the packing of data and functions into one component (for example, a class) and then controlling access to that component to make a 'blackbox' out of the object. Because of this, a user of that class only needs to know its interface (that is, the data and functions exposed outside the class), not the hidden implementation." },
    { info: "Inheritance enables you to define a class that takes all the functionality from a parent class and allows you to add more. Using class inheritance, a class can inherit all the methods and properties of another class. Inheritance is a useful feature that allows code reusability." },
    { info: "An object contains some properties and methods. We can hide them from the outer world through access modifiers. We can provide access only for required functions and properties to the other programs. This is the general procedure to implement abstraction in OOPS." },
    { info: "Polymorphism allows us to perform a single action in different ways. In other words, polymorphism allows you to define one interface and have multiple implementations. The word “poly” means many and “morphs” means forms, So it means many forms." },
    { info: "A data structure is a specialized format for organizing, processing, retrieving and storing data." },
    { info: "CharAt() It returns the character at the specified index." },
    { info: "Undeclared variables are those that do not exist in a program and are not declared. If the program tries to read the value of an undeclared variable, then a runtime error is encountered. Undefined variables are those that are declared in the program but have not been given any value. If the program tries to read the value of an undefined variable, an undefined value is returned." },
    { info: "Undefined means a variable has been declared but has not yet been assigned a value. On the other hand, null is an assignment value. It can be assigned to a variable as a representation of no value. Also, undefined and null are two distinct types: undefined is a type itself (undefined) while null is an object." },
    { info: "Dynamically Typed Language: the variable can hold multiple types; like in JS a variable can take number, chars." },
    { info: "Statically Typed Language: the variable can hold only one type, like in Java, TypeScript a variable declared of string can take only set of characters and nothing else." },
    
];


const btn: HTMLElement | any = document.querySelector('.btn');
const section: HTMLElement | any = document.querySelector('.section');

const getData = () => {
    const dataLength: number = jsData.length;
    const randomNum: number = Math.floor((Math.random()) * dataLength)
    // console.log(randomNum);


    // console.log(jsData[randomNum].info);

    section.innerHTML = jsData[randomNum].info;

    // jsData.map((item: any) => {
    //     console.log(item.info);
    // });

}



// CircleParticle.draw({ x: 300, y: 300, radius: 10, color: 'red', movement: 'angle', angle: 90, velocity: -5, acceleration: 0.1 });

// for (let i = 0; i < 5; i++) {
//   CircleParticle.draw({
//     x: 200,
//     y: 300,
//     radius: 10,
//     color: 'blue',
//     movement: 'xy',
//     velocityX: Math.random() - 0.5,
//     velocityY: -(Math.random() * 2 + 5),
//     rotationY: 4,
//     gravity: 0.1
//   });
// }

// console.log(jsData.length);


btn.addEventListener('click', getData);