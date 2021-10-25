import React from 'react'
import Steps from 'components/Steps'
import { Step, StepIcon, StepText } from 'components/Steps/Steps.styles'
import { shallow } from 'enzyme'

import step_1 from 'assets/images/HomeView/step1.svg'
import step_2 from 'assets/images/HomeView/step2.svg'
import step_3 from 'assets/images/HomeView/step3.svg'

describe("Steps", () => {
    const shallowWrapper = shallow(<Steps />);

    it("should render data step", () => {
        const step1 = shallowWrapper.find(Step).at(0)
        expect(step1.find(StepIcon).prop("src")).toEqual(step_1);
        expect(step1.find(StepText).text()).toBe("Informe corretamente os dados")
    });

    it("should render data step", () => {
        const step2 = shallowWrapper.find(Step).at(1)
        expect(step2.find(StepIcon).prop("src")).toEqual(step_2);
        expect(step2.find(StepText).text()).toBe("Preencha de acordo com documentos válidos")
    });

    it("should render data step", () => {
        const step3 = shallowWrapper.find(Step).at(2)
        expect(step3.find(StepIcon).prop("src")).toEqual(step_3);
        expect(step3.find(StepText).text()).toBe("Escolha onde enviar o token de ativação")
    });

})