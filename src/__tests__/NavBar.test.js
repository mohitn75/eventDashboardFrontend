import React from 'react';
import '../setupTests';
//import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import NavBar from '../components/creator/Navbar';
import {shallow,mount} from 'enzyme';



it('renders without crashing',()=>{
  const wrapper = mount(<NavBar.WrappedComponent current="creator-dash"/>);
  wrapper.debug();
  //expect(wrapper.debug()).toEqual(true);
})


/*test('renders learn react link', () => {
  const { getByText } = render(<Table />);
  const linkElement = getByText(/hello/i);
  expect(linkElement).toBeInTheDocument();
});
*/