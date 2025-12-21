import React, { useEffect } from 'react';
import './ClickFeedback.css';

const ClickFeedback = () => {
    useEffect(() => {
        const createRipple = (e) => {
            const ripple = document.createElement('div');
            ripple.className = 'click-ripple';
            ripple.style.left = e.clientX + 'px';
            ripple.style.top = e.clientY + 'px';

            document.body.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        };

        // Add click listener to all clickable elements
        const clickableElements = document.querySelectorAll('button, a, .clickable, input[type="submit"]');

        clickableElements.forEach(element => {
            element.addEventListener('click', createRipple);
        });

        // Cleanup
        return () => {
            clickableElements.forEach(element => {
                element.removeEventListener('click', createRipple);
            });
        };
    }, []);

    return null; // This component doesn't render anything
};

export default ClickFeedback;
