import { FeedbackText, FeedbackTitle } from "components/Feedback/Feedback.styles";
import FeedbackLoader from "components/Feedback/WithLoader";
import Loader from "components/Loader";
import { shallow } from 'enzyme';
import React from "react";

describe("FeedbackLoader", () => {
    const TITLE = 'test_title'
    const TEXT = 'test_text'

    const shallowFeedbackLoader = shallow(<FeedbackLoader text={TEXT} title={TITLE} />)


    it(`should mount with title: ${TITLE}`, () => {
        expect(shallowFeedbackLoader.find(FeedbackTitle).text()).toBe(TITLE)
    })

    it(`should mount with text: ${TEXT}`, () => {
        expect(shallowFeedbackLoader.find(FeedbackText).text()).toBe(TEXT)
    })

    it(`should mount with Icon`, () => {
        expect(shallowFeedbackLoader.find(Loader)).toHaveLength(1)
    })
})