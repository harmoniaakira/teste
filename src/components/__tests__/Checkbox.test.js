import React from 'react';
import Checkbox from 'components/Checkbox';
import { Wrapper } from 'components/Checkbox/Checkbox.styles';
import { shallow } from 'enzyme';

describe("Checkbox", () => {
    const mockCallBackClick = jest.fn();

    const shallowCheckbox = shallow(<Checkbox label="test" onClick={mockCallBackClick} value={false} />);

    it("should run onClick function", () => {
        shallowCheckbox.find(Wrapper).props().onClick();
        expect(mockCallBackClick.mock.calls.length).toEqual(1);
    });
});