  import axios from "axios"
  let apiUrl = "https://simple-contact-crud.herokuapp.com"

  export const fetchContacts = () => {
    return (dispatch) => {
      axios
      .get(`${apiUrl}/contact`)
      .then(({data}) => {
        console.log(data);
        dispatch({
          type: "FETCH_CONTACTS",
          payload: data.data
        })
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }

export const addContact = (payload) => {
  return (dispatch) => {
    axios
    .post(`${apiUrl}/contact`, {
      firstName: payload.firstName,
      lastName: payload.lastName,
      age: payload.age,
      photo: payload.photo  
    })
    .then(({ data }) => {
      console.log(data);
      dispatch({
        type: "ADD_CONTACT",
        payload: data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }
}

export const detailContact = (id) => {
  return (dispatch) => {
    axios
    .get(`${apiUrl}/contact/${id}`)
    .then(({data}) => {
      dispatch({
        type: "DETAIL_CONTACT",
        payload: data.data
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }
}

export const deleteContact = (id) => {
  console.log(id);
  return (dispatch) => {
    axios
    .delete(`${apiUrl}/contact/${id}`)
    .then(() => {
      return axios.get(`${apiUrl}/contact`)
    })
    .then(({data}) => {
      console.log(data);
      dispatch({
        type: "DELETE_CONTACT",
        payload: data.data
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }
}

export const updateContact = (id, data) => {
  console.log(id);
  console.log(data);
  return(dispatch) => {
    axios
    ({
      method: 'PUT',
      url: `${apiUrl}/contact/${id}`,
      data: ({
        firstName : data
      })
    })
    // .put(`${apiUrl}/contact/${id}`, data)
    .then(() => {
      return axios.get(`${apiUrl}/contact`)
    })
    .then(({data}) => {
      console.log(data);
      dispatch({
        type: "UPDATE_CONTACT",
        payload: data.data
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }
}

