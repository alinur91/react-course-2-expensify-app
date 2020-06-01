import React from 'react';
import {Link} from 'react-router-dom';
/* kogda componenty podklu4aesh connect() k store {expenses: [{}],filters:{}} to 4erez propsa est dostyp u componenty k dispatch(someAction()) */
 const ExpenseListItem = ({id,description,amount,createdAt}) => ( /* sdez props desctrutre.<ExpenseListItem key={expense.id} description={expense.description},amount:{expense.amount},createdAt: {expense.createdAt} /> */
    <div>
    <Link to={`/edit/${id}`}> <h3 > {description}. </h3> </Link> 
        <p>{amount} - {createdAt}</p>
       
    </div>
)
//ExpenseListItem it takes some data in it renders smth,add a shapshot for what it renders.Its going to allow us to track changes to the components over time
export default ExpenseListItem /* v connect() v function ne zasovivaem potomy shto nam state ne nuzhen {expenses: [{}],filters:{}},mi connectiem shtoby k dispatch dostyp bil u componenty */
/*  dispatch(removeExpense({id})) delaem shtoby combineStore(expenses: ExpenseReducer) zarobatal vernet updated array, i s pomoshu connecta berem stae i renderem v componente ExpensesList renderim */

/* Kogda peredaem v instance ExpenseListItem propsi <ExpenseListItem  key={expense.id} description={expense.description} amount={expense.amount} createdAt={expense.createdAt} />  to mozhno destructure v samom componente*/

/*When we use connect you do not take anything from the state,we just neeed disptach,we dont need anthting from the state you just want to connect it to be able to access dispatch  */