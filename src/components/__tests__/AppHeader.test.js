import React from 'react'; 
import {shallow} from 'enzyme';

import AppHeader from 'components/AppHeader';
import { Banner, Avatar  } from 'components/AppHeader/AppHeader.styles';

import appBanner from 'assets/images/HomeView/appheader-banner.svg'
import geolocation from './assets/images/GeolocationView/avatar-geolocation.svg'

describe("AppHeader", () => {
    const shallowWrapper = shallow(<AppHeader avatar={geolocation} />);
    it("should render an banner", () => {
        expect(shallowWrapper.find(Banner).prop("src")).toEqual(appBanner);
     });

     it("should render svg geolocation", () => {
        expect(shallowWrapper.find(Avatar).prop("src")).toEqual(geolocation);
     });
 });