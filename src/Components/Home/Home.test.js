import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

describe('Header Component', () => {
    it('renders Header', () => {
        const wrapper = shallow(<Home />);
        expect(wrapper).toMatchSnapshot();
    });
});