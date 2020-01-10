import React from 'react';
import { shallow } from 'enzyme';
import Homepage from './homepage.component';
import "../../setupTests";



it('should render Homepage component', () => {
  expect(shallow(<Homepage />)).toMatchSnapshot();
});