const AddNumbers = require("../addNumbers")

describe("AddNumbers",()=>{
    it("Should accepts two numbers and return their sum",()=>{
        expect(AddNumbers(2,3)).toEqual(5)
       // expect(AddNumbers(2,3)).toHaveReturnedWith(expect.any(Number))
    }) 
    it("Should work perfectly even with decimal numbers",()=>{
        expect(AddNumbers(2.6,3.4)).toEqual(6)
    })
})


//WHAT SHOULD WE TEST
//WHAT CAN WE TEST

// functions
// http api calls

//ui testing

//testable code: a lot of functions: Each function should perform a single task

//S - single responsibility principle
//O
//L
//I
//D