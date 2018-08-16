import { connect } from "react-redux";
import AddMessageComponent from "../components/AddMessage";
import { addMessage } from "../actions";

const mapStateToProps = state => ({
    options: state.options
});

const mapDispatchToProps = dispatch => ({
    dispatch: (message, author, chatRoom) => {
        dispatch(addMessage(message, author, chatRoom));
    }
});

export const AddMessage = connect(mapStateToProps, mapDispatchToProps)(AddMessageComponent);
