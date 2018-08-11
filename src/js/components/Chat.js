import React from "react";
import PropTypes from "prop-types";
import Message from "./Message";

const Chat = ({ messages, chats }) => (
    <section className="chat">
        {messages.map(message => {
            if (chats.chosenRoomId === message.chatRoom) {
                return (<Message
                            key={message.id}
                            {...message}
                        />);
            }
            return null;
        }
    )}
    </section>
);

Chat.propTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}

export default Chat;
