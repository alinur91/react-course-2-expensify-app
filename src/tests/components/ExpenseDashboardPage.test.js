import React from 'react'; /*Dlya 4ego React importiruem?Potomy shto <ExpenseDashboardPage/> componenty zdes ispolzuem  */
import { shallow } from 'enzyme'; /* shallow() vernet JSX */
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';

/* Dlya 4ego delaem test ExpenseDashboardPage componenty?Shtoby v eto file
vdrug kakaya-to symbvol ne poyavilsya slu4aino */
test('should render ExpenseDashboardPage correctly',()=>{
    const wrapper = shallow(<ExpenseDashboardPage/>) /* returns JSX */
    expect(wrapper).toMatchSnapshot()

})
