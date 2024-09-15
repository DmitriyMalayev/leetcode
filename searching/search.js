let states = ["New York", "New Jersey", "Florida"]

function checkState(state, val) {
    let foundIndex = states.indexOf(state)
    for (let i of states) {
        if (states.indexOf(i) === foundIndex) {
            return "found"
        }
    }
    return "not found"
}

checkState("New Jersey", 1)