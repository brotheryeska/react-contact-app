import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

const initialState = {
    contacts: [],
    contact: {},
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CONTACTS":
      return {...state, contacts: action.payload}
    case "DETAIL_CONTACT":
      return {...state, contact: action.payload}
    case "ADD_CONTACT" : {
      const newContact = state.contacts.concat(action.payload);
      return {...state, contacts: newContact}
    }
    case "DELETE_CONTACT" : {
      return {...state, contact: action.payload}
    }
    case "UPDATE_CONTACT" : {
      return {...state, contact: action.payload}
    }
    default:
      return state
  }
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store