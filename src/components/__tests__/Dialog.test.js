import React from 'react'
import { shallow } from 'enzyme'
import DialogSlide from 'components/Dialog'
import Button from 'components/Button'
import DialogTitle from '@material-ui/core/DialogTitle';

describe("Dialog", () => {

    let dialog
    let mockCallBackClick
    const TITLE_DIALOG = "title-dialog"
    const CANCEL_LABEL = "cancel"
    const CONFIRM_LABEL = "confirm"

    beforeEach(() => {
        mockCallBackClick = jest.fn();
        dialog = shallow(
            <DialogSlide
                cancelButtonLabel="cancel"
                confirmButtonLabel="confirm"
                handleClose={mockCallBackClick}
                onCancel={mockCallBackClick}
                open={true}
                onConfirm={mockCallBackClick}
                title={"title-dialog"}
            />
        )
    })

    it(`should render: ${TITLE_DIALOG}`, () => {
        expect(dialog.find(DialogTitle).text()).toBe(TITLE_DIALOG);
    });

    it("should run onCancel function ", () => {
        dialog.find(Button).at(0).props().handleClick();
        expect(dialog.find(Button).at(0).prop('children')).toBe(CANCEL_LABEL);
        expect(mockCallBackClick.mock.calls.length).toEqual(1);
    })

    it("should run onConfirm function ", () => {
        dialog.find(Button).at(1).props().handleClick();
        expect(dialog.find(Button).at(1).prop('children')).toBe(CONFIRM_LABEL);
        expect(mockCallBackClick.mock.calls.length).toEqual(1);
    })

})