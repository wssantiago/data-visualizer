import React, { useState } from "react";
import { NavBar, StyledInput, StyledButton } from "./NavForm.styles.js";
import { updateData, postData, deleteData } from "../../api/api.js";

function NavForm(props) {
  // state that keeps track of the three input fields content
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    participation: "",
  });
  const [submitter, setSubmitter] = useState("");

  const users = props.users;

  // handler function that is triggered whenever the inputs are changed
  // it hence updates the state aforementioned with current input data
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setNewUser((previousValue) => {
      if (name === "firstName") {
        return { ...previousValue, firstName: value };
      } else if (name === "lastName") {
        return { ...previousValue, lastName: value };
      } else if (name === "participation") {
        return { ...previousValue, participation: value };
      }
    });
  };

  const userExists = (usr) => {
    for (let i = 0; i < users.length; i++) {
      let currUsr = users[i];
      if (
        currUsr.firstName === usr.firstName &&
        currUsr.lastName === usr.lastName
      )
        return currUsr.id;
    }
    return -1;
  };

  const updateUsers = (id) => {
    if (id != -1) {
      updateData({ id: id, participation: newUser.participation }).then(
        (response) => {
          if (response.ok) {
            props.submitFormHandler();
          }
        }
      );
    } else {
      postData(newUser).then((response) => {
        if (response.ok) {
          props.submitFormHandler();
        }
      });
    }
  };

  const deleteUser = (id) => {
    if (id != -1) {
      deleteData({ id: id }).then((response) => {
        if (response.ok) {
          props.submitFormHandler();
        }
      });
    }
  };

  // when the form is submitted via SEND button,
  // data is validated (not allowed empty names and non number participation).
  // if the input fields are valid, the API is called to post the new user object,
  // defined as a state, to the server and then triggers the props submit form handler
  // executed in Home.js
  const submitHandler = (e) => {
    e.preventDefault();
    if (newUser.firstName !== "" && newUser.lastName !== "") {
      let id = userExists(newUser);
      if (submitter === "SEND" && Number(newUser.participation))
        updateUsers(id);
      else if (submitter === "DELETE") deleteUser(id);
      setNewUser({ firstName: "", lastName: "", participation: "" });
    }
  };

  // the component with predefined styled components and their attributes
  return (
    <form data-testid="navForm" onSubmit={submitHandler} autoComplete="off">
      <NavBar>
        <StyledInput
          placeholder="First name"
          name="firstName"
          value={newUser.firstName}
          onChange={changeHandler}
        ></StyledInput>
        <StyledInput
          placeholder="Last name"
          name="lastName"
          value={newUser.lastName}
          onChange={changeHandler}
        ></StyledInput>
        <StyledInput
          type="number"
          placeholder="Participation"
          name="participation"
          value={newUser.participation}
          onChange={changeHandler}
        ></StyledInput>
        <StyledButton type="submit" onClick={() => setSubmitter("SEND")}>
          SEND
        </StyledButton>
        <StyledButton type="submit" onClick={() => setSubmitter("DELETE")}>
          DELETE
        </StyledButton>
      </NavBar>
    </form>
  );
}

export default NavForm;
