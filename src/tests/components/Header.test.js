/*Expenses reducer its pretty easy to test.We pass some data in.We get smth back, and we assert smth about what comes back  */
/* For React component we have different set of concerns,What renders under what situation?If i pass a prop into component I would expect it to render 1 way,if i pass in a prop with a different value I might expect it render a different way.toEqual()call?no!*/
/* how we can test components in terms of user interaction?If I change a form value or click a button is the component reacting correctly? */
/* If I change the textFilter is the state for the component changing? */

//How are we going to virtually render our component?What GSX comes back?WE're not going to be viewing it in the browser.We're going to be accessing it via code.
//react-test-renderer library allows us to render our components inside of regular js code and we can assert smth about what got rendered.
import React from 'react';
import { shallow } from 'enzyme';
// import ReactShallowRenderer from 'react-test-renderer/shallow'; /* dlya testa component */
import Header from '../../components/Header';

//2 main ways we can test react components,shallowRendering and fullDOMrendering
//ge we're really concerned about what's getting rendered and shallowRendering does that.It only renders given componment
//FullDomRendering renders child component

test('should render Header correctly',()=>{
    const wrapper = shallow(<Header/>) /* JSX pass in */
// react test renderer < enzyme(enzyme lu4she)
/* The goal is to create a snapshot based off of the enzyme wrapper */
    expect(wrapper).toMatchSnapshot() /*toJSON() is going to take the wrapper it is going to extract just meaningful stuff the rendered output  */
/* To make enzyme work with snapshot testing functinality we have to install 1 library */
     //expect(wrapper.find('h1').text()).toBe('Expensify') 
/* we pass in selector,by id,class or element tag,length degen skolko h1 est v <Header> */
/* text() degen <h1>Expensify </h1> osy goi! */

//     const renderer= new ReactShallowRenderer() /* we create a new renderer */
//     renderer.render(<Header/>) /* JSX we're trying to render,this is the output we're trying to test */
// /* we render smth to it and we get render output */
// //make an assertion about the renderer.1st time its always going to pass,because there is no existing shapshot.JEST is going to go ahead and create a new one.Its going to create a snapshot of what the rendered <Header/> output looked like
// /* 2nd time we run its going to compare with existing one, it its the same great!the test will pass!If its not the test is going to fail!  */
// /* what if i wanted to remove 1 <Navlink/> v headere.I want to accept the new state */
//     expect(renderer.getRenderOutput()).toMatchSnapshot()

// console.log(renderer.getRenderOutput()) /* this is going to return the rendered output of JSX */
// /* what comesback from react.createElement(),we're going to use snapshots. */
// //Shapshots  allow us to track changes to data over time.
// //We'll create a snapshot of <Header/> at its current point in time,we will be able to get notified if this ever changes
// /* So if the Header output does change in away we don't want we can catch that */


})

/* enzyme is a renderer for react but much more full featured renderer*/
/* create a setup test file in our project and this is going to allow us to configure our test environment*/
