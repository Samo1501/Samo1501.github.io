//dadasdasdasd//
/*dasdadasdadasdada*/


let variable;
let otherVariable;

let myvariable = 5;


//---------------------------------------------------------Beginning of exercise 4.2.1 (Numbers)---------------------------------------------------------//
let age = 12+16;
let ww2 = 3*2;
//I have no idea about prices of tesla shares, so I put random numbers here://
let tesla = 99*99;
let secondsOfDay = 60*60*24;
let hungarians = 12/100;
let bigger = 12+0.069;
let participants = 654 % 7;
//---------------------------------------------------------End of exercise 4.2.1 (Numbers)---------------------------------------------------------//


let myString = "This is a string";
let name1 = "Mark";
let greeting = `Hello ${name1}!`;
console.log(greeting)

let greetWorld = 'Hello ' + 'World!';
console.log(greetWorld)

let name2 = 'Dave';
let namegreeting = 'Hello ' + name2 + '!';
console.log(namegreeting)

let charcount = 'Hello'.length;
let worldcharcount = 'Hello world'.length;
console.log(charcount === worldcharcount);

let trueOrFalse1 = 5 === 5;
console.log(`5 === 5`)
console.log(trueOrFalse1)
let trueOrFalse2 = 100 < 50;
console.log(`100 < 50`)
console.log(trueOrFalse2)
let trueOrFalse3 = 'hello' !== 'world';
console.log(`hello' !== 'world`)
console.log(trueOrFalse3)
let trueOrFalse4 = 1 >= 2;
console.log(`1 >= 2`)
console.log(trueOrFalse4)
let trueOrFalse5 = 'blue'.length === 'green'.length;
console.log(`blue'.length === 'green'.length`)
console.log(trueOrFalse5)
let trueOrFalse6 = 3 < 4 && (5 > 6 || 7 < 8);
console.log('3 < 4 && (5 > 6 || 7 < 8')
console.log(trueOrFalse6)


let appleresult = 'apple' + 5;
appleresult;

let my1stArray = [3, 5, 6, 2, 22];
console.log(my1stArray [0]);

let my2ndArray = ['Claire', 'Mark', 'Susan'];
my2ndArray[0] = 'Peter';
console.log(my2ndArray [0]);
my2ndArray.length;
my2ndArray.push ('Julia');
console.log(my2ndArray.length);




//---------------------------------------------------------Beginning of exercise 4.2.2 (Arrays)---------------------------------------------------------//
let names = ['Tibor', 'Jano', 'Peter', 'Daniel'];
console.log(names);
console.log('Is 3rd name longer than 5 characters?');
console.log(names[2].length > 5);

console.log('adding Rastislav');
names.push ('Rastislav');
console.log(names);

console.log('replacing 1st name with mine');
names[0] = 'Samuel';
console.log(names);

console.log('Does my names array have more than 4 items?');
console.log(names.length >4);
//---------------------------------------------------------End of exercise 4.2.2 (Arrays)---------------------------------------------------------//





let post01 = {
    author: "Bill Gates",
    content: "Online communication will change how companies work",
    date: "2020-04-01 18:06",
}
console.log(post01);
console.log(post01.author);
console.log(post01['author']);








//---------------------------------------------------------Beginning of exercise 4.2.3 (objects)---------------------------------------------------------//
let colorlist = ['red', 'green', 'blue', 'purple', 'orange']
let exobject = {
    colors: colorlist,
    hasManyColors: colorlist.length > 3,
}
console.log(exobject)
//---------------------------------------------------------End of exercise 4.2.3 (objects)---------------------------------------------------------//
