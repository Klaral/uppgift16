import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import App from './App';
import Button from './button';
import Form from './Form';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('test input element', () => {
	var wrapper = shallow(<Form />);
	expect(wrapper.find('.nameinput').length).toBe(1)
});

test('test email input element', () => {
	var wrapper = shallow(<Form />);
	expect(wrapper.find('.emailinput').length).toBe(1)
});

test('test name input state', () => {
	var wrapper = shallow(<App />);
	expect(wrapper.state("namnvalue")).toBe("")
});

test('test email input state', () => {
	var wrapper = shallow(<App />);
	expect(wrapper.state("emailvalue")).toBe("")
});

test('input name change test', () => {
	var wrapper = mount(<App />);
     wrapper.find('.nameinput').simulate('change', {target: {value: 'klara'}});                         
	expect(wrapper.state("namevalue")).toBe("klara")
});

test('input email change test', () => {
	var wrapper = mount(<App />);
     wrapper.find('.emailinput').simulate('change', {target: {value: 'klaral'}});                         
	expect(wrapper.state("emailvalue")).toBe("klaral")
});


test('testar button', () => {
    var wrapper = shallow(<Button />);
    var actual = wrapper.find("button").hasClass("buttonClass");
    var expected = true;
    expect(actual).toBe(expected);
})

