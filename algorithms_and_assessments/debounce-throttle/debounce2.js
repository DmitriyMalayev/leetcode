const input = document.querySelector("input")
const defaultText = document.getElementById("default")
const debounceText = document.getElementById("debounce")
const throttleText = document.getElementById("throttle")

const updateDebounceText = debounce(text => {
    debounceText.textContent = text 
})

const updateThrottleText = throttle(text => {
    throttleText.textContent = text 
})

input.addEventListener("input", (e) => {
    defaultText.textContent = e.target.value   //immediate
    updateDebounceText(e.target.value)  //starts timer 
    updateThrottleText(e.target.value)
})

function debounce(cb, delay=1000){
    let timeout 
    return (...args) => {
        clearInterval(timeout)   //clears timeout every time the fn is called 
        timeout = setTimeout(()=> {
            cb(...args)
        }, delay)

    }
}

function throttle(cb, delay=1000){
    let shouldWait = false   
    let waitingArgs
    let timeoutFunction = () => {
            if (waitingArgs == null){
                shouldWait = false 
            } else {
                cb(...waitingArgs)
                waitingArgs = null 
                setTimeout(timeoutFunction, delay)
            }
        } 

    return (...args) => {
        if (shouldWait) {
            waitingArgs = args 
            return 
        }
            
        cb(...args)
        shouldWait = true  
        setTimeout(timeoutFunction, delay)     
    }
}
