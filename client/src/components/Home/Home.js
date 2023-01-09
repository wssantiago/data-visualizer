import React, { useEffect, useState } from "react";
import {
  MainContainer,
  TitleContainer,
  StyledTitle,
  StyledSubtitle,
  SubtitleContainer,
  DataContainer,
  MUITableContainer,
  MUIChartContainer,
} from "./Home.styles.js";
import Table from "../Table/Table.js";
import Donut from "../Donut/Donut.js";
import NavForm from "../NavForm/NavForm.js";
import { fetchData } from "../../api/api.js";

function Home() {

  // people state stores the JSON retrieved data
  const [people, setPeople] = useState({ users: [] });
  
  // simple count state to be incremented whenever the SEND button is clicked
  const [usrCreated, setUsrCreated] = useState(0);

  // this effect is used every time the usrCreated state changes, meaning a new user
  // was submitted and people state needs to be updated fetching again the server JSON data
  useEffect(() => {
    fetchData().then((data) => setPeople(data));
  }, [usrCreated]);

  // this is the function called from NavForm.js using props, it simply 
  //increments the count state to trigger the useEffect
  function submit() {
    console.log("success");
    setUsrCreated((prev) => prev + 1);
  }

  // Home component
  return (
    <MainContainer>
      <NavForm submitFormHandler={submit} />
      <TitleContainer>
        <StyledTitle> {/* when JSON users data is empty, the inner HTML changes}*/}
          {people.users.length
            ? "Visualise your data!"
            : "There is no data to visualise."}
        </StyledTitle>
      </TitleContainer>
      <SubtitleContainer>
        <StyledSubtitle>Add new user data above.</StyledSubtitle>
      </SubtitleContainer>
      <DataContainer>
        <MUITableContainer>
          {people.users.length && <Table users={people.users}></Table>} {/* the Table component only renders if there are users to display*/}
        </MUITableContainer>
        <MUIChartContainer>
          {people.users.length && <Donut users={people.users}></Donut>} {/* the Donut component only renders if there are users to display*/}
        </MUIChartContainer>
      </DataContainer>
    </MainContainer>
  );
}

export default Home;
