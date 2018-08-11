import { connect } from 'react-redux'
import AddMessageComponent from '../components/AddMessage'
import { addMessage } from '../actions'

const mapDispatchToProps = dispatch => ({
    dispatch: (message, author, chatRoom) => {
        dispatch(addMessage(message, author, chatRoom))
    }
});

export const AddMessage = connect(state => ({
    chats: state.chats
}), mapDispatchToProps)(AddMessageComponent);
