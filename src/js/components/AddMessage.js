import React from "react";
import PropTypes from "prop-types";
import { ChooseUsername } from "../containers/ChooseUsername";
import * as keys from "../constants/KeyNames";

const AddMessage = (props) => {
    let input;

    const dispatchMessageIfNotEmpty = () => {
        if (input.value !== "") {
            props.dispatch(input.value, props.options.chosenUsername, props.options.chosenRoomId);
            input.value = "";
        }
    };

    const handleEnterKey = (e) => {
        if (e.key === keys.ENTER) {
            dispatchMessageIfNotEmpty();
        }
    };

    const handleButtonClick = () => {
        dispatchMessageIfNotEmpty();
    };

    return (
        <section className="add-messages">
            <button onClick={handleButtonClick}>Send</button>
            <input className="add-messages__message-text"
                onKeyPress={handleEnterKey}
                type="text"
                placeholder="message"
                ref={(node) => {
                    input = node;
                }}
            />
            <span> as </span>
            <ChooseUsername />
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
