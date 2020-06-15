import React, { Component } from 'react';
import {shallow} from 'enzyme';
import {ExpensesSummary} from '../../components/ExpensesSummary';


test('should correctly render ExpensesSummary with 1 expense',()=>{
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expenseTotal={235}/>) /* render component */
    expect(wrapper).toMatchSnapshot()

})

test('should correctly render ExpensesSummary with multiple expenses',()=>{
    const wrapper = shallow(<ExpensesSummary expenseCount={11} expenseTotal={23542236}/>) /* render component */
    expect(wrapper).toMatchSnapshot()

})