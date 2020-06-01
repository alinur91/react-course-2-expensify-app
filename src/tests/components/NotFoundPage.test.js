import React from 'react'; /*Dlya 4ego React importiruem?Potomy shto <ExpenseDashboardPage/> componenty zdes ispolzuem  */
import { shallow } from 'enzyme'; /* shallow() vernet JSX */
import NotFoundPage from '../../components/NotFoundPage';

/* Dlya 4ego delaem test ExpenseDashboardPage componenty?Shtoby v eto file
vdrug kakaya-to symbvol ne poyavilsya slu4aino */
test('should render NotFoundPage correctly',()=>{
    const wrapper = shallow(<NotFoundPage/>) /* returns JSX */
    expect(wrapper).toMatchSnapshot()
})
