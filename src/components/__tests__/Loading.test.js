import React from 'react'
import { shallow } from 'enzyme'
import Loading from 'components/Loading'

describe("Loading", () => {
    it('should render', () => {
        const wrapper = shallow(<Loading />);
        expect(wrapper).toHaveLength(1);
    });
})