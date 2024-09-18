function pyramid(n) {
    const midPoint = Math.floor((n * 2 - 1) / 2)
    for (let row = 0; row < n; row++) {
        let level = ""
        for (let column = 0; column < n * 2 - 1; n++) {
            if (midPoint - row <= column && midPoint + row >= column) {
                level += "#"
            } else {
                level += " "
            }
        }
        console.log(level)
    }
}

function newPyramid(n, row, level = "") {
    const midPoint = Math.floor((2 * n - 1) / 2)
    let add

    if (n === row) {
        return
    }
    if (level.length === 2 * n - 1) {
        console.log(level)
        newPyramid(n, row += 1)
    }
    if (midPoint - row <= level.length && midPoint + row >= level.length) {
        add += "#"
    } else {
        add += " "
    }
    pyramid(n, row, level += add)
}