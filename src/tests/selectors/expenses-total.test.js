import selectExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'; /* array vidumanniy koldanamyz */




test('should return 0 if no expenses', ()=>{
    const res = selectExpensesTotal([])
    expect(res).toBe(0)
})


test('should correctly add up a single expense', ()=>{
    const res = selectExpensesTotal([expenses[0]])
    expect(res).toBe(1120)
})

test('should correctly add up a multiple expenses', ()=>{
    const res = selectExpensesTotal(expenses)
    expect(res).toBe(1955620)
})

