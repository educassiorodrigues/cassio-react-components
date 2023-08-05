import React from "react";
import { ButtonProps } from "./Button.types";
import { ButtonPrimary } from "./Button.style";

export function Button(props: ButtonProps) {
  return (
    <ButtonPrimary
      type="button"
      onClick={props.onClick}
      primary={props.primary}
      disabled={props.disabled}
      size={props.size}
      {...props}
    >
      {props.text}
    </ButtonPrimary>
  )
}