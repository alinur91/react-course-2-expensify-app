import React from 'react'; /* importiruem React potomy shto componenty <ExpenseListItem/> ispolzuem */
import ExpenseListItem from '../../components/ExpenseListItem'; 
import {shallow} from 'enzyme'; // import because we're going to be using that to render our component
import expenses from '../fixtures/expenses'; /* array vidumanniy koldanamyz */

//ExpenseListItem it takes some data in it renders smth,add a shapshot for what it renders.Its going to allow us to track changes to the components over time

test('should render ExpenseListItem with expense',()=>{ // It expects few props {id,description,amount,createdAt}
const wrapper = shallow(<ExpenseListItem {...expenses[0]}/>) /*{...expenses[0]} degen ===> <ExpenseListItem id='123' description='rent' amount=900 />  */
/*this adds object expenses[0], this ... spreads it out adding all of its properties as props to ExpenseListItem  */
/* <ExpenseListItem/> vizivaem ety componenty i polu4aem JSX==><div>
    <Link to={`/edit/${id}`}> <h3 > {description}. </h3> </Link> 
        <p>{amount} - {createdAt}</p>
    </div> */
    expect(wrapper).toMatchSnapshot()  /* make assertion */
/* esli naprimer v ExpenseListItem.js 4eto kakoi-nibud symbol dobavim ne4aino,zdez test will notify it */

})