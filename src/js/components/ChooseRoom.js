import React from "react";
import PropTypes from "prop-types";

const ChooseRoom = (props) => {
    let roomClass = "room-choice";
    if (props.id === props.chosenRoomId) {
        roomClass += " room-choice--chosen";
    }

    const handleButtonClick = () => {
        props.dispatch();
    };

    return (
        <button onClick={handleButtonClick} className={ roomClass }>
            <div>room</div>
            <strong>{props.roomName}</strong>
        </button>
    );
};

ChooseRoom.propTypes = {
    id: PropTypes.number.isRequired,
    roomName: PropTypes.string.isRequired,
    chosenRoomId: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired
};

export default ChooseRoom;
