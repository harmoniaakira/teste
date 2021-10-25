import React from 'react';
import { shallow } from 'enzyme';

import Button from 'components/Button';
import { ButtonComponent, ButtonPopup } from 'components/Button/Button.styles';


describe("Button", () => {
    const mockCallBackClick = jest.fn();
    const button = shallow(<Button popup handleClick={mockCallBackClick}>Click</Button>);
    const buttonDisabled = shallow(<Button handleClick={mockCallBackClick} disabled >Click</Button>);

    it("should run onClick function", () => {
        button.find(ButtonPopup).props().onClick();
        expect(mockCallBackClick.mock.calls.length).toEqual(1);
    });

    it("should be disabled", () => {
        expect(buttonDisabled.find(ButtonComponent).prop('disabled')).toBe(true)
        expect(buttonDisabled.find(ButtonComponent)).toHaveStyleRule('background-color', '#E0E0E0');
    });
});