// Arithmetic operators
let addition = 2 + 2
let subtraction = 2 - 5
let multiplication = 2 * 3
let division = 4 / 5

let concat = '20' + 25

// Logical operators
let isMarried = !true
let compare = 4 < 3 && 8 > 3
let compareTwo = 3 > 9 || 90 > 4

// Comparison operators
let lessThan = 4 < 3
let greaterThan = 7 > 2
let lessThanOrEqualThan = 4 <= 3
let greaterThanOrEqualThan = 4 >= 8
let equalThan = 3 === 4
let notEqualTo = 49 != 43

// Assignment operators
let assignmentOperator = 'value'

let counter = 0

counter = counter + 1
counter += 100

counter = counter - 1
counter -= 1

counter = counter * 1
counter *= 1

counter = counter / 1
counter /= 1

counter %= 4

let a = true
let b = false

let statementA = a && b // false
let statementB = a || b // true
let statementC = a ^ b // 1 (bitwise XOR)
let statementD = a << b // 1
let statementE = a >> b // 1
let statementF = a >>> b // 1

// Extra
let user = {
    name: null,
    age: 32
}

let userName = user.name ?? 'Anonymous'

console.log(userName)

// Control structures
let numberA = 5
let numberB = 15

// sequential
let sum = numberA + numberB

let numberC = 50
let numberD = 5

// conditional (if, if-else, if-elseif-else, switch)
if (numberC > numberD) {
    console.log(numberC * numberD)
}
else console.log(numberD * numberC)

let temperature = 30

if (temperature > 30 ) {
    console.log('Hot')
}
else if (temperature < 10) {
    console.log('Cold')
}
else console.log('Temperate')

let dia = 2

switch (dia) {
    case 1:
        console.log('Monday')
        break
    case 2:
        console.log('Tuesday')
        break
    default:
        console.log('Another day')
        break
}

// iterative (while, do-while, for, for-of, for-in)
let counterA = 0
let counterB = 0
let counterC = 0
const fruits = ['apple', 'banana', 'strawberry']
const player = {
    name: 'David',
    age: 27,
    score: 345,
    online: false
}

while (counterA < 10) {
    counterA++
    console.log(counterA)
}

do {
    counterB++
    console.log(counterB)
}
while (counterB < 10)

for (let i = 0; i < 10; i++) {
    counterC++
    console.log(counterC)
}

for (const fruit of fruits) {
    console.log(fruit)
}

for (const prop in player) {
    console.log(`${prop}: ${player[prop]}`)
}

// Challenge
for (let i = 10; i <= 55; i++) {
    if (i % 2 === 0 && i !== 16 && i % 3 !== 0) {
        console.log(i)
    }
}
