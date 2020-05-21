import React from 'react';
import { shallow } from 'enzyme';
import Messages from './Messages';

describe('Messages Component', () => {
    it('renders messages', () => {
        const messages = [
            {
                body: 'test',
                created_at: '12:45'
            }
        ]

        const wrapper = shallow(<Messages messages={messages} />);
        expect(wrapper).toMatchSnapshot();
    });
});