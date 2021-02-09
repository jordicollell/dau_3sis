input.onGesture(Gesture.Shake, function () {
    dau = randint(1, 6)
    if (dau > 2) {
        sis = sis + 1
    }
    if (dau < 2) {
        sis = 0
    }
    if (sis == 3) {
        basic.showNumber(0)
        basic.pause(1000)
        basic.showIcon(IconNames.Ghost)
        sis = 0
    } else {
        basic.showNumber(dau)
    }
})
let sis = 0
let dau = 0
basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)
