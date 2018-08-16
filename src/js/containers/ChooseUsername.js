import { connect } from "react-redux";
import ChooseUsernameComponent from "../components/ChooseUsername";
import { chooseUsername } from "../actions";

const mapStateToProps = state => ({
    options: state.options
});

const mapDispatchToProps = (dispatch) => ({
    dispatch: (username) => {
        dispatch(chooseUsername(username));
    }
});

export const ChooseUsername = connect(mapStateToProps, mapDispatchToProps)(ChooseUsernameComponent);
