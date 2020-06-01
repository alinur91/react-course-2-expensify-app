import React from 'react';
import {Link} from 'react-router-dom';
  
  
  /* we don't want full page refresh.Add event listeners for our links,then overwrite browsers default behavior*/
  /* Link uses client-side routing as opposed to server-side routing(full page refresh) */
  
  const NotFoundPage = () => (
    <div> 
  {/*  <Link> swaps things out on the fly and makes a new call to ReactDOM.render,it renders ExpenseDashboardPage component  */}
      404 - <Link to="/">Go Home</Link> {/* we use link everywhere except navigation */}
    </div>
  )

  export default NotFoundPage;