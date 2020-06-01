import React from 'react';
import { BrowserRouter, Route, Switch,Link,NavLink} from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

  
  {/* instance of Route,if i have /about, /help, /contact page I need to use Route 3 times to setup those 3 pages */}
  {/* We will be providing some props.Route is going to take 2 things: we're gonna take path what URL do we wanna use for this route, also component(what should we show to the screen)   */}
  /*The API for browser router expects the child what we pass in between tags to either not exist or to have a length of 1.If we had another route we're going to be breaking that,v <div> shitaetsya 1 elementom.*/
  /* localhost:8080/create - osynda kirsek not found 404 shigadi.Because it using server-side routing for the 1st page load.1-st time you visit app,the browser needs to grab inital HTML and load the js before react router code even runs.create page-di serverden pitaetsya fetch but it doesn't exist.  */
  /* exact={true} degen--> its only going to show the ExpenseDashboardPage if the path exactly matches localhost:808 */
  /* path is completely optional.React router always considers that match */
  /* What does Switch do?When React Router sees switch,its going to move through your Route definition it stops when it finds a match.<Route/> esli naidet podhodyazhi on ostanovitsya.NotFound always matches */
  /* whole point of client-side routing is avoid communcating with the server,switch between pages without going through the full page refresh */
  
const AppRouter = ()=>(
<BrowserRouter> 
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={ExpenseDashboardPage} />  
          <Route path="/create" component={AddExpensePage} />
          <Route path="/edit/:id" component={EditExpensePage} />
          <Route  path="/help" component={HelpPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
)
/*Any time we use a component inside of a route we get access to special information  */

export default AppRouter;

//Component state vs Redux.They both aim to solve the same problem which is to manage the state for your app.this.setState(prevState=>{return {somedata: 'asd'}})
//Tracking changing data.There is no parent component to store the data.We have mulitple components trees.
//We need a way for components to be able to interact with the app state both getting and setting values without having to manually pass props down the entire componentree.
//Global redux state container. AddExpense can go anywhere!
//1.Where do I store my app state in a complex React app? Answer: Use Redux!
//2.How do I create components that are reusable? Answer: Use Redux!
//Redux is a state container.Redux store is just an object vs this.state= {}
//Each component can say hey I need some data from each component,I need to be able to change some data on the store
//Each component can communicate with the store.
