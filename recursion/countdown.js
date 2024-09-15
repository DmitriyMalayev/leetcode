function countDown(num) {
    if (num === 0) {
        console.log("Liftoff")
        return
    }
    console.log(num)
    countDown(--num)
}

countDown(10)