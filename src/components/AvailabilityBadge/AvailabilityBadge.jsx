import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './AvailabilityBadge.css';

const AvailabilityBadge = () => {
    return (
        <AnchorLink href="#contact" offset={80} className="availability-badge">
            <span className="pulse-dot"></span>
            <span className="badge-text">Open to Opportunities</span>
        </AnchorLink>
    );
};

export default AvailabilityBadge;
