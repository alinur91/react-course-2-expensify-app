// Expenses Reducer
const expensesReducerDefaultState = []

export default  (state=expensesReducerDefaultState ,action) =>{
    // console.log(state)
/* return a new state? */
switch (action.type) { /* push changes original array,we don't want to change state or action,we just want to read off of it */
case 'ADD_EXPENSE': return [...state,action.expense]//state degen: [{id:123,description:'asd',note:'',amount:123,createdAt: 456}] action.expense degen {id:123,description:'asd',note:'',amount:123,createdAt: 456} /* returns a new array,return array soxranitsya k expensesReducer variablu */
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

