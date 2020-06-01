import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates'; /* SingleDatePicker degen component */
/* SingleDatePicker component do have required props */
//const date = new Date()
// const now = moment() /*we get back instance of moment,if u don't provide anything its now  */
// console.log(now.format('MMM Do, YYYY')) /* format() method its going to print formatted version of the now */


export default class ExpenseForm extends React.Component {
/*The goal is to take these 4 state values and only use  defaults if no expense passed down  */
/* if an expense was passed down we want to start these off that those values(props.expense) */
/*To get that done we have to look at props.We have to define our state in the constructor function to access the props  */
//props.expense.createdAt timeStamp.<ExpenseForm/> componenty we reuse v AddExpensePage i EditExpensePage componentax poetomy kogda v <AddExpensePage/> componente use descrip,amount bari empty boladi,kogda v <EditExpensePage/>-e ispolzuem ExpenseForm dannyie dolzny byt populated
constructor(props){ /* state vklu4ili v constr function shtoby byl access to props() */
    super(props)
    this.state = {
        description: props.expense?props.expense.description:'',
        note: props.expense?props.expense.note:'',
        amount: props.expense?(props.expense.amount / 100).toString():'',
        createdAt: props.expense?moment(props.expense.createdAt):moment(),
        calenderFocused: false,
        error: ''
    }
}
    
    onDescriptionChange=e =>{
  
        const description= e.target.value /* inputtin valuei descrip: 'asd' */
        this.setState(()=>({description})) /*img gonna pass in updated function,will return implicitly object  */
    }
    onNoteChange = e=>{ /* kazhdyi raz kak e.target.value changes v object {note: e.target.value} budet i textarea nadpis budet 4itat s value={this.state.note} statea */
        const note =e.target.value
        // e.persist()
        this.setState(()=>({note}))
    }
    onAmountChange = e =>{
        /* we're not going to blindly set,conditional logic bolady */
        const amount = e.target.value; /*e.target.value; degen svezhyi value nado setStatepen v objecte zapisat  */
//!amount degen empty string bolsa(falsy) vse ravno input value set it isteimiz
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){this.setState(()=>({amount}))}
        /* tobedegi crietria shak kelmese we're not going to setState */
    }/* amount.match(/^\d*(\.\d{0,2})?$/) degen regular expression 12.12 boly kerek nukteden keyin 2 cifra kerek */
/* the big picture goal here is to use local component state to track the changes to all of these inputs,only when the user submits the form will do smth with that information */
/* When they submit the from will send that off to redux to either edit the existing expense or create the new one*/
/* value={this.state.description}} degen creates a read only input,we want to user to be able to change the value */
onDateChange = createdAt =>{ /* kogda user menyaet daty,on menyaetsya na to shto on postavil,createdAt degen shto on postavil */
/*onDateChange function boladi,its got to get called with moment() instance when someone picks a new day from the calendar  */
if(createdAt){this.setState(()=>({createdAt}))}
    /* if there is no createdAt(esli udalit delete keymen) do not nothing */
/* this is going to prevent the user from being able to clear that value */
}
onFocusChange= ({focused}) =>{
    
    this.setState(()=>({calenderFocused:focused}))
}
onSubmit = e =>{
    e.preventDefault() /* full page refesh bolmaidy kogda button baskan kezi */
/* description men amount required field,calendarmen,note optional */
    if(!this.state.description || !this.state.amount){ /* on uzhe napisal description i amount field,kogda submit nazhimaet proveryaem esli ili net descr,amount,esli net 1-o iz dvux */
/* descr ili amount zhazbasa,hot' 1-ein,we want to render error to the screen */
        // Set error state equal to ''
        this.setState(()=>({error: 'Please provide description and amount.'}))

    }else{ /* if there is no error */
        // esli 1-yi raz s errorom bil mi hotim za4istit error
         this.setState(()=>({error: ''})) 
         this.props.onSubmit({ /* zdes peredaem object,v AddExpensePage prinimaem object dispatchim shtoby renderilsya expense,i redirecr props.history.push('/') */
             description: this.state.description,
             amount: parseFloat(this.state.amount) * 100, /*this.state.note degen 12.12 nado preobrazavat  */
             note: this.state.note,
             createdAt: this.state.createdAt.valueOf(), /*this.state.createdAt degen moment object  */
            
         }) /*this.props degen 4erez instance props onSubmit peredali <ExpenseForm  onSumbit(expense=>{console.log(expense)})/>onSubmit degen callback koi 4erep props peredaem i sdes vizivaem a v propse v functione polu4im expense,shtoby store.dispatch(addExpense(expense)) sdelat 4toby za renderit etot expense  */
    }
}
    render() { /*let's setup onSubmit handler for the form,kogda submit sdelaet redirect boladi dashboard page-ge  */
        return ( /* kogda addExpense nazhimaet button vizivaetsya onSubmit function i peredaet object a v EditExpesePage-e prinimaem onSubmit(expense)=>{} */
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input 
                        value={this.state.description} 
                        autoFocus 
                        placeholder="Description"
                        onChange={this.onDescriptionChange}
                    /> {/* autoFocus is going to make sure that when we visit the page it automatically puts the cursor and focus right in input */}
                    <input 
                        type="text" 
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calenderFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={(day)=> false} 
                     />
                    <textarea 
                        value={this.state.note}  
                        onChange={this.onNoteChange}
                        placeholder="Add a note for your expense (optional)">
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }/*date degen-moment object that represents where you want to start,we wanna start at now,when the user loads the page,bugingi kundi korsetemiz  */
//numberOfMonths={1} degen calendarda 1 ai korsetedi.isOutsideRange={(day)=> false}  degen otken shakti calendarda korsetedi
/* onFocusChange degen handler when react dates library needs to change that value */
}


/*How to simulate user interaction in your test cases.If I submit the form with bad data I would expect that error gets set and rendered to the screen. */
//We will write test case that makes sure an error gets rendered when the form is submitted without a description/an amount