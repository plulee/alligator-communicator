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
        <footer className="add-messages">
            <div className="container">
                <input
                    onKeyPress={handleEnterKey}
                    type="text"
                    ref={(node) => {input = node}}
                    />
                <button onClick={handleButtonClick}>Send message</button>
            </div>
        </footer>
    );
}

AddMessage.propTypes = {
    dispatch: PropTypes.func.isRequired,
}

export default AddMessage;
