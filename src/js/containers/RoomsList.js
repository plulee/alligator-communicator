import { connect } from "react-redux";
import RoomsListComponent from "../components/RoomsList";

export const RoomsList = connect(state => ({
    rooms: state.rooms,
    options: state.options
}), {})(RoomsListComponent);
