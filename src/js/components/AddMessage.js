import React from "react";
import PropTypes from "prop-types";

const AddMessage = (props) => {
    let input;

    const sendMessageIfNotEmpty = () => {
        if (input.value !== '') {
            props.dispatch(input.value, "Me", props.chats.chosenRoomId);
            input.value = "";
        }
    };

    const handleEnterKey = (e) => {
        if (e.key === "Enter") {
            sendMessageIfNotEmpty();
        }
    };

    const handleButtonClick = () => {
        sendMessageIfNotEmpty();
    };

    return (
        <section className="add-messages">
        <button onClick={handleButtonClick}>Send message</button>
            <input
                onKeyPress={handleEnterKey}
                type="text"
                ref={(node) => {input = node}}
                />
        </section>
    );
}

AddMessage.propTypes = {
    dispatch: PropTypes.func.isRequired,
}

export default AddMessage;
