import { connect } from 'react-redux'
import ChooseRoomComponent from '../components/ChooseRoom'
import { chooseRoom } from '../actions'

const mapDispatchToProps = (dispatch, ownProps) => ({
    dispatch: () => {
        dispatch(chooseRoom(ownProps.id))
    }
});

export const ChooseRoom = connect(state => ({
    options: state.options
}), mapDispatchToProps)(ChooseRoomComponent);
