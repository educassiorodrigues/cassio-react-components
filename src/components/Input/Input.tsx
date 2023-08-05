import React from "react";
import { StyledInput, StyledLabel, StyledMessage, StyledText } from "./Input.styles";
import { InputProps } from "./Input.types";

export function Input(props: InputProps){
  return (
    <>
      <StyledLabel>
        <StyledText disabled={props.disabled} error={props.error}>
          {props.label}
        </StyledText>
      </StyledLabel>
      <StyledInput
        id={props.id}
        type="text"
        onChange={props.onChange}
        disabled={props.disabled}
        error={props.error}
        success={props.success}
        placeholder={props.placeholder}
        {...props}></StyledInput>
      <StyledMessage>
        <StyledText error={props.error}>{props.message}</StyledText>
      </StyledMessage>
    </>
  );
};