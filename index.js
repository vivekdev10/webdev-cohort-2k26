function add(a, b) {
    return a + b
}

function subtract(a, b) {
    if (!(a > b)) throw new Error('A must be greater than b')
    return a - b
}

function multiply(a, b) {
    return a * b
}

add(10, 5)
add(10, 10)
add(50, 50)

subtract(10, 5)
