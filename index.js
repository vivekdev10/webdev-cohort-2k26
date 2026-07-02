function add(a, b) {
    return a + b
}

function subtract(a, b) {
    if (!(a > b)) throw new Error('A must be greater than b')
    return a - b
}

function multiply(a, b) {
    if (a < 0 || b < 0) throw new Error('Provide no is in minus')
    return a * b
}

add(10, 5)
add(10, 10)
add(50, 50)

subtract(10, 5)

multiply(2, 3)
multiply(10, 5)
multiply(20, 5)
multiply(20, 5)

