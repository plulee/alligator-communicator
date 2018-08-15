import { connect } from "react-redux";
import AddRoomComponent from "../components/AddRoom";
import { addRoom } from "../actions";

const mapDispatchToProps = dispatch => ({
    dispatch: (roomName) => {
        dispatch(addRoom(roomName));
    }
});

export const AddRoom = connect(() => ({}), mapDispatchToProps)(AddRoomComponent);
