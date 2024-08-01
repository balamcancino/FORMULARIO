import styled from "styled-components";

const ButtonStyled = styled.button`
    width: 30%;
    height: 30px;
    background-color: #ed0d3a;
    border-radius: 5px;
    color: white;
    font-size: 18px;
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    &:hover {
        background-color: #b6f657;
    }
`;



function Button({title, onclick}){
    return(
        <ButtonStyled onClick={onclick}>{title}</ButtonStyled>
    )
}

export default Button;