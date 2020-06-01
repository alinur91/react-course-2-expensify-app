import moment from 'moment';

//Filters Reducer(po defalty sortBy idet po date)
const filtersReducerDefaultState ={
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
}
/* reducers are just function we pass in various things we expect various things to come out */

export default (state=filtersReducerDefaultState, action) =>{ /* state i action degen object */
    // console.log(action)
    switch(action.type) { /* action degen obj,type kandai?sortBy? */
        case 'SET_TEXT_FILTER': return {...state, text: action.text} //store.dispatch(setTextFilter('water') water=action.text) //export default setTextFilter = (text='') =>({type: 'SET_TEXT_FILTER',text /* eto budet action v reducere */})
        case 'SORT_BY_AMOUNT': return {...state,sortBy: 'amount'} /* myna object return bolsa state-ka zapisvaetsya */
        case 'SORT_BY_DATE': return {...state,sortBy: 'date'}
        case 'SET_START_DATE': return {...state,startDate: action.startDate}
        case 'SET_END_DATE': return {...state,endDate: action.endDate}
        default : return state
    }
}