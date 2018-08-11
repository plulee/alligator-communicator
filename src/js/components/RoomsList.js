import React from "react";
import PropTypes from "prop-types";
import { ChooseRoom } from "../containers/ChooseRoom";

const RoomsList = ({ rooms, chats }) => (
    <section className="rooms-list">
        {rooms.map(room => (
            <ChooseRoom
                key={room.id}
                {...room}
                {...chats}
            />
        ))}
    </section>
);

RoomsList.propTypes = {
    rooms: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            roomName: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
    chats: PropTypes.shape({
        chosenRoomId: PropTypes.number.isRequired,
    }).isRequired
}

export default RoomsList;
