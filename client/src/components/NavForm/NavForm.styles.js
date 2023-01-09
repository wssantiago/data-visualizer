import styled from "styled-components";

/* Styled components utilised in the NavForm component rendering*/

export const NavBar = styled.nav`
  background-color: #5bc0f8;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5% 15%;
  @media (max-width: 800px) {
    display: block;
  }

`;

export const StyledInput = styled.input.attrs((props) => ({
  placeholder: props.placeholder,
  name: props.name,
  value: props.value,
  onChange: props.onChange,
}))`
    margin-right: 3%;
    font-size: 1rem;
    padding: 1%;
    border-radius: 0.2rem;
    border: none;
    transition: color .35s ease-in-out, box-shadow .35s ease-in-out; gray;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    &:focus {
        outline: none;
        box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
    }
    &:hover{
      transform: scale(1.01);
    }
    @media (max-width: 800px) {
        display: block;
        margin: 3% auto;
    }
`;

export const StyledButton = styled.button.attrs((props) => ({
  type: props.type,
  onClick: props.onClick,
}))`
    background-color: #5BC0F8;
    color: white;
    font-weight: 600;
    height: 2.8rem;
    padding: 0 3%;
    border: 1px solid white;
    border-radius: 0.2rem;
    box-shadow: inset 0 0 0 0 white;
    transition: all .35s ease-in-out, box-shadow .35s ease-in-out; gray;
    cursor: pointer;
    &:hover {
        box-shadow: inset 150px 0 0 0 white;
        color: #5BC0F8;
        transform: scale(1.03);
        border: none;
    }
    &:active {
        transform: translate(2px, -2px);
    }

    @media (max-width: 800px) {
        display: block;
        margin: 3% auto;
        height: 2.5rem;
        width: 8rem;
    }
`;