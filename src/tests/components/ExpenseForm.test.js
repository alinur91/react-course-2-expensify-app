import React from 'react';
import {shallow} from 'enzyme';
import moment from 'moment';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses'

test('should render ExpenseForm correctly',()=>{
const wrapper = shallow(<ExpenseForm />)  /* passing inside what we're trying to render: a single instance of ExpenseForm */
expect(wrapper).toMatchSnapshot() /* to match existing snapshot */
/* createdAt:moment() kazhdyi raz raznyi poetmoy etot test will fail,we need to get back consistent data */
/* To fix this we're going to mocking out moment,we're going to put fake version  of the moment library,that allows us to define what happens when the code calls moment(),we just going to return a moment at a specific point in time*/

})

/*Snapshot is always going to match because we forced moment() to start a specific point in time if no point in time was provided  */

test('should render ExpenseForm with expense data',()=>{
    const wrapper = shallow(<ExpenseForm expense={expenses[0]}/>)
    expect(wrapper).toMatchSnapshot()
})

test('should render error for invalid form submission',()=>{
/*How to simulate user interaction in your test cases.If I submit the form with bad data I would expect that error gets set and rendered to the screen. */
//We will write test case that makes sure an error gets rendered when the form is submitted without a description/an amount


    const wrapper = shallow(<ExpenseForm/>) /* shallow render ExpenseForm component */
    expect(wrapper).toMatchSnapshot() //error renders correctly
//We have to find the form and then we have to simulate submit,wrapper degen JSX(html elements) sonyn ishinde <form> taby kerek bizge
// wrapper.find('form') degen we have access to form document.querySelector('form'),we need to simulate an event
/* simulate gets called with an event and arguments */
wrapper.find('form').simulate('submit',{
    preventDefault: ()=>{ }
/* we need to fake e.preventDefault(),when we simulate onSubmit,we'arent passing anything for this,e=unedifned,we can  */
//we can define the e argument by passing 2nd argument
/* 2nd argument we're expecting an object,preventDefault degen functinon,jest-gi errordi remove istedik */
    
})
/* we want to make sure that what should have happened did happen
  this code should run: this.setState(()=>({error: 'Please provide description and amount.'}))
  We should now have a state for error that does contain smth,we can fetch state off of wrapper
  state allows to fetch state for that component.we can call state with no argument,it'll return the entire state object expect(wrapper.state().foo).to.equal(10);
  we're going to write an expect statement that fetches the state and makes sure that it's not empty string
*/
/*this.setState(()=>({error: 'Please provide description and amount.'})) error.length >0 uitkeni description zhazbadyk poetomy error:'Please provide description and amount'*/
    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot() //error renders correctly

})


//simulate change event.When the description input changes onDescriptionChange=()=>{it does set the state for correct desciption}
/* onDescriptionChange=e =>{
        const description= e.target.value /* inputtin valuei descrip: 'asd' 
        this.setState(()=>({description})) */

test('should set description on input change',()=>{
    const value = 'New description'
//1.Render expenseForm 2. Change the input. 3.Make assertion checking that the description state was set
    const wrapper= shallow(<ExpenseForm />) /* 1yi input ol descriptiondiki */
    wrapper.find('input').at(0).simulate('change',{
        target: {value} /*target: {value} degen input.value='New desctiption' degen soz  */
    }) //1-yi input fetched by index.
    expect(wrapper.state('description')).toBe(value)
})


test('should set note on textarea change', ()=>{
    const value = 'New note'
    const wrapper = shallow(<ExpenseForm />)
//1.Render expenseForm 2. Change the input. 3.Make assertion checking that the description state was set
wrapper.find('textarea').simulate('change', { /* onNoteChange vozratit object */
        target: {value}
    })
    expect(wrapper.state('note')).toBe(value)
})

test('should set amount if valid input',()=>{
    const value = '12.12'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change',{
        target: {value} /* event name change,event object */
    })
    expect(wrapper.state('amount')).toBe(value)
})


test('should not set amount if invalid input',()=>{
    const value = '12.123'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change',{
        target: {value}
    })
    expect(wrapper.state('amount')).toBe('')
})


test('should call onSubmit prop for valid form submit',()=>{
//mock functions(spy).These allow us to create a little function,we can the pass it into our components we can make sure when that event happens like form submission it Was called called certain number of times,called with specific data
    const onSubmitSpy = jest.fn() /*creates a fake functions,we're going to be pass them into our components. it returns the new spy */
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>)
//Component renderred with the spy

/* make sure its called,pass the spy into the component that we render and simulate things like form submission */
    /* check if the spy was called */
    /* its going to throw an error if spy was never called */
//We need to make sure the spy thatwe pass into expenseForm not only was called but was called with the correct object onSubmit({discription: 'asd',amount: parseFloat(this.state.amount)})

wrapper.find('form').simulate('submit',{
    preventDefault: ()=>{ }
/* we need to fake e.preventDefault(),when we simulate onSubmit,we'arent passing anything for this,e=unedifned,we can  */
//we can define the e argument by passing 2nd argument
/* 2nd argument we're expecting an object,preventDefault degen functinon,jest-gi errordi remove istedik */
    
})
expect(wrapper.state('error')).toBe('') /* error gets cleared */
expect(onSubmitSpy).toHaveBeenLastCalledWith({ /* props onSubmit gets called with the correct stuff */
    description: expenses[0].description,
    amount: expenses[0].amount,
    note: expenses[0].note,
    createdAt: expenses[0].createdAt,
})

})

test('should set new date on date change',()=>{
    const now = moment()
    const wrapper = shallow(<ExpenseForm/>)
//how we can trigger the prop from that child component from singleDatePicker
//onDateChange={this.onDateChange} <===prop
wrapper.find('SingleDatePicker').prop('onDateChange')(now)//now degen createdAt(user calendar nazhal)
expect(wrapper.state('createdAt')).toEqual(now)
})


test('should set calendar focus on change',()=>{
    const focused = true
    const wrapper = shallow(<ExpenseForm/>)
//how we can trigger the prop from that child component from singleDatePicker
//onDateChange={this.onDateChange} <===prop
wrapper.find('SingleDatePicker').prop('onFocusChange')({focused})//now degen createdAt(user calendar nazhal)
expect(wrapper.state('calenderFocused')).toBe(true)
})

