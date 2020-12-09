input.onButtonPressed(Button.A, function () {
    binary = "" + binary + "1"
    basic.showString(binary)
    decimal = decimal * (2 + 1)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (decimal))
})
input.onButtonPressed(Button.B, function () {
    binary = "" + binary + "0"
    basic.showString(binary)
    decimal = decimal * 2
})
let decimal = 0
let binary = ""
binary = ""
decimal = 0
