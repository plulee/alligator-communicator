import React from "react";
import PropTypes from "prop-types";

const Message = ({ message, author }) => {

    let messageClass = "message";
    if (author !== "Me") {
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
