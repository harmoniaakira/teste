import Button from "components/Button";
import Feedback from "components/Feedback";
import { FeedbackText, FeedbackTitle } from "components/Feedback/Feedback.styles"
import { render, shallow } from 'enzyme';
import React from "react";

describe("Feedback", () => {
    const TITLE = 'test_title'
    const BTNTXT = 'test_btn_txt'
    const TEXT = 'test_text'
    const mockCallBackClick = jest.fn();
    const FeedbackComponent = (icon = 'SUCCESS') => (
        <Feedback
            icon={icon}
            title={TITLE}
            btnTxt={BTNTXT}
            text={TEXT}
            onclick={mockCallBackClick}
        />
    )

    const shallowFeedback = shallow(FeedbackComponent())


    it(`should mount with title: ${TITLE}`, () => {
        expect(shallowFeedback.find(FeedbackTitle).text()).toBe(TITLE)
    })

    it(`should mount with text: ${TEXT}`, () => {
        expect(shallowFeedback.find(FeedbackText).text()).toBe(TEXT)
    })

    it(`should mount with buttonText: ${BTNTXT}`, () => {
        expect(shallowFeedback.find(Button).prop('children')).toBe(BTNTXT)
    })

    it(`should mount with Icon`, () => {
        expect(shallowFeedback.find('RenderIcon')).toHaveLength(1)
    })

    it("should run onClick function", () => {
        shallowFeedback.find(Button).props().handleClick();
        expect(mockCallBackClick.mock.calls.length).toEqual(1);
    });

    it("should cover ErrorIcon Line", () => {
        render(FeedbackComponent('ERROR'))
    })

    it("should cover SuccessIcon Line", () => {
        render(FeedbackComponent())
    })

    it("should cover WarningIcon Line", () => {
        render(FeedbackComponent('WARNING'))
    })
})