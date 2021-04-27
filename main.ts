let A = 0
input.onButtonPressed(Button.A, function () {
    A = 2546
    basic.showNumber(A)
    basic.pause(100)
    for (let index = 0; index < 9; index++) {
        A += 1
        basic.showNumber(A)
    }
})
