const add = (a,b) => a+b

const generateGreeting = (name='anonymous') => `Hello ${name}!`

/* when we do have 1 of these test files that just runs we get access to a set of global variables that jest provides us,this allow us to construct our test cases */

/* testiruem s pomoshui test() function add() */
test('should add 2 numbers',()=>{
/* we're going to pass some input,look at output the return value,we're going to makue sure its correct */
    const result = add(3,4)
/* this test case passed because we didn't throw any errors from inside of this funct */
/* lets assert smth,we're going to check if it equals what we would expect if it does great,if not we're going to throw an error */
   expect(result).toBe(7)
}); /* JEST gives us an assertion library,it gies access to a function and we can use this function to make assertions about values in our program. */
/* 1st argument is name,2nd argument is going to be the code to run for the test case */
/* 2nd argument arrow function bolady */

 /* call test() */
test('greeting', ()=>{
    const result = generateGreeting('mike')

    expect(result).toBe('Hello mike!')
})


test('should generate greeting for no name',()=>{
    const result = generateGreeting() /* hotim protestit function generateGreeting shto vernet  */

    expect(result).toBe('Hello anonymous!')
})
