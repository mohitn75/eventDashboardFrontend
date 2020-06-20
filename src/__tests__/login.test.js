import React from 'react';
import '../setupTests';
//import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import login from '../components/login/login';
import {shallow,mount} from 'enzyme';


const ref = React.createRef();
it('renders without crashing',()=>{
  const wrapper = mount(<login.WrappedComponent containerRef={ref}/>);
  wrapper.debug();
  //expect(wrapper.debug()).toEqual(true);
})


/*test('renders learn react link', () => {
  const { getByText } = render(<Table />);
  const linkElement = getByText(/hello/i);
  expect(linkElement).toBeInTheDocument();
});
*/