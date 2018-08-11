import React from "react";
import PropTypes from "prop-types";

const AddMessage = (props) => {
    let input;

    const sendMessageIfNotEmpty = () => {
        if (input.value !== '') {
            props.dispatch(input.value, "Me");
            input.value = "";
        }
    };

    const handleEnter = (e) => {
        if (e.key === "Enter") {
            sendMessageIfNotEmpty();
        }
    };

    const handleButtonClick = () => {
        sendMessageIfNotEmpty();
    };

    return (
        <section className="add-messages">
            <div className="container">
                <input
                    onKeyPress={handleEnter}
                    type="text"
                    ref={(node) => {input = node}}
                    />
                <button onClick={handleButtonClick}>Send message</button>
            </div>
        </section>
    );
}

AddMessage.propTypes = {
    dispatch: PropTypes.func.isRequired,
}

export default AddMessage;
