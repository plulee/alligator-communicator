import React from "react";
import PropTypes from "prop-types";

const Message = ({ message, author, received }) => {

    let messageClass = "message";
    if (received) {
        messageClass += " message--other-users";
    }

    return (
        <p className={messageClass}>
            <strong>{author}:</strong> {message}
        </p>
    );
};

Message.propTypes = {
    message: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    received: PropTypes.bool.isRequired
};

export default Message;
