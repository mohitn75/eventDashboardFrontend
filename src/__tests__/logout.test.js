import React from 'react';
import '../setupTests';
//import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import logOut from '../components/logout';
import {shallow,mount} from 'enzyme';

it('renders without crashing',()=>{
  const wrapper = shallow(<logOut />);
  wrapper.debug();
})


/*test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/
