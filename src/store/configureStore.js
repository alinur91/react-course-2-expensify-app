import {createStore, combineReducers} from 'redux'; //redux library
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

export default ()=>{
/* previously we passed reducer function directly into createStore */
    const store = createStore( /* we have correct redux store */
        combineReducers({ /*key-value.key-root state,value-reducer that supposed to manage that  */
            expenses: expensesReducer,  /* now redux store is an object {expneses: []} */
            filters: filtersReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    return store;
}


