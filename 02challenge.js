function greet () {
    console.log('Hello, World!')
}
greet()

function greetUser (name) {
    console.log(`Hello, ${name}!`)
}
greetUser('David')

function addNumbers (x, y) {
    console.log(x + y)
}

addNumbers(10, 25)

function printElements (...elements) {
    for (let i = 0; i < elements.length; i++) {
        console.log(elements[i])
    }
}

printElements('apple', 'banana', 'strawberry')



