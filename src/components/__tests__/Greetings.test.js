import React from 'react';
import { shallow } from 'enzyme';
import Greetings from 'components/Greetings';
import { GreetingsTitle } from 'components/Greetings/Greetings.styles'

describe("Greetings", () => {

    const shallowWrapper = shallow(<Greetings/>);

    it("should render: 'Olá, Maria!'", () => {
        expect(shallowWrapper.find(GreetingsTitle).text()).toBe('Olá, Maria!');
    });
});