function printNumber(n) {
    if (n === 0) {
        return
    }
    console.log(n)
    printNumber(n - 1)
}

printNumber(10)

/*
Recursion Tips

Figure out the bare minimum pieces of information to represent your problem
Give reasonable defaults to the bare minimum pieces of information
Check the base case, is there any more work left to do? If there isn't, return.
Do some work. Call your function again, making sure that the arguments have changed in some fashion
*/ 