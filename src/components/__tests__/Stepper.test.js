import React from 'react';
import Stepper from 'components/Stepper';
import { ArrowBack, Info, MobileHeaderStepper } from 'components/Stepper/Stepper.styles';
import { render, shallow } from 'enzyme';


const mockHistoryBack = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        goBack: mockHistoryBack,
      }),
}));

describe("Stepper", () => {
    const stepper = shallow(<Stepper />)

    it('should render step', () => {
        expect(stepper.find(MobileHeaderStepper).children()).toHaveLength(1)
    });
    
    it('should call history goback', () => {
        stepper.find(ArrowBack).props().onClick();
        expect(mockHistoryBack.mock.calls.length).toEqual(1);
    })

    it('should match snapshot', () => {
        stepper.find(Info).props().onClick();
        render(<Stepper />)
        expect(stepper).toMatchSnapshot()
    })
    
})