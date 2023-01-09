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
import {fetchData} from "../../api/api.js";

function App() {
  const [people, setPeople] = useState([{}]);
  const [usrCreated, setUsrCreated] = useState(0);

  useEffect(() => {
    fetchData().then((data) => setPeople(data));
  }, [usrCreated]);

  function submit() {
    console.log("success");
    setUsrCreated((prev) => prev + 1);
  }

  return (
    <MainContainer>
      <NavForm submitFormHandler={submit} />
      <TitleContainer>
        <StyledTitle>{people.users.length ? "Visualise your data!" : "There is no data to visualise"}</StyledTitle>
      </TitleContainer>
      <SubtitleContainer>
        <StyledSubtitle>Add new user data above.</StyledSubtitle>
      </SubtitleContainer>
      <DataContainer>
        <MUITableContainer>
          {people.users.length && <Table users={people.users}></Table>}
        </MUITableContainer>
        <MUIChartContainer>
          {people.users.length && <Donut users={people.users}></Donut>}
        </MUIChartContainer>
      </DataContainer>
    </MainContainer>
  );
}

export default App;
