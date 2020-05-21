import React from 'react';
import { shallow } from 'enzyme';
import SymbolCard from './SymbolCard';

describe('Messages Component', () => {
    it('renders Messages Component', () => {
        const wrapper = shallow(<SymbolCard symbol={'AAPL'} tweet={{}} tweetCount={12}/>);
        expect(wrapper).toMatchSnapshot();
     });
    }
);