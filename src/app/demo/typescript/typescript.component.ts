import { Component } from '@angular/core';
import { javaScriptWithConsoleLog, typeScriptWithConsoleLog, withDeps } from '../../exercise/helpers/helpers';
import { ng2tsConfig } from '../../../../ng2ts/ng2ts';
declare const require;

@Component({
  selector: 'slides-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.css']
})

export class TypescriptComponent {
  code = {
    filter: typeScriptWithConsoleLog(`const numbers = [12,23,62,34,19,40,4,9];

console.log(numbers.filter(function(number){
  return number > 30;
}));

// Or use shorthand function notation.
// (Also called arrow function)
console.log(
  numbers.filter(number => number > 30)
);`),
    moreTypes: {
      codeInterfaces: `interface Puppy {
  name: string;
  age: number;
};

const realPuppy: Puppy = {
  name: 'Pikachu',
  age: 1
};

const notRealPuppy: Puppy = {
  says: 'meow' // Error: this is clearly not a puppy
}`,
      codeArrays: typeScriptWithConsoleLog(`// define array as Array<Type>
const cats: Array<string> = ['Simba', 'Aslan'];
// Type[] does the same thing.
const cats2: string[] = ['Simba', 'Aslan'];

interface Cat {
  name: string,
  age: number
}

const betterCats: Array<Cat> = [
  {name: 'Simba', age: 22},
  {name: 'Aslan', age: 9999}
];

console.log(betterCats);`),
      code: `const price: number = 100; // This is a number.
const tax = 20; // Actually TypeScript can infer number here;
const productName = 'pikachu'; // TypeScript can infer it's a string.
const isHungry = true; // Boolean

const weird = tax + isHungry; // Can't add number and boolean
tax.slice(1,5); // Can't slice a number
productName.slice(1,5); // But can slice a string!
const total = price + tax; // Works!`
    },
    varDeclaration: {
      code: `// Var is still allowed but not recommended.
var v = 1;

// Let should be used instead of var.
let l = 1;

if(true){
  let ll = 1; // Unlike var let is unavailable outside of this if.
}
console.log(ll); // undefined


// Const is like let, but if you try to change it, TS will give you an error.
const x = 1;
x = 2;`

    },
    stringType: {
      code: `let fullName: string = 'Bob Bobbington';
let sentence: string = \`Hello, my name is \${ fullName }.\`;`
    },
    stringType2: {
      code: `let sentence: string = "Hello, my name is " + fullName + "."`
    },
    anyType: {
      code: `let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean`
    },
    classDescription: {
      code: typeScriptWithConsoleLog(`export class Puppy {
  // This is a method.
  bark(){
    // That's how russian dogs talk.
    return 'Gav gav!!';
  }
}

// Now we can instantiate (create) it
var hotdog = new Puppy();
// And use its methods
console.log(hotdog.bark());
`),
      codeConstructor: typeScriptWithConsoleLog(`export class Puppy {
  constructor(public name: string){
    // Later we'll have code here
  }
  bark(){
    return 'Gav! my name is ' + this.name;
  }
}

var hotdog = new Puppy('Édouard');
console.log(hotdog.bark());
// Let's create more puppies
var oscar = new Puppy('Oscar-Claude');
console.log(oscar.bark());`), codeExport: typeScriptWithConsoleLog(`export class Puppy {
  constructor(public name: string){}
  bark(){
    return 'Gav! my name is ' + this.name;
  }
}`), codeImport: withDeps(typeScriptWithConsoleLog(`import {Puppy} from './puppy';

var hotdog = new Puppy('Édouard');
console.log(hotdog.bark());
// Let's create more puppies
var oscar = new Puppy('Oscar-Claude');
console.log(oscar.bark());`, 'import "./app";', undefined, `export class Puppy {
  constructor(public name: string){}
  bark(){
    return 'Gav! my name is ' + this.name;
  }
}`), 'app', 'puppy'),
      matches: {
        classPuppyMatch: /class Puppy/,
        classMatch: /class/,
        exportMatch: /export/,
        importMatch: /import/,
        constants: /const /,
        constructorMatch: /constructor/,
        publicMatch: /public name/,
        thisMatch: /this.name/,
        edouardMatch: /Édouard/,
        oscarMatch: /Oscar-Claude/,
      }
    },
    tsExercise: typeScriptWithConsoleLog(
      `function add(a: number, b){
  return a+b;
};

console.log(add(2, '2'));`, undefined, require(`!raw-loader!./code/mini-exercise-test.ts`)),

    js2And2: javaScriptWithConsoleLog(
      `function add(a, b){
  return a+b;
};

console.log(add(2, '2'));`),
    tsExerciseMatch: /'.*'/
  };
  exercises = [
    ng2tsConfig.milestones[0].exercises[1]
  ];
}
