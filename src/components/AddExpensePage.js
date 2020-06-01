import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {addExpense} from '../actions/expenses'

export class AddExpensePage extends React.Component{
  onSubmit=expense=>{ /* it takes the data and passed it through */
    // props.dispatch(addExpense(expense))
     this.props.addExpense(expense)
     this.props.history.push('/') /*Components we render inside of react-router they get a bunch of special props==> props.history.push  */
{/* dashboard pagege redirect / ,this is going to switch me over as if i clicked the link,which means we're not going through full page refresh  */}
   }
   render(){
     return (
        /* onSubmit ishindegi function gets called when the form gets submitted,with valid data
 and we get that data back,expense {description:'asd',amount:'asd'},4ere props peredaem onSumbut*/
 /*this.props degen 4erez instance props onSubmit peredali <ExpenseForm  onSumbit(expense=>{console.log(expense)})/>onSubmit degen callback koi 4erep props peredaem i sdes vizivaem a v propse v functione polu4im expense,shtoby store.dispatch(addExpense(expense)) sdelat 4toby za renderit etot expense  */
 /* expense page needs to be able to dispatch the given action to the redux store */
    <div> 
      <h1>Add Expense</h1>
        <ExpenseForm onSubmit={this.onSubmit}/> {/*push degen kak-budto link basty birey  */}
    </div>
     )
   }
}

const mapDispatchToProps = (dispatch) =>({
    addExpense: (expense)=> dispatch(addExpense(expense))
  })
//the goal is to return an object
  /* on here we define various props and these props are going to call dispatch */
    
/*When we're adding and edditing we can dispatch different stuff  */

/* 1st function is mapsStatesToProp=mynda undefined */
export default connect(undefined,mapDispatchToProps) (AddExpensePage);  
/* za connectili AddExpensePage componenty, and now we have access to props.dispatch*/
/* we do need to pass that component into the 2nd one */