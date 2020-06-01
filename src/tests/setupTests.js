/* enzyme is a renderer for react but much more full featured renderer*/
/* create a setup test file in our project and this is going to allow us to configure our test environment*/
//This is going to be a file that runs that allows us to configure the environment we're running in
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ /* setup test file */
    adapter: new Adapter()
})