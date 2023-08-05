import React from "react";
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { Button } from "./Button";

describe("Rodando testes para Input", () => {

  test("Verifica Button Disabled", () => {
    render(<Button text="ButtonCassio" disabled />)

    expect(screen.getByRole('button', { name: "ButtonCassio" })).toBeDisabled();
  });
});