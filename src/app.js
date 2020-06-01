import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';// We're going to be using the provider component once at the root of our app//We're going to be using connect for every single component that needs to connect to the redux store
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css'; /* all browsers start from the exact same place we did it that by adding in a SCSS reset */
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'; /* react-date degen calendar picker tool  */

/* react-redux-is a library that allows us to connect our redux store to our react-components.It uses pattern known as higher order components. */
const store = configureStore() /* we can use store.dispatch,store.subscribe */
/*Sort their data out.We also want to give them a way to sort by amount,we will be setting up a select dropdown so they can pick the way they want to sort and view their expenses  */
//How do we get access to the store information from our react component?
// <Provider store> component and we get a connect function.

// We're going to be using the provider component once at the root of our app
//We're going to be using connect for every single component that needs to connect to the redux store

store.dispatch(addExpense({description: 'Water bill',amount: 100})) /* kogda kazhdyi raz dispatch delaem,addExpense() vernet object,i dispatch triggers createStore(combineReducers({ expenses: expensesReducer,filters: filtersReducer})) i dispatch vernet {expenses: [{id: 123,description:'asd',note:'as',amount:123}]} */
store.dispatch(addExpense({description: 'Gas bill',createdAt: 100,})) /* kogda kazhdyi raz dispatch delaem,addExpense() vernet object,i dispatch triggers createStore(combineReducers({ expenses: expensesReducer,filters: filtersReducer})) i dispatch vernet {expenses: [{id: 123,description:'asd',note:'as',amount:123},{id: 455,description:'bbb',note:'2',amount:456}]} */
store.dispatch(addExpense({description: 'Rent',amount: 10500}))
/* dispatch degen {expenses: [],filter:{}} napalnyaem,potom getVisibleExpenses()-pen vivodim updated array,setTextFilter() degen zna4it hotim [{description:}] vot eto pokazal */
// store.dispatch(setTextFilter('bil')) /* kogda kazhdyi raz dispatch delaem,addExpense() vernet object,i dispatch triggers createStore(combineReducers({ expenses: expensesReducer,filters: filtersReducer})) i dispatch vernet {expenses: [{id: 123,description:'asd',note:'as',amount:123},{id: 455,description:'bbb',note:'2',amount:456}], filters: {text: 'water',,sortBy: 'date',startDate: undefined,endDate: undefined}} */

// setTimeout( ()=>{store.dispatch(setTextFilter('water'))},3000)

const state =store.getState() /*store.getState() vernet {expenses: [{id: 123,description:'asd',note:'as',amount:123},{id: 455,description:'bbb',note:'2',amount:456}], filters: {text: 'water',,sortBy: 'date',startDate: undefined,endDate: undefined}}  */
// console.log(state)
const visibleExpenses = getVisibleExpenses(state.expenses,state.filters) 
/*state.expenses dege array of objects, a state.filters degen object {},getVisibleExpenses() returns updated array of objects   */
 console.log(visibleExpenses)
// stateles functional component(js function,it's stateless,they don't use this.state) vs  class based component
//React component is just ES6 class

/* when you pass smth into a component,you have access to it via children prop */
/* Passing JSX into a component not via props */
const jsx = (/* Provider is going to allow us to provide the store to all of the components that make up our app */
  // Provider component predostavit dostup k store vsem componentam
  /*We have to pass a prop  into provider,this is the store that we're trying to share with the rest of our app  */
  //So prop name is store and equal to redux store.store degen {expenses: [],filters:{}}, v drugix componentax u nas budet k etomy store dostyp 4erez connect((state)=>{return {expenseDescription: state.expenses}}) (ExpenseList) 4erez props mozhno expense dostyp vzyat
  <Provider store={store}> 
  <AppRouter />  
  </Provider>
)

/*1. We set up Provider component inside of the root of our app.This let us define the store that we want to provide it to all of our components */
/*2. We create a new HIGHER ORDER COMPONENTs using the connect function provided from react-redux */
// We call connect we define things that we want to get off of the store and we define the component that we want to create the connected version
//The end result is a brand new component which is just our component with the props from the store

ReactDOM.render(jsx,document.getElementById('app')) /* render Header to the screen */

/*Our components can render JSX,which means they can render other components,that allow us to create the nested structure  */

/*How indecision app(component) can pass data down to these <Header /><Action />,then how these guys Header Action can <IndecisonApp />  can let indecisionApp know that smth needs to change based off of user interaction*/
/* Component props allows components to communicate with 1 another */

// class OldSyntax {
//   constructor(){
//     this.name = 'mike'
//     this.getGreeting = this.getGreeting.bind(this) 
// /* this eto this.name shtoby access byl */
//   }
//   getGreeting(){
//     return `Hi,my name is ${this.name}!`
//   }
// }
/*Class properties syntax,advatage of this is ability to create functions that aren't
going to have their binding messed up  */
// const oldSyntax = new OldSyntax();
// const getGreeting = oldSyntax.getGreeting /*Instead of calling getGreeting you're storing it in getGreeting,to call it later */
// console.log(getGreeting())

// console.log(oldSyntax.getGreeting())

// //----------

// class NewSyntax{
//   name = 'Jenny'
//   getGreeting =() =>{ 
// /* getGreeting function always going to be bound to the class instance  */
//     return `Hi,my name is ${this.name}!`
//   }
// }
// const newSyntax = new NewSyntax();
// const newGetGreeting = newSyntax.getGreeting /* try to break this binding */

// console.log(newGetGreeting())


/*Component state allows our component to manage some data.Think about an object with vairous
key value pairs and when that data changes the component will auto rerender to reflect those changes.  */
/* Component is going to take care of rerendering itself.When it comes to setting up
state is to come up with a default set of values.{counter: 0}--->default state value
When we did this outside of the context of a react component we had variables,
In the case of React.component,we're going to translate variables into an object
  */

// 1.Setup default state object. {count: 0}.<Counter /> this component is going to render itself for the very 1st time using those default values.render() gets called, and res shows up to the screen
// 2. Component rendered with default state values*
// 3. Change state(based off of some event(button click)) .(app rerenders itself)Lets say the user click the +1 button,count changes from 0 to 1.handleAddOne(){} this method on class runs, and state changes <Counter/> changes. {count: 2}.
// 4. Component re-rendered using new state values. (app rerenders itself) So it brings the UI up to date with a component state.We don't do anything manually to get that done.We just change the state.Behind the sceenes. React.component API its going to see the state changed,its going to make sure UI gets updated
// 5. Statrt again at 3. When the data {count: 1} changes we want to rerender UI. state is an object.With initial data {count: 0} that gets rendered to the screen.State obj can be changes based off of some interactions like onClick={},or HTTP rreq,when we do change the state app will rerender itself auto





// stateles functional component(js function,it's stateless,they don't use this.state) vs  class based component


// const User = props =>{ //stateless functional component(this.state ne izpolzuet)
//     return ( /* stateless funct component doesn't have access to this.props,arrow funct do not either */
//         <div>
//             <p>Name: {props.name} </p>
//             <p>Age: {props.age}</p>
//         </div>
//     )
// /* statless funct component a faster than class based components */
// }

























// const obj = {
//     name: 'Andrew ',
//     getName(){
//         return this.name
//     }
// }

// // const funct = function(){
// //     console.log(this)
// // }
// // funct()

//  /* The problem is the context it ran is very different,obj.getName() is in the context of an obj,we get access to that obj as the this binding*/
//  //When we break it out into a function we lose that context,context doesn't get transferred,
//  //Now we have a regular funct. it have undefined for this by default
// const getName = obj.getName.bind({name: 'alisher'}) /* reference to that method */
// /* Set this binding in certain situations.We're going to do that using the bind method
// available on functions in js.When we call bind() we get our function back.Why bind is useful?
//  you can use the 1st argument to set the this context.We use bind in event handlers.*/



