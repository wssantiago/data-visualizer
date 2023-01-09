import React, { useState } from "react";
import { NavBar, StyledInput, StyledButton } from "./NavForm.styles.js";
import { postData } from "../../api/api.js";

function NavForm(props) {
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    participation: "",
  });

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

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      newUser.firstName !== "" &&
      newUser.lastName !== "" &&
      Number(newUser.participation)
    ) {
      postData(newUser).then(() => {
        props.submitFormHandler();
      });
    }
  };

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
          placeholder="Participation"
          name="participation"
          value={newUser.participation}
          onChange={changeHandler}
        ></StyledInput>
        <StyledButton type="submit">SEND</StyledButton>
      </NavBar>
    </form>
  );
}

export default NavForm;
