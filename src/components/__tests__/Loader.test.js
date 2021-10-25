import React from 'react';
import Loader from 'components/Loader';
import { shallow } from 'enzyme';

describe("Loader", () => {
    const shallowLoader = shallow(<Loader/>);

    it("should render", () => {
        expect(shallowLoader).toHaveLength(1);
    });
});