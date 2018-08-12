import React from "react";
import PropTypes from "prop-types";
import Message from "./Message";


class Chat extends React.Component {
    static propTypes = {
        messages: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                message: PropTypes.string.isRequired,
                author: PropTypes.string.isRequired
            }).isRequired
        ).isRequired
    };

    componentDidUpdate() {
        this.container.scrollTop = this.container.scrollHeight;
    }

    render() {
        let messages = this.props.messages;
        let chats = this.props.chats;
        return (
            <section className="chat" ref={ el => this.container = el}>
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
    }
}

export default Chat;
