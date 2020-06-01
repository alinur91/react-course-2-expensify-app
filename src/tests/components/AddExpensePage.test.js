import React from 'react';
import {shallow} from 'enzyme';
import {AddExpensePage} from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses'

let addExpense, history, wrapper

beforeEach(()=>{
    addExpense = jest.fn() /* we passed into component */
     history = {push: jest.fn()}
 wrapper = shallow(<AddExpensePage  addExpense={addExpense} history={history}/>)

})

test('should render AddExpensePage correctly',()=>{
//props pass isteimyz onSubmit i history
    expect(wrapper).toMatchSnapshot()
})


//When the form gets submitted both of our spies get called with correct information

test('should handle onSubmit', ()=>{
//We're gonna call this function <ExpenseForm onSubmit={this.onSubmit}/>
// onSubmit=expense=>{
//     // props.dispatch(addExpense(expense))
//      this.props.onSubmit(expense)
//      this.props.history.push('/') /*Components we render inside of react-router they get a bunch of special props==> props.history.push  */
// {/* dashboard pagege redirect / ,this is going to switch me over as if i clicked the link,which means we're not going through full page refresh  */}
//    }
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
// Both of our spies were called with the correct stuff
expect(history.push).toHaveBeenLastCalledWith('/')
expect(addExpense).toHaveBeenLastCalledWith(expenses[1])
})