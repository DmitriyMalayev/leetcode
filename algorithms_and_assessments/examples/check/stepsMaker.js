function stepsMaker(n) {
    for (let row = 0; row < n; row++) {
        let step = ""
        for (let column = 0; column < n; column++) {
            if (column <= row) {
                step += "#"
            } else {
                step += " "
            }
        }
        console.log(step)
    }
}


function stepsMakerRecursion(n, row=0, stair = "") {
    if (n === row) {
        return
    }
    if (n === stair.length) {
        console.log(stair)
        return stepsMakerRecursion(n, row += 1)
    }
    if (row >= stair.length) {
        stair += "#"
    } else {
        stair += " "
    }
    stepsMakerRecursion(n, row, stair)
}