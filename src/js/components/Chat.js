import React from "react";
import PropTypes from "prop-types";
import Message from "./Message";

class Chat extends React.Component {
    componentDidUpdate() {
        let chatContainer = this.container;
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    render() {
        const messages = this.props.messages;
        const options = this.props.options;

        return (
            <section className="chat" ref={el => this.container = el}>
                {messages.map(message => {
                    if (options.chosenRoomId === message.chatRoom) {
                        return (
                            <Message
                                key={message.id}
                                {...message}
                            />);
                    }

                    return null;
                })}
            </section>
        );
    }
}

Chat.propTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    options: PropTypes.shape({
        chosenRoomId: PropTypes.number.isRequired,
    }).isRequired
};

export default Chat;
