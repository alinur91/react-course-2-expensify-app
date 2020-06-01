import uuid from 'uuid';

// ADD_EXPENSE
export const addExpense = (
    {
        description='',note='', /* default values */
        amount=0,
        createdAt=0
    }={}
) => ({ 
/* if object doesnt exist we will desctrutre empty object */
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

//REMOVE_EXPENSE
export const removeExpense = ({id}={}) =>( /* {id}={} degen zna4it dispatch(removeExpense({id})) degen soz object peredaem */
    {
        type: 'REMOVE_EXPENSE',
        id
    }
)

//EDIT_EXPENSE
export const editExpense = (id,updates) =>(
    {
        type: 'EDIT_EXPENSE',
        id,
        updates
    }
)