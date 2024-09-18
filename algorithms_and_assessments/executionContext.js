var x = 100
var y = 50
function getSum(n1,n2){
    var sum = n1 + n2 
    return sum 
}
var sum1 = getSum(x,y)
var sum2 = getSum(10,5)

/*
CREATION PHASE
    x variable is allocated memory and stores "undefined"
    y variable is allocated memory and stores "undefined"
    getSum() function is allocated memory and stored all the code. (functions get saved)
    sum1 variable is allocated memory and stores "undefined"
    sum2 variable is allocated memory and stores "undefined"

EXECUTION PHASE
    Places the value of 100 into the x variable
    Places the value of 50 into the y variable
    Skips the function because there isn't anything to execute
    Invokes the gemSum() function and creates a new function execution context

FUNCTION EXECUTION CONTEXT CREATION PHASE
    n1 and n2 variables are allocated memory and stores undefined 
    sum variable is allocated memory and stored "undefined"

FUNCTION EXECUTION CONTEXT EXECUTION PHASE 
    n1 and n2 are assigned 100 and 50 
    Calculation is done and 150 is put into the sum variable
    return tells the function execution context to return to the global execution context with the value of sum (150)
    Returned sum value is put into the sum1 variable
    Process repeats for sum2    





*/ 