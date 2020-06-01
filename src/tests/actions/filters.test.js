import moment from 'moment';
import {
    setTextFilter,
    sortByAmount,
    sortByDate,
    setStartDate,
    setEndDate
} from '../../actions/filters';


test('should generate set start date action object',()=>{ /* 0 is referred to 1st of jan 1970 */
    const action = setStartDate(moment(0))

    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test('should generate set end date action object',()=>{
    const action = setEndDate(moment(1000))

    expect(action).toEqual({ /* 1000ms degen 1sec, 1sec otti since 1st of jan 1970 */
        type: 'SET_END_DATE',
        endDate: moment(1000)
    })
})

test('should generate  setTextFilter action object with text value',()=>{
    const text = 'rent'
    const action = setTextFilter(text) /* recieved  */

    expect(action).toEqual({ /* expected */
        type: 'SET_TEXT_FILTER',
        text
    })
})

test('should generate  setTextFilter action object with default values',()=>{
    const action = setTextFilter() /* recieved  */

    expect(action).toEqual({ /* expected */
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})

test('should generate sortByAmount action object',()=>{
    expect(sortByAmount()).toEqual({ /* expected */
        type: 'SORT_BY_AMOUNT'
    })
})

test('should generate sortByDate action object',()=>{
    expect(sortByDate()).toEqual({ /* expected */
        type: 'SORT_BY_DATE'
    })
})