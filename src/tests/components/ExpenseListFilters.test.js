import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';
import moment from 'moment'

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;
//initialize those values.Every single test access to variables up above,fresh version of them

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

test('should render ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});



//How do we change the props for 1 of the components that we're testing
test('should render ExpenseListFilters with alt data correctly', () => {
/* manipulate props for certain component */
/* with enzyme we're able to set props */
    wrapper.setProps({
        filters: altFilters
    })
    expect(wrapper).toMatchSnapshot();
  });

  test('should handle text change', () => {
    const value = 'buy'
    wrapper.find('input').simulate('change',{target:{value}})
    expect(setTextFilter).toHaveBeenLastCalledWith(value)  
    
  });

  test('should sort by date', () => {
    const value = 'date'
    wrapper.setProps({
      filters: altFilters
  })
    wrapper.find('select').simulate('change',{
      target: {value}
    })
    //sortByDate called
    expect(sortByDate).toHaveBeenCalled()  
  });


  test('should sort by amount', () => {
    const value = 'amount'
    wrapper.find('select').simulate('change',{
      target: {value}
    })
    //sortByDate called
    expect(sortByAmount).toHaveBeenCalled()  
  });

  test('should sort by amount', () => {
   const startDate = moment(0).add(4,'years')
   const endDate = moment(0).add(8,'years')
   wrapper.find('DateRangePicker').prop('onDatesChange')({startDate,endDate})
    expect(setStartDate).toHaveBeenLastCalledWith(startDate)  
    expect(setEndDate).toHaveBeenLastCalledWith(endDate)  
  });


  // test('should handle date focus changes', () => {
  //   const calendarFocused = 'endDate';
  //   wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
  //   expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
  // });
 