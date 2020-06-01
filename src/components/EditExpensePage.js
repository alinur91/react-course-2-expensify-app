import React from 'react';
import {connect} from 'react-redux'; /* hotim podklu4tisya k redux store
step2 --> it's going to be to search the expenses array for expense with and id that matches this one {props.match.params.id} */
import {editExpense,removeExpense} from '../actions/expenses';
import ExpenseForm from './ExpenseForm';
 
export class EditExpensePage extends React.Component {
  onSubmit= (expense) =>{ /* v <ExpenseForme/> vizivaem onSubmit() a zdes prinimaem */
//     this.props.onSubmit({ /* zdes peredaem object,v AddExpensePage prinimaem object dispatchim shtoby renderilsya expense,i redirecr props.history.push('/') */
//     description: this.state.description,
//     amount: parseFloat(this.state.amount) * 100, /*this.state.note degen 12.12 nado preobrazavat  */
//     note: this.state.note,
//     createdAt: this.state.createdAt.valueOf(), /*this.state.createdAt degen moment object  */
   
// }) /*this.props.expense.id degen minay goi ===> expense: state.expenses.find(expense=> expense.id === props.match.params.id)  */
    this.props.editExpense(this.props.expense.id,expense) /* zdez prosto vizivaem editExpense(expense),v mapDispatchToProps-e dispatchom peredaem*/
    this.props.history.push('/') /*Components we render inside of react-router they get a bunch of special props==> props.history.push  */
  }
  onRemove= (expense) =>{ //this.props.expense.id degen mapStateToProps functionda retun bolady {expense: {}}
    this.props.removeExpense({id: this.props.expense.id})
    this.props.history.push('/') /*Components we render inside of react-router they get a bunch of special props==> props.history.push  */
  }
  
  render(){
    console.log(this.props.expense)
    return ( /* onSubmit= {this.onSubmit} degen v <ExpenseForm/>e vizivaem onSubmit() */
      <div>
        <ExpenseForm
          expense ={this.props.expense}
         onSubmit= {this.onSubmit}
         />
         <button onClick={this.onRemove} >remove</button>
      </div>
    )
  }
}

/*The difference between the AddExpensePage and EditExpensePage is <AddExpensePage/> is fine with those empty defaults and EditExpensePage isn't fine */
/* It wants to be able to overwrite the current values for that expense  */
 /* HIGher order component pen EditExpensePage componenta both have access to props */
    // console.log(props) /* <Router path="/create" component={AddExpensePage}> passing stuff in and that stuff can be useful as we start building more real world app */
/*Any time we use a component inside of a route <BrowserRouter>  we get access to special information(like location,params,querystring)  */
/* kogda zahodim v etot put' <Route path="/edit/:id" component={EditExpensePage} /> my izvlekaem id with the help of {props.match.params.id} */
    
/*  props.history.push('/')  degen redirect to main page */

const mapStateToProps = (state,props) =>{ /* state degen [{descr:'water',amount:23},{}] */
/* props degen <Route path="/edit/:id" component={EditExpensePage} /> osy goi path */
/* what are we searching for? {props.match.params.id} osy id-di expense izdeb zhurmiz */
/*How do we access it? We have access to the props right here.EditExpensePage-tin propsi */
/*We can take some of the current props that were passed into the higher order component and we can use them to calculate the props that we want to add on  */
/* react router it renders our higher order component,higher order component passes the props through and it also allows us to add on some new ones  */
  return { /* return true bolsa callback ishinde 1-yi item tabady,false bolsa eshkaisysi */
    expense: state.expenses.find(expense=> expense.id === props.match.params.id)
  }/* tobedegi <EditExpensePage/> componenta 4erez props access boladi props.expense dep */
}

const mapDispatchToProps = (dispatch) =>(
  { /* we get the data in and pass it through expense v samomo componente vizvali this.props.editExpense(expense) */
    editExpense: (id,expense)=> dispatch(editExpense(id,expense)), //editExpense vnutri etogo functiona dispatchim
    removeExpense: (data)=> dispatch(removeExpense(data))
  }
)

/* nado za connectit etot <EditExpensePage/> componenty k redux store.
Potomy shto we want to be able to get the entire expense object*/
  export default connect(mapStateToProps,mapDispatchToProps) (EditExpensePage);