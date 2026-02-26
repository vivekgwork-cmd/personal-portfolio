import React from 'react';

const BentoGrid = ({ children }) => {
    return (
        <div className="container">
            <div className="bento-grid">
                {children}
            </div>
        </div>

    );
};

export default BentoGrid;
