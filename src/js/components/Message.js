import React from "react";
import PropTypes from "prop-types";

const Message = ({ message, author, incomming }) => {

    let messageClass = "message";
    if (incomming) {
        messageClass += " message--other-users"
    }

    return (
        <p className={messageClass}>
            <strong>{author}:</strong> {message}
        </p>
    );
}

Message.propTypes = {
    message: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
}

export default Message;
