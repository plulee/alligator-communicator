import { connect } from 'react-redux'
import ChooseUsernameComponent from '../components/ChooseUsername'
import { chooseUsername } from '../actions'

const mapDispatchToProps = (dispatch, username) => ({
    dispatch: (username) => {
        dispatch(chooseUsername(username))
    }
});

export const ChooseUsername = connect(state => ({
    options: state.options
}), mapDispatchToProps)(ChooseUsernameComponent);
