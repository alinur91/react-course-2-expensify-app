import React from 'react'
import { shallow } from "enzyme"
import expenses from '../fixtures/expenses'
import { EditExpensePage } from "../../components/EditExpensePage"

let editExpense,removeExpense,history, wrapper;
//we use beforeEach to define variable up above
beforeEach(()=>{
    editExpense = jest.fn() /* spy */
    removeExpense = jest.fn() /* spy */
    history = {push: jest.fn()} //this.props.history.push('/')
    //render that component EditExpensePage
wrapper = shallow(<EditExpensePage  
editExpense={editExpense} 
removeExpense={removeExpense}
history = {history}
expense = {expenses[0]}
/>)
})

test('should  render EditExpensePage', ()=>{
    expect(wrapper).toMatchSnapshot()
/* We have all of the data correctly getting passed down into ExpenseForm */
})

test('should  handle editExpense', ()=>{
// To make sure that EditExpense gets called, i need to do is trigger onSubmit on expense form and we can use spy to make sure the correct data was passed and push and editexpense
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0])
    /* what should happen to those spyies? */
    expect(history.push).toHaveBeenLastCalledWith('/')
    /* what editExpense called with */
expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id,expenses[0])

})

test('should  handle removeExpense', ()=>{
    // To make sure that EditExpense gets called, i need to do is trigger onSubmit on expense form and we can use spy to make sure the correct data was passed and push and editexpense
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/')
expect(removeExpense).toHaveBeenLastCalledWith({id: expenses[0].id})

})