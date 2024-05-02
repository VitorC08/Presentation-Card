import styled from "styled-components"

export const Button = styled.button`
    width: 70%;
    height: 44px;

    font-size: 14px;
    letter-spacing: .5px;

    font-weight: 500;

    border: none;
    border-radius: 5px;

    margin-bottom: 5px;

    cursor: pointer;

    color:${({theme}) => theme.COLORS.text_color};
    background-color:${({theme}) => theme.COLORS.purple_500};

    transition: .3s all ease-in-out;

    &:hover{
        filter: brightness(1.2)
    }

`