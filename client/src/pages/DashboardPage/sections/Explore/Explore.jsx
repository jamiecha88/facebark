//Only card prototype
//skeleton for Friends, Messages, Map, Profile, and Settings

import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';

function Card({ children, backgroundColor, textColor, ...rest }) {
    const cardStyles = {
        backgroundColor: backgroundColor || 'inherit',
        color: textColor || 'inherit',
        padding: '16px',
        textAlign: 'center',
    };

    return (
        <Paper sx={cardStyles} {...rest}>
            {children}
        </Paper>
    );
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
};

export default Card;