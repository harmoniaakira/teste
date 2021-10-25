import React from 'react'
import { shallow, render } from 'enzyme'
import SignupInfo from 'containers/SignupInfo'
import Button from 'components/Button';

const mockHistoryBack = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        goBack: mockHistoryBack,
    }),
}));

describe("SignupInfo", () => {
    const signupInfo = shallow(<SignupInfo />);

    it('should call history goback', () => {
        signupInfo.find(Button).props().handleClick();
        expect(mockHistoryBack.mock.calls.length).toEqual(1);
    })

    it('should match snapshot', () => {
        expect(signupInfo).toMatchSnapshot()
    })
})