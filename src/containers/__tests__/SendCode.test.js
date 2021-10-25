import Button from 'components/Button';
import SendCodeDialog from 'containers/SendCode/Dialog';
import SendCodeFeedBack from 'containers/SendCode/Feedback';
import FeedbackAppraiseToken from 'containers/SendCode/Feedback/Appraise';
import FeedbackSendToken from 'containers/SendCode/Feedback/SendToken';
import TokenSuccess from 'containers/SendCode/Feedback/Success/indes';
import SendCode from 'containers/SendCode/index.jsx';
import InputTokenDefault from 'containers/SendCode/InputToken/Default';
import InputTokenUnrecognized from 'containers/SendCode/InputToken/Unrecognized';
import SendCodeIntro from 'containers/SendCode/Intro';
import { DialogBtn } from 'containers/SendCode/SendCode.styles';
import { render, shallow } from 'enzyme';
import React from 'react';

describe('SendCode', () => {
  const sendCode = shallow(<SendCode />);

  it('should match snapshot', () => {
    expect(sendCode).toMatchSnapshot()
  })
})


describe('SendCode/InputTokenDefault', () => {

  const inputTokenDefault = shallow(<InputTokenDefault />);

  it("should render", () => {
    expect(inputTokenDefault).toHaveLength(1);
  });

})

describe('SendCode/InputTokenUnrecognized', () => {

  const inputTokenUnrecognized = shallow(<InputTokenUnrecognized />);

  it("should render", () => {
    render(<InputTokenUnrecognized />)
    expect(inputTokenUnrecognized).toHaveLength(1);
    expect(inputTokenUnrecognized.find('RenderReSend')).toHaveLength(1);
  });

})

describe('SendCode/SendCodeDialog', () => {

  const sendCodeDialog = shallow(<SendCodeDialog />);

  it("should render", () => {
    expect(sendCodeDialog.find('RenderBtns')).toHaveLength(1);
    expect(sendCodeDialog).toHaveLength(1);
  });

})

describe('SendCode/SendCodeFeedBack', () => {

  render(<SendCodeFeedBack feedback={"SENDCODE_FEEDBACK_SENDING_TOKEN"} />);
  render(<SendCodeFeedBack feedback={"SENDCODE_FEEDBACK_ANALYZING_TOKEN"} />);
  render(<SendCodeFeedBack feedback={"SENDCODE_FEEDBACK_SUCCESS"} />);

})


describe('SendCode/SendCodeIntro', () => {

  const sendCodeIntro = shallow(<SendCodeIntro />);

  it("should render", () => {
    // expect(sendCodeIntro.find('RenderBtns')).toHaveLength(1);
    sendCodeIntro.find(Button).at(0).props().handleClick()
    expect(sendCodeIntro).toHaveLength(1);
  });

})