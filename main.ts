input.onGesture(Gesture.Shake, function () {
    steps += 1
})
let steps = 0
let average = 5
basic.forever(function () {
    basic.showNumber(0)
    if (input.buttonIsPressed(Button.B)) {
        basic.showNumber(average)
    }
})
