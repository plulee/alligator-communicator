import React from "react";
import PropTypes from "prop-types";
import { ChooseUsername } from "../containers/ChooseUsername";

const AddMessage = (props) => {
    let input;

    const dispatchMessageIfNotEmpty = () => {
        if (input.value !== "") {
            props.dispatch(input.value, props.options.chosenUsername, props.options.chosenRoomId);
            input.value = "";
        }
    };

    const handleEnterKey = (e) => {
        if (e.key === "Enter") {
            dispatchMessageIfNotEmpty();
        }
    };

    const handleButtonClick = () => {
        dispatchMessageIfNotEmpty();
    };

    return (
        <section className="add-messages">
            <button onClick={handleButtonClick}>Send message</button>
            <input
                onKeyPress={handleEnterKey}
                type="text"
                ref={(node) => {
                    input = node;
                }}
            />
            &nbsp;as&nbsp;<ChooseUsername />
        </section>
    );
};

AddMessage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    options: PropTypes.shape({
        chosenRoomId: PropTypes.number.isRequired,
        chosenUsername: PropTypes.string.isRequired
    }).isRequired
};

export default AddMessage;
