import React from "react";
import PropTypes from "prop-types";
import * as keys from "../constants/KeyNames";

const AddRoom = (props) => {
    let input;

    const dispatchRoomNameFromInput = () => {
        if (input.value === "") {
            props.dispatch("no name");
        } else {
            props.dispatch(input.value);
            input.value = "";
        }
    };

    const handleEnterKey = (e) => {
        if (e.key === keys.ENTER) {
            dispatchRoomNameFromInput();
        }
    };

    const handleButtonClick = () => {
        dispatchRoomNameFromInput();
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
