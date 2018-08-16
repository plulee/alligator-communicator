import { connect } from "react-redux";
import ChatComponent from "../components/Chat";

const mapStateToProps = state => ({
    messages: state.messages,
    options: state.options,
    users: state.users
});


export const Chat = connect(mapStateToProps, () => ({}))(ChatComponent);
