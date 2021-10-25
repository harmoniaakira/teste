import React from 'react';
import { shallow } from 'enzyme';
import Button from 'components/Button';
import Geolocation from '../Geolocation'


describe('Geolocation', () => {

    const geolocation = shallow(<Geolocation />)
    
    it("should run onClick function", () => {
        geolocation.find(Button).at(0).props().handleClick();
    });

    it('should render Geolocation page', () => {
        expect(geolocation).toMatchSnapshot()
    })

})