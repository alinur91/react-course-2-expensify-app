import moment from 'moment';

// Get visible expenses
export default (expenses,{text,sortBy,startDate,endDate}) => { /* vse dispatch sdelali neskolko zdes polnaya informacia,s pomoshui etogo vernem array [{},{}] */
    return expenses.filter(expense=>{
const createdAtMoment = moment(expense.createdAt) //expense.createdAt cifra goi
const startDateMatch= startDate? startDate.isSameOrBefore(createdAtMoment,'day') : true; //if there is no start date we're never going to filter things out based off of that,startDate always be true if there is no startdate
//typeof startDate !== 'number' || expense.createdAt >= startDate; /*only a start date is a number do we want to filter expenses out  */
/*lets say startdate is undefined,and createdAt is 1,it will stay(wont be filtered).Lets say startDate is 2 and created_at is 1(it will not stay,sozdannyi data ranshe bil,a user pozhe pokazivaet startDate) etot false budet startDateMatch  */
const endDateMatch= endDate? endDate.isSameOrAfter(createdAtMoment,'day') : true;
//typeof endDate !== 'number' || expense.createdAt <= endDate;
const textMatch=expense.description.toLowerCase().includes(text.toLowerCase())

        
/* esli vse eto startDateMatch && endDateMatch && textMatch bydet true to  expense ostaetsya v arraye*/
        return startDateMatch && endDateMatch && textMatch
    }).sort((a,b)=>{ /* a,b degen object {id: 123,description:'asd',createdAt: 123,amount:123} */
        if(sortBy === 'date') { /* sortiruem po recent data */
            return a.createdAt > b.createdAt?-1:1
        } // I want to see my most expenses coming 1st,from sorting date i want to see recent expenses coming 1st
        else if(sortBy === 'amount'){
            return b.amount - a.amount /* [1(a),2(b)] b-a = polozhitelnoe chislo,zna4it menyaem mestami,sonda kemy retimen boladi 800,100,50 */
           // a.amount > b.amount?-1:1
        }
    })
}

//JEST testing framework