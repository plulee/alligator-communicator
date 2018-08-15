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
        const users = this.props.users;
        return (
            <section className="chat" ref={ el => this.container = el}>
                {users.map(user => {
                    if (options.chosenRoomId === user.chatRoom) {
                        return (<span key={user.id}>{user.name}</span>);
                    }
                    return null;
                })}
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
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            chatRoom: PropTypes.number.isRequired,
        }).isRequired
    ).isRequired,
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
