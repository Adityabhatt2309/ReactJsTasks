import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const DropDownWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    flex-direction: column;
`
const Button = styled.button`
    background-color: #286193;
    border-radius: 8px;
    color: black;
    padding: 10px 20px;
    cursor: pointer;
    font-weight: bold;
    color: white;
    line-height: 10px;
    word-spacing: 1px;
    letter-spacing: 1px;
    border: none;
    transition: all 0.9s ease-in-out;
    z-index: 5;
    &:hover{
        transform: translateY(-4px);
    }
`

const DropDownContent = styled.div`
    background-color: black;
    color: white;
    transition: all 0.9s ease-in-out;
    transform: ${({open})=>open?"traslateY(0)":"translateY(-20px)"};
    visibility: ${({open})=>open?"visible":"hidden"};
    z-index: 2;
`
const DropDownModal = () => {
    const [open,setOpen] = useState(false);

    const handleDropDownClick=()=>{
        setOpen(!open);
    }
  return (
    <DropDownWrapper>
        <Button onClick={handleDropDownClick}>OpenMenu Button</Button>
            <DropDownContent open={open}>
            <p>Open Show Content</p>
            <p>Open Show Content</p>
            <p>Open Show Content</p>
            <p>Open Show Content</p>
        </DropDownContent>
        
    </DropDownWrapper>
  )
}

export default DropDownModal