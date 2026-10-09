// ================================
//  Arthematic Operator
// ================================

let a = 5;
let b = 2;

// A and B: addition
console.log(`${a} + ${b} = ${a + b}`);

// A  and B: Subtraction
console.log(`${a} - ${b} = ${a - b}`);

// A and B: Multiplication
console.log(`${a} * ${b} = ${a * b}`);

// A and B: Division
console.log(`${a} / ${b} = ${a / b}`);

// ================================
//  Assignment Operators
// ================================

let c = 5;
let d = 3;

console.log(`${c} += ${d} : ${(c += d)}`);
console.log(`${c} -= ${d} : ${(c -= d)}`);
console.log(`${c} *= ${d} : ${(c *= d)}`);
console.log(`${c} /= ${d} : ${(c /= d)}`);

// ================================
// Compression Operator
// ================================

let CorrectNum = 10;
let Num = "10";
// Using ( == )
console.log(`${CorrectNum} == ${Num}  :  ${CorrectNum == Num}`);

// Using ( === )
console.log(`${CorrectNum} === ${Num} :  ${CorrectNum === Num}`);

// Using ( != )
console.log(`${CorrectNum} != ${Num}  :  ${CorrectNum != Num}`);

// Using ( > )
console.log(`${CorrectNum} > ${Num}   :  ${CorrectNum > Num}`);

// Using ( < )
console.log(`${CorrectNum} < ${Num}   :  ${CorrectNum < Num}`);

// Using ( >= )
console.log(`${CorrectNum} >= ${Num}  :  ${CorrectNum >= Num}`);

// Using ( <= )
console.log(`${CorrectNum} <= ${Num}  :  ${CorrectNum <= Num}`);

// ================================
// Expressions
// ================================

let price = 500;
let quantity = 3;

let totalPrice = price * quantity;

console.log(`${price} * ${quantity} = ${totalPrice}`);

let marks1 = 80;
let marks2 = 75;
let marks3 = 90;

let finalScore = marks1 + marks2 + marks3;

console.log(`${marks1} + ${marks2} + ${marks3} = ${finalScore}`);

let average = finalScore / 3;

console.log(`Average Marks: ${average}`);

// ================================
//  Practice Task
// ================================

let e = 10;
let f = "10";
// es surat ma natija "True " hoga es liya  ki JavaScript mowazna karti waqt string ko number ma tabdeel karsakta haa.
console.log(e == f);

// es surat ma natija "False" hoga es liya ki ki ek value string haan our dosri Number.
console.log(e === f);
