import React from 'react';
import { shallow } from 'enzyme';
import { CustomButton } from './custom-button.component';
import "../../setupTests";


it('renders custom button component', () => {
    expect(shallow(<CustomButton />)).toMatchSnapshot();
})

