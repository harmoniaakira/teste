import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

configure({ adapter: new Adapter() });

export const t = (key, params) => {
    if (key === 'key.with.params') {
        return `key.with.params.${params.param}`
    }

    return key
}

// Mock react-i18next
i18n.use(initReactI18next).init({
    lng: 'en',
    fallbackLng: 'en',
    ns: ['common'],
    defaultNS: 'common',
    resources: {
        en: {
            common: {}
        }
    }
})
