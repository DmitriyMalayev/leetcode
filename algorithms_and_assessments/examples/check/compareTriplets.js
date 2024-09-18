function compareTriplets(a, b) {
    const score = [0, 0]
    for (let i = 0; i < 3; i++) {
        a[i] > b[i] ? score[0]++ : score[1]++
    }
    return score
}

compareTriplets([1, 2, 3], [3, 2, 1])