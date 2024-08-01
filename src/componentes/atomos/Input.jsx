import styled from "styled-components";

const InputStyled = styled.input`
    width: 80%;
    height: 50px;
    border: 1px gray solid;
    border-radius: 5px;
    font-size: 20px;
    color: #0308a3;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    
`;

function Input(props) {
    const handlerOnChange = (event) =>{
        props.fnVal(event.target.value)
    }
    return(
        <InputStyled type={props.type} placeholder={props.placeholder} value={props.val} onChange={handlerOnChange} />
    )
}

export default Input;