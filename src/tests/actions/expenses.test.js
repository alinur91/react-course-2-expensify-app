import {addExpense,removeExpense,editExpense} from '../../actions/expenses';

test('should setup remove expense action object',()=>{
    const action = removeExpense({id: '123abc'})
/*When returned value of function is object or array we want to use toEqual(),if we're using booleans numbers or strings toBe() use it  */
    expect(action).toEqual({ /* {} ==={} they are not equal */
/*toEqual is going to go over your array or object and assert that all of the properties are the same. Use .toEqual to compare recursively all properties of object instances (also known as "deep" equality). It calls Object.is to compare primitive values, which is even better for testing than === strict equality operator. */
/* For example, .toEqual and .toBe behave differently in this test suite, so all the tests pass: */
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    }) /* assert smth what comesback */
})

test('should setup edit expense action object',()=>{
    const action = editExpense('123',{description:'rent',amount:123})

    expect(action).toEqual({ /* make assertion, im going to expect smth about the action object,i'm going to expect it to equal to the follow object */
        type: 'EDIT_EXPENSE',
        id: '123',
        updates: {description:'rent',amount:123}
    })
})


test('should setup add expense action object with provided values',()=>{
    const expenseData = {
        description: 'milk',
        note: 'buy a milk',
        amount: 0.5,
        createdAt: 123456
    }
    const action = addExpense(expenseData)

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
           ...expenseData,
           id: expect.any(String) /* id u nas uuid() random string, poeteomy,expect.any(String) */
           
        }
    })
})

test('should setup add expense action object with default values',()=>{
    const action = addExpense()

    expect(action).toEqual({ /* toEqual potomy shto object compare */
        type: 'ADD_EXPENSE',
        expense: {
            description:'',
            note:'',
            amount:0,
            createdAt:0,
            id: expect.any(String) /*expect.any(String) is way to assert smth about the type of value,if you don't know what the value is going to be  */
        }
    })
})