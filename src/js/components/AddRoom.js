import React from "react";
import PropTypes from "prop-types";

const AddRoom = (props) => {
    let input;

    const handleEnterKey = (e) => {
        if (e.key === "Enter") {
            props.dispatch(input.value);
            input.value = "";
        }
    };

    const handleButtonClick = () => {
        props.dispatch(input.value);
        input.value = "";
    };

    return (
        <section className="add-rooms">
            <input
                onKeyPress={handleEnterKey}
                type="text"
                placeholder="room name"
                ref={(node) => {
                    input = node;
                }}
            />
            <button onClick={handleButtonClick}>+ Add room</button>
        </section>
    );
};

AddRoom.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

export default AddRoom;
