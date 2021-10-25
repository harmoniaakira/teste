import SignupFeedBack from "containers/Signup/Feedback";
import SignupAppraisal from "containers/Signup/Feedback/Appraisal";
import SignupError from "containers/Signup/Feedback/Error";
import SignupSuccess from "containers/Signup/Feedback/Success";
import SignupWarning from "containers/Signup/Feedback/Warning";
import { render, shallow } from 'enzyme';
import React from "react";


describe("FeedbackSignup", () => {
    const signupFeedBack = render(<SignupFeedBack shouldRender={true} />)

    it("should not render SignupFeedBack", () => {
        const feedbackNull = shallow(<SignupFeedBack shouldRender={false} />)
        expect(feedbackNull.get(0)).toBeFalsy()
    })

    it("should render SignupFeedBack", () => {
        expect(signupFeedBack.get(0)).toBeTruthy()
    })

    it("should match snaptshot", () => {
        expect(signupFeedBack).toMatchSnapshot()
    })
})

describe("FeedbackSignup Appraisal", () => {
    const signupAppraisal = shallow(<SignupAppraisal />)

    it("should match snaptshot", () => {
        expect(signupAppraisal).toMatchSnapshot()
    })
})

describe("FeedbackSignup Error", () => {
    const signupError = shallow(<SignupError />)

    it("should match snaptshot", () => {
        expect(signupError).toMatchSnapshot()
    })
})

describe("FeedbackSignup Warning", () => {
    const signupWarning = shallow(<SignupWarning />)

    it("should match snaptshot", () => {
        expect(signupWarning).toMatchSnapshot()
    })
})

describe("FeedbackSignup Success", () => {
    const signupSuccess = shallow(<SignupSuccess />)

    it("should match snaptshot", () => {
        expect(signupSuccess).toMatchSnapshot()
    })
})