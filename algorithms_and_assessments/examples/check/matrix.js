function matrix(n) {
    let results = []
    let counter = 1
    let start_column = 0
    let start_row = 0
    let end_column = n - 1
    let end_row = n - 1

    if (n < 3){
        return false 
    }
    for (let i = 0; i < n; i++) {
        results.push([])
    }

    while (start_column <= end_column && start_row <= end_row) {
        for (let i = start_column; i <= end_column; i++) { //top row 
            results[start_row][i] = counter
            counter++
        }
        start_row++
        for (let i = start_row; i <= end_row; i++) { //right side 
            results[i][end_column] = counter
            counter++
        }
        end_column--
        for (let i = end_column; i >= start_column; i--) { //bottom row 
            results[end_row][i] = counter
            counter++
        }
        end_row--
        for (let i = end_row; i >= start_row; i--) {
            results[i][start_column] = counter
            counter++
        }
        start_column++
    }
    return results
}

matrix(3)