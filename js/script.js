//current date and time:

const d = new Date();
console.log(d);

//year, month, day, hour, minute, second, and millisecond

const e = new Date(2018, 11, 24, 10, 33, 30, 0);
console.log(e);

// year, month, day, and hour

const f = new Date(2018, 11, 24, 10);
console.log(f);

//A Date object can be created with a specified date and time:


const g = new Date("October 13, 2014 11:13:00");
console.log(g);


//JavaScript ISO Dates


const h = new Date("2015-03-25");
console.log(h);

//short date

const i = new Date("03/25/2015");
console.log(i);


//long date

const j = new Date("mar 25 2015");
console.log(j);

//JavaScript getMonth()

const k = new Date();
console.log(k.getMonth() + 1);

//JavaScript getDate()

const l = new Date();
console.log(l.getDate());

//JavaScript getHours()

const m = new Date();
console.log(m.getHours());

//JavaScript getminutes()
const n = new Date();
console.log(n.getMinutes());

//JavaScript getday()

const o = new Date();
console.log(o.getDay());

//setFullYear

const p = new Date();
p.setFullYear(2020);
console.log(p);
