basic.forever(function () {
    basic.clearScreen()
    if (input.compassHeading() <= 90 && input.compassHeading() >= 0) {
        basic.showArrow(ArrowNames.North)
    } else if (input.compassHeading() <= 180 && input.compassHeading() > 90) {
        basic.showArrow(ArrowNames.East)
    } else if (input.compassHeading() <= 270 && input.compassHeading() > 180) {
        basic.showArrow(ArrowNames.South)
    } else {
        basic.showArrow(ArrowNames.West)
    }
})
