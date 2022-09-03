import { height } from '@mui/system';
import React from 'react';
// import PropTypes from 'prop-types';
import './tabs.scss';

/**
 * Primary UI component for user interaction
 */
export const Tabs = ({ primary, backgroundColor, labelBackgroundColor, size, label, ...props }) => {
  
  return (
    <div
    className="tabs"
    style={backgroundColor && { backgroundColor }}
    {...props}
    >
        <div 
        className="label"
        style={labelBackgroundColor && { labelBackgroundColor }}
        >
            {label}
        </div>
    </div>
  );
};
