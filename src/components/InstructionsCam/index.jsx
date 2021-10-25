import React from 'react'
import PropTypes from 'prop-types';
import check from 'assets/icons/check.svg'
import { InstructionIcon, InstructionMsg, InstructionsGrid } from './InstructionsCam.Styles'

const InstructionsCam = ({ instructions }) => {
    return (
        <InstructionsGrid>
            {
                instructions.map(({ prefix, msg, suffix, }) => {
                    return (
                        <React.Fragment key={msg}>
                            <InstructionIcon>
                                <img src={prefix} alt="" />
                            </InstructionIcon>
                            <InstructionMsg>{msg}</InstructionMsg>
                            <InstructionIcon>
                                <img src={suffix || check} alt="" />
                            </InstructionIcon>
                        </React.Fragment>
                    )
                })}
        </InstructionsGrid>

    )
}

InstructionsCam.propTypes = {
    instructions: PropTypes.arrayOf(
        PropTypes.shape({
            prefix: PropTypes.string.isRequired,
            msg: PropTypes.string.isRequired,
            suffix: PropTypes.string
        }).isRequired
    ).isRequired
}
export default InstructionsCam