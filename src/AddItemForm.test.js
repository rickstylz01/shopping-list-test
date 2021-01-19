import React from 'react';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import AddItemForm from "./components/AddItemForm";

Enzyme.configure({ adapter: new Adapter() });
describe(`AddItemForm component`, () => {
  it('renders the complete form', () => {
    const wrapper = shallow(<AddItemForm />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})