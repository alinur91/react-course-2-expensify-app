//import moment from 'moment'
const moment =require.requireActual('moment'); /* mock out given library */

export default (timestamp=0) =>{ /* fixed point in time */
/* this is the function we're going to be calling inside of the mock moment library */
/* when i call this in real app its going to use the moment library,when i call in test library we're going to be using the mock version of the library */
return moment(timestamp)
}
/*Snapshot is always going to match because we forced moment() to start a specific point in time if no point in time was provided  */

