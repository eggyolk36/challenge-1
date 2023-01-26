input.onButtonPressed(Button.A, function () {
    mrfishy += 1
    basic.clearScreen()
    basic.showNumber(mrfishy, 1)
})
input.onButtonPressed(Button.AB, function () {
    mrfishy = 0
    basic.clearScreen()
    basic.showNumber(mrfishy, 1)
})
input.onButtonPressed(Button.B, function () {
    mrfishy += -1
    basic.clearScreen()
    basic.showNumber(mrfishy, 1)
})
let mrfishy = 0
basic.showNumber(0)
mrfishy = 0
