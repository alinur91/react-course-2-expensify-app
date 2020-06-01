import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';
// combineReducers is going to allow us to create multiple functions that define how a redux app changes

//Actions we need--->ADD_EXPENSE, REMOVE_EXPENSE,EDIT_EXPENSE,that for expensed array
//For filters array--->a lot of actions,SET_TEXT_FILTER,SORT_BY_DATE,SORT_BY_AMOUNT
//SET_START_DATE,SET_END_DATE

// ADD_EXPENSE
const addExpense = (
    {
        description='',note='', /* default values */
        amount=0,
        createdAt=0
    }={}
) => ({ 
/* if object doesnt exist we will desctrutre empty object */
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

//REMOVE_EXPENSE
const removeExpense = ({id}={}) =>(
    {
        type: 'REMOVE_EXPENSE',
        id
    }
)

//EDIT_EXPENSE
const editExpense = (id,updates) =>(
    {
        type: 'EDIT_EXPENSE',
        id,
        updates
    }
)

/* create a store that has 2 reducers */

// Expenses Reducer
const expensesReducerDefaultState = []

const expensesReducer = (state=expensesReducerDefaultState ,action) =>{
    // console.log(state)
/* return a new state? */
switch (action.type) { /* push changes original array,we don't want to change state or action,we just want to read off of it */
    case 'ADD_EXPENSE': return [...state,action.expense] /* returns a new array,return array soxranitsya k expensesReducer variablu */
/* aside from concat we can use spread operator.action degen object vnutri property expense,id,amount */
    case 'REMOVE_EXPENSE': return state.filter(({id})=> id !==action.id)
    case 'EDIT_EXPENSE': return state.map(expense=>{
/* action degen   {type: 'EDIT_EXPENSE',id,updates} updates degen {amount: 900} */
/* state degen [{id: "bed68040-5eed-4835-81d9-1ec45e9f06bf", description: "Rent", note: "rent for may", amount: 800, createdAt},{id: "9f0a4e1c-1f5c-4085-a425-277adb9116e8", description: "Buy a car", note: "", amount: 10000, createdAt: 0}] */
        if(expense.id === action.id){
            return { /* i want to return a new object,changing expense,i want to grab all existing properties,and overwrite any of the ones that were passed down */
                ...expense,
                ...action.updates
            }
        }else{
            return expense
        }
    })
    default: return state    
}
}

// SET_TEXT_FILTER
const setTextFilter = (text='') =>({
    type: 'SET_TEXT_FILTER',
    text /* eto budet action v reducere */
})

// SORT_BY_AMOUNT

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',

})

// SORT_BY_DATE
const sortByDate = () =>({
    type: 'SORT_BY_DATE',
 
})

// SET_START_DATE

const setStartDate = startDate =>({
    type: 'SET_START_DATE',
    startDate
})

// SET_END_DATE
const setEndDate = endDate => ({
    type: 'SET_END_DATE',
    endDate
})


//Filters Reducer(po defalty sortBy idet po date)
const filtersReducerDefaultState ={text: '',sortBy: 'date',startDate: undefined,endDate: undefined}

const filtersReducer = (state=filtersReducerDefaultState, action) =>{ /* state i action degen object */
    // console.log(action)
    switch(action.type) { /* action degen obj,type kandai?sortBy? */
        case 'SET_TEXT_FILTER': return {...state, text: action.text}
        case 'SORT_BY_AMOUNT': return {...state,sortBy: 'amount'}
        case 'SORT_BY_DATE': return {...state,sortBy: 'date'}
        case 'SET_START_DATE': return {...state,startDate: action.startDate}
        case 'SET_END_DATE': return {...state,endDate: action.endDate}
        default : return state
    }
}

// Get visible expenses
const getVisibleExpenses = (expenses,{text,sortBy,startDate,endDate}) => {
    return expenses.filter(expense=>{
const startDateMatch= typeof startDate !== 'number' || expense.createdAt >= startDate; /*only a start date is a number do we want to filter expenses out  */
/*lets say startdate is undefined,and createdAt is 1,it will stay(wont be filtered).Lets say startDate is 2 and created_at is 1(it will not stay,sozdannyi data ranshe bil,a user pozhe pokazivaet startDate) etot false budet startDateMatch  */
const endDateMatch= typeof endDate !== 'number' || expense.createdAt <= endDate;
const textMatch=expense.description.toLowerCase().includes(text.toLowerCase())

        
/* esli vse eto startDateMatch && endDateMatch && textMatch bydet true to  expense ostaetsya v arraye*/
        return startDateMatch && endDateMatch && textMatch
    }).sort((a,b)=>{ /* a,b degen object {id: 123,description:'asd',createdAt: 123,amount:123} */
        if(sortBy === 'date') { /* sortiruem po recent data */
            return a.createdAt > b.createdAt?-1:1
        } // I want to see my most expenses coming 1st,from sorting date i want to see recent expenses coming 1st
        else if(sortBy === 'amount'){
            return b.amount - a.amount /* [1(a),2(b)] b-a = polozhitelnoe chislo,zna4it menyaem mestami,sonda kemy retimen boladi 800,100,50 */
           // a.amount > b.amount?-1:1
        }
    })
}


// 1.store.dispatch(removeExpense({id: expenseTwo.expense.id})) vernet object(v createStore action) i triggers createStore,createStore vernet object 
// 2. createStore(combineReducers{expenses: expensesReducer}) vernet object, i novyi object smothrish store.subscribe( ()=>{ console.log(store.getState())})
//
store.subscribe( ()=>{
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters)
    console.log(visibleExpenses)
})
/*  addExpense returns an object,dispatch triggers createStore,v store budet hranistya {expenses: []} */
 const expenseOne= store.dispatch(addExpense({description: 'Rent', note: 'rent for may',amount: 800,createdAt: -1000}))/* this returns an object */
 const expenseTwo= store.dispatch(addExpense({description: 'Buy a udemy course', amount: 1000,createdAt: 1000}))
// const expenseThree= store.dispatch(addExpense({description: 'Buy a car', amount: 10000}))
// /*expenseOne,expenseTwo is an object  */

// store.dispatch(removeExpense({id: expenseTwo.expense.id})) /* returns a new object s u */
// store.dispatch(editExpense(expenseOne.expense.id,{amount: 900}))

// store.dispatch(setTextFilter('re'))
// store.dispatch(setTextFilter())

 store.dispatch(sortByAmount())
// store.dispatch(sortByDate())

// store.dispatch(setStartDate(0))
// store.dispatch(setStartDate())
//  store.dispatch(setEndDate(999))

const demoState ={
    expenses: [{ /* REDUCERS for expenses array i for filters object,to create the complete store */
        id: '123',
        description: 'Marry Kate"s medical bill',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined, /*we only going to show expenses whose createdAt property is between the 2 picked  */
        endDate: undefined
    }
}


// Components are going to be able to fetch data off of redux store so they can render smth to the screen
// Dispatch actions directly from our React components. Wo if we have a react component with a form somoeone can fill out that data submit the form and the react component can dispatch the neccarary action to change these stores data.