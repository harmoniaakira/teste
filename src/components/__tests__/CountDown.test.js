import React from 'react';
import CountDown from 'components/CountDown';
import { shallow } from 'enzyme';

describe("CountDown", () => {
    const shallowCountDown = shallow(<CountDown stopTime={0} onFinish={() => null} />);

    it("should render", () => {
        expect(shallowCountDown).toHaveLength(1);
    });
});