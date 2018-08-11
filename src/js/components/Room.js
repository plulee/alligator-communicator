import React from "react";
import PropTypes from "prop-types";
import Message from "./Message";

const Room = ({ messages }) => (
    <section>
        {messages.map(message => (
            <Message
                key={message.id}
                {...message}
            />
        ))}
    </section>
);

Room.propTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}

export default Room;
