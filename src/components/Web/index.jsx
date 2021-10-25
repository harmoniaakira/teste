import React from 'react';
import { Column, WebView } from 'components/Layout/Layout.styles';
import SideBanner from 'components/SideBanner';
import PropTypes from 'prop-types';

const Web = ({ children }) => {
    return (
        <WebView>
            <Column>
                <SideBanner />
            </Column>
            <Column>
                {children}
            </Column>
        </WebView>
    )
}

Web.propTypes = {
	children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
}

export default Web