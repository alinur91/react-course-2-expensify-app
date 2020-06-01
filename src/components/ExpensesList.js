/* statleess functional component */
import React from 'react';
import {connect} from 'react-redux'; /*its called connect because it connects your component to the redux store  */
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses'

/* We do have the ability to use connect to pull data off but we haven't done that yet */
/* named export isteimyz shtoby protestit */
export const ExpensesList = props =>( /*props.expenses degen=state.expenses,state.expenses degen store.expenses,const createStore(combineReducers({expenses: expensesReducer, filters: filtersReducer}))  */
/* We've connected our 1st react component to the redux store */
/*expense degen {description:'asd',amount:123,createdAt: 44} ego mozhno object destructure pryam v instance ExpenseListItem polu4itstya <ExpenseListItem key={expense.id} description={expense.description},amount:{expense.amount},createdAt: {expense.createdAt} />   */
/*props.expenses degen---> expenses: selectExpenses(state.expenses,state.filters),minay degen selectExpenses(state.expenses,state.filters) ==> [{desc:'a',amount:123}]  */
// {...expense}/>) /*{...expenses} degen ===> <ExpenseListItem id='123' description='rent' amount=900 />  */
    <div> 
        {
            props.expenses.length === 0 ? (
                <p>No expenses</p>
            ): (
                props.expenses.map(expense=>(<ExpenseListItem key={expense.id} {...expense}/>))
            )
        } 
    </div>
)/*  dispatch(removeExpense({id})) delaem shtoby combineStore(expenses: ExpenseReducer) zarobatal vernet updated array, i s pomoshu connecta berem stae i renderem v componente ExpensesList renderim */
/* We're going to be using the connect function and all of our individual components */
/* Components like ExpensesList that need to either dispatch actions or read from the store */

/*Lets focus reading from the store.We have 2 items that are getting added to the list.Water bill,Gas bill  */
//Try to get those 2 items showing up
// Step one-->Create a new const for the higher order component.We get smth back from connect(),we do not get back higher order component
// we need to call that funct with the component,Why even have this argument at all.This is where we provide the information about what we want to connect
/* So we have a ton of information on the store does the component need all of it.No! it usually just needs a subset. */

const mapStateToProps =state=>{ /* state degen {expenses: [], filters:{}}, v app.js my sdelali store.dispatch(addExpense({description: 'Water bill',amount: 100,createdAt: 4444})) i store.dispatch(addExpense({description: 'Gas bill',createdAt: 444})) i store.dispatch(setTextFilter('bil'))   */
/*This function lets us determine what information from the store we want our component to be able to access  */
/* and stores state gets passed in  */ /* reading off of state */
return { /* now ConnectedExpenseList component is going to have access to the name prop */
    expenses: selectExpenses(state.expenses,state.filters) /*selectExpenses vizivaem potomy shto, store.dispatch(setTextFiler('bill')) sdelali, i sdez selectExpenses vernet etot updated array im going to passed that down to ExpenseList,selectExpenses vernet filtered,sorted array [{description:'a',id:12,amount:'bb'}] */
    
}
} /* So as the store changes this is automatically going to rerun,getting the fresh values in the component */

//When you connect a component to the redux store its reactive which means as the store changes your component is going to get re rendered with those new values
// This <ExpensesList/> doesnt need to worry about using store.subscribe or store.getState()
//Doesnt have to use any components state to manage that data.Instead all of that is done for us by react-redux

/* Mi zaconnectili <ExpensesList/> component k store */
export default  connect(mapStateToProps) (ExpensesList) // /*ExpensesList componente budet dostyp k expenses [{}] 4erez props.expenses  */
/* esli v store proishodit izmenenie,za connectinny componenta <ExpensesList/> zapuskaet connect() i vnutri <ExpensesList/> re-renderitsya obnovlennie stori  */
/* sdez delaem const ExpensesListConnected export shtoby use v ExpenseDashboardPage.js <ExpensesList /> */

/* We're going to learn how he can dispatch from a connected componenta <ExpensesList/>  */