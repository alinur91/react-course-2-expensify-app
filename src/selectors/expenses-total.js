
export default expenses => {
    return expenses.map(expense=>expense.amount).reduce((sum,value)=> sum+value,0)
/*We have the empty array, end result is zero */
}