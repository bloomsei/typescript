export { };

// Primitives
let name: string = "Elayne";
let age: number = 39;
let isAwesome: boolean = true;

// Arrays
let luckyNumbers: number[] = [7, 13, 42];
let favoriteColors: Array<string> = ["purple", "pink"];

// Tuples
let hero: [string, number] = ["Ada Lovelace", 1815];

// Enums
enum Color { Purple = "awesome", Pink = "cute" }

// Union Types
let id: string | number;
id = 1;
id = "uuid-1234";

// Any Type
let anythingGoes: any = "Could be anything";
anythingGoes = age;
anythingGoes = hero;

// Unknown Type ---- have to type check before using
let unknownValue: unknown = "I could be anything too";
unknownValue = 42;
unknownValue = { name: "Alice" };

// Void Type
function log(message: string): void {
  console.log(message);
}
log("This is a log message.");

// Never Type
function throwError(message: string): never {
  throw new Error(message);
}
// Uncommenting the line below will cause the function to throw an error and never return.
// throwError("This is an error message.");

// Object Type
let person: { name: string; age: number } = {
    name: name,
    age: age
};

// Literal Types
type Direction = "North" | "South" | "East" | "West";
let travelDirection: Direction = "North";

console.log(name);
console.log(age);
console.log(isAwesome);
console.log(luckyNumbers);
console.log(favoriteColors);
console.log(hero);
console.log(`The hero is ${hero[0]} who was born in ${hero[1]}.`);
console.log(`The color purple has the value ${Color.Purple} and pink has the value ${Color.Pink}.`);
console.log(`The ID can be either a number or a string. Currently, it is: ${id}`);
console.log(`The anythingGoes variable can hold any type. Currently, it is:`, anythingGoes);
console.log(`The unknownValue variable can also hold any type, but we need to check its type before using it. Currently, it is:`, unknownValue);
console.log(`The person object has a name of ${person.name} and is ${person.age} years old.`);
console.log(`The travel direction is: ${travelDirection}`);

