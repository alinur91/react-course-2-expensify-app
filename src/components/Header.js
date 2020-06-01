import React from 'react';
import {NavLink} from 'react-router-dom';


  /* <Navlink> is better suited for situations like navigation   */
  const Header = () =>(
    <header>
      <h1>Expensify</h1>
      <NavLink exact to="/" activeClassName="is-active">Dashboard</NavLink>
      <NavLink to="/create" activeClassName="is-active">Create expense</NavLink>
    </header>
  )


  export default Header;
  /*Expenses reducer its pretty easy to test.We pass some data in.We get smth back, and we assert smth about what comes back  */
/* For React component we have different set of concerns,What renders under what situation?If i pass a prop into component I would expect it to render 1 way,if i pass in a prop with a different value I might expect it render a different way.toEqual()call?no!*/
/* how we can test components in terms of user interaction?If I change a form value or click a button is the component reacting correctly? */
/* If I change the textFilter is the state for the component changing? */

//How we can snapshot test components that require props.