import React from "react";
import PropTypes from "prop-types";

const ChooseRoom = (props) => {
    const handleButtonClick = () => {
        props.dispatch();
    };
    let roomClass = "room";
    if (props.id === props.chosenRoomId) {
        roomClass += " room--chosen";
    }

    return (
        <button onClick={handleButtonClick} className={ roomClass }>
            <div>chat room</div>
            <strong>{props.roomName}</strong>
        </button>
    );
};

ChooseRoom.propTypes = {
    chosenRoomId: PropTypes.number.isRequired,
    roomName: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired,
}

export default ChooseRoom;
