import React from "react";
import PropTypes from "prop-types";

const ChooseUsername = (props) => {
    let input;

    const handleEnterKey = (e) => {
        if (e.key === "Enter") {
            props.dispatch(input.value);
        }
    };

    const handleButtonClick = () => {
        props.dispatch(input.value);
    };

    return (
            <input
            onChange={handleButtonClick}
                onKeyPress={handleEnterKey}
                type="text"
                placeholder="username"
                ref={(node) => {input = node}}
                defaultValue="Me"
                />
    );
}

ChooseUsername.propTypes = {
    dispatch: PropTypes.func.isRequired,
}

export default ChooseUsername;
