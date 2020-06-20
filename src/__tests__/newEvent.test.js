import React from 'react';
import '../setupTests';
//import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import newEvent from '../components/creator/newEvent';
import {shallow,mount} from 'enzyme';


const push = jest.fn();
const historyMock = { push: jest.fn() };

it('renders without crashing',()=>{
  const wrapper = shallow(<newEvent.WrappedComponent history={historyMock}/>);
  wrapper.debug();
  //expect(wrapper.debug()).toEqual(true);
})