import React from 'react'; /* Component(JSX) koldanamyz poeteomy import */
import {ExpensesList} from '../../components/ExpensesList';  /*Pass in props and make sure it renders correctly. we want test <ExpensesList /> unconnected version because we want to be able to provide a set of dynamic props */
import {shallow} from 'enzyme'; // import because we're going to be using that to render our component
import expenses from '../fixtures/expenses'; /* array vidumanniy koldanamyz */
//These are the imports that we need to snapshot test <ExpenseList/>
/* we dont want these props to come from the store,we're going to provide expenses directly */

test('should render ExpenseList with expenses',()=>{
//We're going to see what happens when we render expense list with given expenses(ush item v arraye vidaumannie)
    const wrapper = shallow(<ExpensesList expenses={expenses}/>)
    expect(wrapper).toMatchSnapshot() /* 1st time run there is no existing snapshot,test wil pass and will create a new snapshot,1 snapshot was added,esli ol snapshot will change we'll get notified */
})

//We could also create a test case to see what happens when we have no expenses,when we have that empty array
/*When there are expenses they show up and when there are no expenses we get our error message */
/*If either of those things change the snapshot test will fail,alerting us and we'll be able to respond accordingly  */
test('should render ExpenseList with empty message',()=>{
    const wrapper = shallow(<ExpensesList expenses={[]} />) /* what happens when we pass empty array? */
    expect(wrapper).toMatchSnapshot() /* 1st time run there is no existing snapshot,test wil pass and will create a new snapshot,1 snapshot was added,esli ol snapshot will change we'll get notified */

})