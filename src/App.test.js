import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('test input element', () => {
	var wrapper = shallow(<App />);
	const greeting = <input placeholder='name'/>;
	expect(wrapper.contains(greeting)).toBe(true)
});

test('test email input element', () => {
	var wrapper = shallow(<App />);
	const greeting = <input placeholder='email'/>;
	expect(wrapper.contains(greeting)).toBe(true)
});

test('test name input state', () => {
	var wrapper = shallow(<App />);
	expect(wrapper.state("namnvalue")).toBe("")
});
