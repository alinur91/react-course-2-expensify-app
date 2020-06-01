//Filter by text value.We have no way to actually write to the store
/* We're going to learn how we can dispatch from a connected component */

import React from 'react'; /*import React from 'react'; vot eto delaem shtoby Componenty sozdavat  */
import {connect} from 'react-redux'; //zdez import delaem shtoby <ExpenseListFilters/> componenty podklu4it k store 4erez connect
import {DateRangePicker} from 'react-dates';
import {setTextFilter,sortByAmount,sortByDate,setStartDate,setEndDate} from '../actions/filters'; /* eto importiruem shtoby mozno bilo v componente props.dispatch(setTextFilter()) sdelat */
/* The goal from here is to get the old value off of the store*/
/* We set it to bill then water.Its really important that the input always matches up the current text value on the redux store.  store.dispatch(setTextFilter('bil')),store.dispatch(setTextFilter('water')) */
/* We're going to connect ExpenseListFilters to the store */
export class ExpenseListFilters extends React.Component {
    state = { /*  */
        calenderFocused: null
    }
    onDatesChange = ({startDate,endDate}) =>{ 
/* this function is going to get called with React dates library.Its going to get called with an object,on that obj we have startDate,endDate */
 /* we need to dispatch the correct actions to get the filters to change */       
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }

    onFocusChange= (calenderFocused) =>{
        this.setState(()=>({calenderFocused}))
    }

    onTextChange = e=>{
        this.props.setTextFilter(e.target.value)
    }
    onSortChange = e=>{
       if(e.target.value === 'date') {
           this.props.sortByDate()
       }else if (e.target.value === 'amount') {
           this.props.sortByAmount()
    }}

    render(){
        return ( /* props degen props.filters,value={} di we want to set whatever the current search is */
            /* How do we dispatch from component otpravit input value to the store,How do we do smth anytime the text input gets changed by the user */
            /* onChange handler takes a function,every single time input changes the function fires,e.target degen input */
            /* We need to change redux store,we need to use dispatch in order to update store*/
            /*Are keystrokes result in a change to the input because input value is always going to be text value on the store  */
            /* When we connect a component to redux we get some other information passed into the component,dev tool-dan koryge bolad naidesh componenty <ExpenseListFilters/> i tam krome filters u nas eshe dostyp k dispatch est==>props.dispatch*/
            /* Every single time we take a keystroke,input baskan sayin,props.dispatch(setTextFilter('e')) fires */
            /*For example we typed 'e' bukvy its going to get added onto the end,so now new state will be with an 'E' on the end,then we hit 'a' its going to add it onto the end  */
            /* kazhdyi raz input value changes onChange my otpravlyaem dispatchom setTextFilter(i bukvu)  */
            /*We have our very 1st component that is not just reading from the redux store,but its writing to the store  */
            /* value={props.filters.text} degen reading off of the store,setTextFilter(e.target.value) degen writing to the store */
            /* <input value="wa"> === dispatch(setTextFilter('wa')) sna4ala dispatch delaet,reducer zapisivaet new value,v vnizu c pomoshu connect() berem eti dannyi, i s stora 4itaem value={props.filters.text} */
            /* zatem /* esli v store proishodit izmenenie,za connectinny componenta <ExpensesList/> zapuskaet connect() i vnutri <ExpensesList/> re-renderitsya obnovlennie stori */
            /*As we change the select it actually changes the store,as the store changes,we're going to make sure to set the value  */
            /*When we set up our form inputs like our text inputs our select dropdowns and we use value onChange we're creating a controlled input.Input where the value is controlled by js  */
                <div> 
                    <input 
                     type="text" 
                     value={this.props.filters.text} 
                     onChange={this.onTextChange}/>
                    <select 
                    value={this.props.filters.sortBy} 
                    onChange={this.onSortChange}>
                        <option value="date">Date</option>
                        <option value="amount">Amount</option>
                    </select>
                <DateRangePicker
                    startDate ={this.props.filters.startDate}
                    endDate ={this.props.filters.endDate}
                    onDatesChange= {this.onDatesChange}
                    focusedInput= {this.state.calenderFocused}
                    onFocusChange= {this.onFocusChange}
                    showClearDates ={true}
                    numberOfMonths={1}
                    isOutsideRange={()=> false}
                 />     
                </div>
            )/*When someone picks option we figure out what value they picked.We'll use value="amount" behind the sceenes  */
            /* we have to set the value and we have to handle changes */
            /*Sort their data out.We also want to give them a way to sort by amount,we will be setting up a select dropdown so they can pick the way they want to sort and view their expenses  */
            /* The goal inside of here is to allow us to change those filters */
    }
}


const mapStateToProps = state =>({ /* on this object what we want off of the store? just filters we dont need expenses*/
    filters: state.filters
}) /*state degen {expenses: [{},{}], filters: {text:'asd'}} want we want off of the store?Zdez opredelim */
     

const mapDispatchToProps = dispatch =>({
    setTextFilter: (text)=> dispatch(setTextFilter(text)),
    sortByDate: ()=> dispatch(sortByDate()),
    sortByAmount: ()=> dispatch(sortByAmount()),
    setStartDate: (startDate)=> dispatch(setStartDate(startDate)),
    setEndDate: (endDate)=> dispatch(setEndDate(endDate)),
})

/* this is connected version of  <ExpenseListFilters />, */
export default connect(mapStateToProps,mapDispatchToProps) (ExpenseListFilters) //ExpenseListFilters degen <ExpenseListFilters/>
//mapStateToProps degen v functione budem imeet dostyp k redux store