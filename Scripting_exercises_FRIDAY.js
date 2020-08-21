//---------------------------------------------------------Beginning of exercise 4.2.1 (Numbers)---------------------------------------------------------//
console.log(`Beginning of exercise 4.2.1 (Numbers)`);

let age = 12+16;
let ww2 = 3*2;
//I have no idea about prices of tesla shares, so I put random numbers here://
let tesla = 99*99;
let secondsOfDay = 60*60*24;
let hungarians = 12/100;
let bigger = 61*2;
let participants = 654 % 7;

console.log('my age:', age);
console.log('ww2 duration:', ww2);
console.log('tesla shares price:',tesla)
console.log('Seconds count in 1 day:',secondsOfDay)
console.log('% of Hungarions in the World:',hungarians, '%')
console.log('How much times is China bigger compared to Czech Republic:',bigger, 'times larger')
console.log('In the smallest channel there woudl be',participants, 'people.')

console.log(`End of exercise 4.2.1 (Numbers)`);
console.log(` `);
console.log(` `);

//---------------------------------------------------------End of exercise 4.2.1 (Numbers)---------------------------------------------------------//






//---------------------------------------------------------Beginning of exercise 4.2.2 (Arrays)---------------------------------------------------------//
console.log(`Beginning of exercise 4.2.2 (Arrays)`);

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

console.log(`End of exercise 4.2.2 (Arrays)`);
console.log(` `);
console.log(` `);
//---------------------------------------------------------End of exercise 4.2.2 (Arrays)---------------------------------------------------------//







//---------------------------------------------------------Beginning of exercise 4.2.3 (objects)---------------------------------------------------------//
console.log(`Beginning of exercise 4.2.3 (Objects)`);

let colorlist = ['red', 'green', 'blue', 'purple', 'orange']
let exobject = {
    colors: colorlist,
    hasManyColors: colorlist.length > 3,
}
console.log(exobject)
console.log(`End of exercise 4.2.2 (Objects)`);

//---------------------------------------------------------End of exercise 4.2.3 (objects)---------------------------------------------------------//
