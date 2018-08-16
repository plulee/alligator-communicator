import { connect } from "react-redux";
import ChooseRoomComponent from "../components/ChooseRoom";
import { chooseRoom } from "../actions";

const mapStateToProps = state => ({
    options: state.options
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    dispatch: () => {
        dispatch(chooseRoom(ownProps.id));
    }
});

export const ChooseRoom = connect(mapStateToProps, mapDispatchToProps)(ChooseRoomComponent);
