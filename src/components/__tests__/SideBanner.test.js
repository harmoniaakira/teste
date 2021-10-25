import React from 'react'
import { mount, shallow } from 'enzyme'
import SideBanner from 'components/SideBanner'
import { Title, SideBannerImage, Steps } from 'components/SideBanner/SideBanner.styles'
import bannerSvg from 'assets/images/HomeView/side-banner.svg';

describe("SideBanner", () => {
    const TOTAL_STEPS = 5;
    const CURR_STEP = 0;
    const shallowWrapper = shallow(<SideBanner currentStep={CURR_STEP} totalSteps={TOTAL_STEPS} />);

    it("should render the title: Proposta de Crédito", () => {
        expect(shallowWrapper.find(Title).text()).toBe('Proposta de Crédito');
    });

    it("should render svg side-banner", () => {
        expect(shallowWrapper.find(SideBannerImage).prop("src")).toEqual(bannerSvg);
    });

    // it("should steps must match the props", () => {
    //     console.log(shallowWrapper.find(Steps).get(0));
    //     expect(shallowWrapper.find(Steps).length).toBe(TOTAL_STEPS);
    // });
    
})

