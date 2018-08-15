import React from "react";
import PropTypes from "prop-types";

const ChooseUsername = (props) => {
    let input;

    const handleChange= () => {
        props.dispatch(input.value);
    };

    return (
        <input
            onChange={handleChange}
            type="text"
            placeholder="username"
            ref={(node) => {
                input = node;
            }}
            defaultValue="Me"
        />
    );
};

ChooseUsername.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

export default ChooseUsername;
