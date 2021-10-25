import Dialog from 'components/Dialog';
import Signup from 'containers/Signup';
import DialogSignup from 'containers/Signup/Dialog';
import { shallow } from 'enzyme';
import React from 'react';

describe('Signup', () => {
  const signup = shallow(<Signup />);

  it('should match snapshot', () => {
    // signup.find(DialogSlide).props().handleClose();
    expect(signup).toMatchSnapshot()
  })
})

describe('Signup/Dialog', () => {
  const dialogSignup = shallow(<DialogSignup />);

  it('should render', () => {
    dialogSignup.find(Dialog).props().handleClose()
    expect(dialogSignup).toHaveLength(1);
  })
})