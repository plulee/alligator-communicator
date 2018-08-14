import React from "react";
import PropTypes from "prop-types";

const ChooseRoom = (props) => {
    const handleButtonClick = () => {
        props.dispatch();
    };
    let roomClass = "room-choice";
    if (props.id === props.chosenRoomId) {
        roomClass += " room-choice--chosen";
    }

    return (
        <button onClick={handleButtonClick} className={ roomClass }>
            <div>chat room</div>
            <strong>{props.roomName}</strong>
        </button>
    );
};

ChooseRoom.propTypes = {
    id: PropTypes.number.isRequired,
    roomName: PropTypes.string.isRequired,
    chosenRoomId: PropTypes.number.isRequired
}

export default ChooseRoom;
