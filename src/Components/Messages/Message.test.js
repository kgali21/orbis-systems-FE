import React from 'react';
import { shallow } from 'enzyme';
import Message from './Message';

describe('Message Component', () => {
    it('renders message', () => {
        const wrapper = shallow(<Message tweets={'test'} timeStamp={'timetest'}/>);
        expect(wrapper).toMatchSnapshot();
    });
});