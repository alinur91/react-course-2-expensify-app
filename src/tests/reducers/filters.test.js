import filterReducer from '../../reducers/filters';
import moment from 'moment';

/*The 1st test case make sure the default values get set up correctly,when the redux store 1st kicks off  */
/*Now a redux dispatches a special action for that.type(pin):"@@INIT",this is used internally be redux,we can use it in our test cases to make sure that the reducer sets itself up correctly  */


test('should setup default filter values',()=>{ /* arrow funct for the test */
 /* setup call to reducer.1st of is current state,the whole point is to test defaults.
 2nd argument,1st one that redux dispatches is just a simple object */  
 const state = filterReducer(undefined,{type:"@@INIT"})
 expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
 })
})


test('should set sortBy to amount', ()=>{
/* we want to make sure that when we dispatch this action sortBy actually changes over to amount */
const state = filterReducer(undefined,{type:"SORT_BY_AMOUNT"})

expect(state.sortBy).toEqual('amount')
})

test('should set sortBy to date', ()=>{
    /* we want to make sure that when we dispatch this action sortBy actually changes over to amount */
    const currentState ={
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined,
    }
    const action = {type:"SORT_BY_DATE"}
    const state = filterReducer(currentState,action)
    
    expect(state.sortBy).toEqual('date')
})


test('should set text filter',()=>{
    const text = 'tornado'
    const action = {
        type: 'SET_TEXT_FILTER',
        text
         /* eto budet action v reducere */
    }
    const state = filterReducer(undefined,action)

    expect(state.text).toEqual(text)
})

test('should set startDate filter',()=>{
    const startDate = moment().add(4,'days').valueOf()
    const action = {
        type: 'SET_START_DATE',
        startDate /* eto budet action v reducere */
    }
    const state = filterReducer(undefined,action)

    expect(state.startDate).toEqual(startDate)
})
/*Expenses reducer its pretty easy to test.We pass some data in.We get smth back, and we assert smth about what comes back  */
/* For React component we have different set of concerns,What renders under what situation?If i pass a prop into component I would expect it to render 1 way,if i pass in a prop with a different value I might expect it render a different way.toEqual()call?no!*/
/* how we can test components in terms of user interaction?If I change a form value or click a button is the component reacting correctly? */
/* If I change the textFilter is the state for the component changing? */
test('should set endDate filter',()=>{
    const action = {
        type: 'SET_END_DATE',
        endDate: moment() /* eto budet action v reducere */
    }
    const state = filterReducer(undefined,action)

    expect(state.endDate).toEqual(action.endDate)
})