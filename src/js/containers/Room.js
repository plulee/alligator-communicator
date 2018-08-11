import { connect } from 'react-redux'
import RoomComponent from '../components/Room'

export const Room = connect(state => ({
  messages: state.messages
}), {})(RoomComponent)
