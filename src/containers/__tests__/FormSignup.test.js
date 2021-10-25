import React from 'react'
import { shallow } from 'enzyme'
import FormSignup from 'containers/Signup/Form'
import { StyledInput } from 'components/StyledUI/StyledUI.styles'


describe("Form Signup", () => {

    const formSignup = shallow(<FormSignup />)
    const mockEvent = { target: { value: 'A' } }
    it("should match snaptshot", () => {
        const cpfInput = formSignup.find(StyledInput).at(0)
        cpfInput.simulate('change', mockEvent)

        const dateInput = formSignup.find(StyledInput).at(1)
        dateInput.simulate('change', mockEvent)

        const phoneInput = formSignup.find(StyledInput).at(2)
        phoneInput.simulate('change', mockEvent)

        expect(formSignup).toMatchSnapshot()
    })
})