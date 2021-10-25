import React from 'react'
import { shallow } from 'enzyme';
import Home from '../Home/index'
import Button from 'components/Button';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: mockHistoryPush,
      }),
}));

describe('Home', () => {

    const home = shallow(<Home />)

    it('Redirects to correct URL on click', () => {
        home.find(Button).at(0).props().handleClick();
        expect(mockHistoryPush).toHaveBeenCalledWith('/onboarding-pf-frontend/geolocalizacao');
    });

    it('should useContext mock and shallow render a div tag', () => {
        jest.spyOn(React, 'useContext').mockImplementation(() => ({
          name: 'this is a mock context return value'
        }));
    
        expect(home).toMatchSnapshot()
    })
})