// Higher Order Component (HOC) - A component (HOC) that renders another component
// The goal of the HOC is to reuse code
//  Render highjacking. <------Advantage of using the HIGHER ORDER COMPONENT PATTERN
//Prop manipulation<------Advantage of using the HIGHER ORDER COMPONENT PATTERN
// Abstract state <------Advantage of using the HIGHER ORDER COMPONENT PATTERN

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => ( /* implicitly return some JSX */
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info} </p>
        {props.isAdmin && <p>{props.message} </p>}
    </div>
);

// Lets say he's creating a medical app and we're showing a lot of privileged info to the user and we want to aware when they're seeing private privileged info
//We want to wait to take any component we might render and add an admin message just above it,saying smth the information below is privileged,pls don't share.
//Could we add this <Info/> into every single component  that makes up our app.Sure!
//The goal of the HOC is to reuse code. Render highjacking.

const withAdminWarning = (WrappedComponent)=>{ /* regular function,not a component */
/* its going to get called with the component,WrappedComponent degen component */
/* props-pen eshtene istemeidy */
 return (props)=>( /* the 1st goal is to add admin warning in,the 2nd goal is to make sure we render WrappedComponent */
 /* the whole goal is to display the message above the component we're wrapping.WrappedComponent degen=> <Info/>===<WrappedComponent/>  */
 /* props.isAdmin true bolsa render <p>This is private info.Please don't share</p>,isAdmin kandai zhagdaida true bolady?kogda user zaloginen*/
 // <AdminInfo /> parent componenta mozhem use props ili mozhem pass down to child <WrappedComponent/>
    <div>
        {props.isAdmin && <p>This is private info.Please don't share</p>}
        <WrappedComponent {...props}/>
    </div>
 )
 /* spread out any given object,this has the effect of taking every key,value pair on that object and passing them down as props  */

 // {...props} degen ne?----->  In this case what props are getting into <AdminInfo info="This is the detail" ? Its an object {info: "This is the detail"} />

 // <WrappedComponent {...props}/> degen interpreted as <WrappedComponent info="This is the detail" message="Do you have any questions?"/> <Info/> = <WrappedComponent />
// All of the props are getting passed down to the child
 /* return a new component,the component we create right here,this is the HOC */
}
/* V regualr js function peredaem v ka4estve argumenta componentu, i returnim arrow function admin message <p>tag i instance of <Info/>===<WrappedComponent/> vizivaem <WrappedComponent/> */
// <WrappedComponent/> vernet JSX
const AdminInfo= withAdminWarning(Info) /* v regular function v ka4estve argumenta peredaem component */
//withAdminWarning(Info) vernet alternative version of this <Info/> component,its going to be the Higher Order Component
/*AdminInfo degen tobedegi component,higher order component  */
/*Its going to allow reuse code,Adding admin message <p>This is private info.Please don't share</p> to as many other components as we like without needing this code <p>This is private info.Please don't share</p> in each of components. */
/* Higher ORder component degen--> admin messagedi <p>This is private info.Please don't share</p> vo mnogix componetax ispolzovat shtoby */
//ReactDOM.render(<AdminInfo isAdmin={false} info="There are the detail" message="Do you have any questions?"/>,document.getElementById('app'))

/*requireAuthentication degen prostaya function that returns a higher order component  */
const requireAuthentication = (WrappedComponent) => { /* requireAuthentication generate Higher Order component */
/* return a Higher ORder component */
    return (props)=>( /* ternary operator esli ho4em pokazat odno iz 2, {props.isAdmin && <p>ASd</p>} logical && esli toka 1 pokazat */
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props} />:(<p>Please login to view the information</p>)}
        </div>
    )
}
// This Higher Order component pattern is going to allow us to modify and change a series of existing components without having to rewrite this code a buch of times
//Instead we've abstracted it away and we're able to reuse this as often as we need
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={true} info="There are the detail" message="Do you have any questions?"/>,document.getElementById('app'))

//To either show the component when the user is authenticated or to show message when they're not.
