import React from 'react';
import '../setupTests';
//import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import Table from '../components/Table';
import {shallow,mount} from 'enzyme';

const data = [
    {
'Title':'HR Connect',	
'Place':'Meet room 1',	
'Time':'13:00 - 13:30',	
'Date':'8 June 2020' ,
'Host':'Head'
},
{
'Title':'Training',	
'Place':'Hall',	
'Time':'13:00 - 13:30',	
'Date':'8 June 2020' ,
'Host':'Head'
}
 ]

it('renders without crashing',()=>{
  const wrapper = mount(<Table.WrappedComponent data={data}/>);
  wrapper.debug();
  //expect(wrapper.debug()).toEqual(true);
})


/*test('renders learn react link', () => {
  const { getByText } = render(<Table />);
  const linkElement = getByText(/hello/i);
  expect(linkElement).toBeInTheDocument();
});
*/