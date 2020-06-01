import React from 'react';
import ExpensesList from './ExpensesList' /*ExpensesList degen export default  connect(mapStateToProps) (ExpensesList)  */
import ExpenseListFilters from './ExpenseListFilters'

const ExpenseDashboardPage = () =>( /* <ExpensesList /> vernet <h1>Expense List</h1> <h3>Water bill.</h3> <p>123 - 455</p>*/ 
/*<ExpenseListFilters i <ExpensesList /> componety budut imet dostyp k redux store,4erez connect/>  */
    <div> 
      <ExpenseListFilters />
      <ExpensesList />
    </div>
  );
  
export default ExpenseDashboardPage;