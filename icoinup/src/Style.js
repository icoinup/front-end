import React from "react";
import styled, {css}from "styled-components";


export const StyledButton = styled.button`
  padding: 6px 12px;
  line-height: 1.5;
  border: 8px solid #37447E;
  border-radius: 20px;
  color: #37447E;
  font-size:30px;
  background: #F1FAFF;
  width: 190px;
  text-align: center;
`;
export const StyledDiv = styled.div`
  
  justify-content: center;
  align-items: center;
  background: #CBE6F9;
  width: 100%;
  height: 100vh;
  color:#37447E;
  white-space: pre-line;
  display: flex;
  flex-direction:  column;
  flex-wrap: wrap;
`;

export const BackDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: white;
  width: 100%;
  height: 100vh;
  color:#37447E;
  white-space: pre-line;
`;


export default function Button({ children }) {
    return <StyledButton>{children}</StyledButton>;
  }

