import React from "react";

const OrderByAlphaButton = ({ onClick }) => {
    const handleClick = () => {
        onClick('alpha');
    };

    return (
        <button onClick={handleClick}>
            Sortera efter bokstavsordning
        </button>
    );
};

export default OrderByAlphaButton;