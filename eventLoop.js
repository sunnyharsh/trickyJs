function eventLoop() {

    console.log("strart")
    setTimeout(() => {
        console.log("within setTimeout 1")
    }, 0)

    let p = new Promise((resolve, reject) => {
        resolve({ name: "sunny" })
    })
    setTimeout(() => {
        console.log("within setTimeout 2")
    }, 0)
    p.then((res) => {
        console.log(res)
    })

    console.log("end")
}
eventLoop()


//Remove duplicate value

// let arr = ["sunny", "amit", "rohan", "amit"];
// let newArr = new Set(arr)
// console.log(newArr)