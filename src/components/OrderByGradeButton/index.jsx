import React from "react";

const OrderByGradeButton = ({ onClick }) => {
    const handleClick = () => {
        onClick('grade');
    };

    return (
        <button onClick={handleClick}>
            Sortera efter betyg
        </button>
    );
};

export default OrderByGradeButton;