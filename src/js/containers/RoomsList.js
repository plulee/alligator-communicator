import { connect } from "react-redux";
import RoomsListComponent from "../components/RoomsList";

const mapStateToProps = state => ({
    rooms: state.rooms,
    options: state.options
});

export const RoomsList = connect(mapStateToProps, () => ({}))(RoomsListComponent);
