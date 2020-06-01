import {createStore} from 'redux'; /* we're going to call once to create the store */

// Action generators - functions that return action object

const incrementCount = ({incrementBy=1}={}) =>({ /* if incrementBy exists -great!if not {incrementby:1} */
//We're going to use 1 byDefault,and we'll use the incrementBy value if its passed in
//Its going to get set equal to 1,if there's an object provided and it doesn't include this,if there is no object provided  If object isnt provided,default is going to be empty object.And when we try to destructor that empty object,incrementBy bolmaidy, end result is 1
    type: 'INCREMENT', /* returns a new action object */
    incrementBy
}) 
// Eti function sozdali shtoby vizivat over and over again, shtoby object postoyanno ne sozdavat store.dispatch({type: 'INCREMENT',incrementBy:1})
const decrementCout = ({decrementBy=1}={}) =>({
    type: 'DECREMENT',
    decrementBy
})

const resetCount = () =>({ 
    type: 'RESET'
})

const setCount = ({count}) =>({ /* store.dispatch(setCount()) */
    type: 'SET',
    count
})


/* reducer that deterimines what to do based off of an action */
            /* how do we wanna change the state. */

//Reducers
/* key attributes of a reducer */
// 1. Reducers are pure functions-->Output is determined by the input.It determines(what it returns) by what passed in to the function.It doesn't use anth outside of the funct scope and it doesnt change anth outside of the function scope either
// 2. Never change state or action.Just reading both off of this things,returning object that represents new state

/* reducer code cannot change the state or action,instead it should just read off of these 2 arguments,at the end it returns the new state */
const countReducer = (state ={count:0}, action)=>{ /* this.setState((prevState)=>({count: 0})) */
/* action degen store.dispatch({type: 'SET',count: 101}) */
    switch (action.type){ /* createStore() function return object,i budet hranitsya v store variable,s pomoshui store.getState() v console vivodet object{count:1} */
        case 'INCREMENT':
            return { /* this function inside createStore called reducer */
                count: state.count + action.incrementBy
            } /* reducers need to compute the new state based off of the old state and action */
        case 'DECREMENT':
            return { /* we don't want to change variables outside of the reducers scope,we dont want to rely on values from variables outside of the reducers scope */
                count: state.count -action.decrementBy /* state degen current count */
            }
        case 'SET':
            return { /* action degen store.dispatch({type: 'SET',count: 101}) */
                count: action.count
            }
        case 'RESET':
            return { /* changes to the state */
                count: 0 
            } 
        default: 
        return state;
    }

}


/*createStore() gets called(triggered) when we do store.dispatch({type:'DECREMENT',decrementBy:1})  */
/* default state={count:0}.createStore()-ga pass in a function,that funct gets called once right away */
const store = createStore(countReducer)
/* watch for changes to the redux store. */
const unsubscribe= store.subscribe(()=>{ /* return value from subscribe is a functiotn  */
 /* this function gets called every single time the store changes */   

 //We can fetch the current state,get that objec back using getState()
console.log(store.getState()) /* return current state,object{count:0} */
});



/* redux state container */


/* Actions allow us to change the redux store.Action is an object,that gets sent to the store */
//This object(Action) describes the type of action we'd like to take. increment,decrement count,reset.
/* this is going to allow us to change the store over time. */
// store.dispatch({ /* action type,its convention,we want to send this to the store,dispatch allows us to send Action object to the store */
//     type: 'INCREMENT' /* 4 changes to the state */
// } /* ACTIONs are a way of communacating with the store,its an object */
// ); /* and store can do smth with info,for example increase count by 1 */

/* return value from subscribe is a functiotn  */
//unsubscribe() /* unsubscribe from changes,the state is still changing we're just not being notified via this subscribtion */

// store.dispatch ({ /* dispatch triggers createStore function,it runs */
//     type: 'INCREMENT',  /* type property obyazytelen */
//     incrementBy: 5 /* action.incrementBy esli nety,to undefined(falsy) */
//      /* dynamic information from user input  */
// })

/* Actions describe the fact that smth happened but they dont specify how the app state changes*/
store.dispatch(incrementCount({incrementBy:5}))

store.dispatch(incrementCount())
/*incrementCount() returns a new action object.{type: 'INCREMENT'} mozhno v console videt oshibku */

store.dispatch(resetCount())

store.dispatch (decrementCout({decrementBy: 10}) )/* dispatch triggers createStore function,it runs, i store.subscribe(()=> store.getState()) */
//decrementCout({decrementBy: 10}) vernet object {type:'DECREMENT',decrementBy: 1(ili 10)}

store.dispatch (decrementCout())/* dispatch triggers createStore function,it runs */

store.dispatch(setCount({count: -101}))

store.dispatch(resetCount())