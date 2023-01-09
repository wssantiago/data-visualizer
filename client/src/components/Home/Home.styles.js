import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: white;
  height: 100vh;
  font-family: "Suez One";
  color: black;
  margin: 0;
  font-family: "Sofia Sans Semi Condensed", sans-serif;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const StyledTitle = styled.h1`
  font-size: 36px;
  height: 30px;
`;

export const SubtitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const StyledSubtitle = styled.h2`
  font-size: 20px;
`;

export const DataContainer = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: top;
  position: relative;
  margin-top: 2%;
  width: 100%;
  @media (max-width: 1380px) {
    display: block;
  }
`;

export const MUITableContainer = styled.div`
  @media (max-width: 1380px) {
    width: 100%;
  }
  justify-content: center;
  width: 60%;
  align-items: center;
`;

export const MUIChartContainer = styled.div`
  @media (max-width: 1380px) {
    width: 100%;
    display: flex;
    margin-top: 5%;
  }
  justify-content: center;
  width: 40%;
`;