import selectExpenses from '../../selectors/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses'


test('should filter by text value',()=>{
//Each test case is going to have their own set of filters.
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
/* list of expenses we're going to be filtering and those filter values  */
    const result = selectExpenses(expenses,filters)
   /* whay should comeback?array of 1 object */
    expect(result).toEqual([expenses[2]])
})


test('should filter by startDate',()=>{
/* startDate i endDate we expect to be moment instances.Its not enough to just have numbers for the startDate and endDate */
/*the problem is that we have items that are sec away from each other.Because we're relying on by days  */
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0), /* 1st of jan 1970 */
        endDate: undefined
    }
    const result = selectExpenses(expenses,filters)
/* 2 item 1-yi po sortirovke potomy shto pozhe */
    expect(result).toEqual([expenses[2],expenses[0]])
})

test('should filter by endDate',()=>{
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).subtract(3,'days'), /* naiti v arraye between 1st of jan 1970 i 21 of jan 1970,resultat budet [expenses[0],expenses[2]] */
    }
    const result = selectExpenses(expenses,filters)
    expect(result).toEqual([expenses[1]])
})

test('should sort by date',()=>{
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses,filters)
    expect(result).toEqual([expenses[2],expenses[0],expenses[1]])
})

test('should sort by amount',()=>{
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses,filters)
    expect(result).toEqual([expenses[1],expenses[2],expenses[0]])
})