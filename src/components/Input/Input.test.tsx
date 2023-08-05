import React from "react";
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event";
import {render, screen, waitFor } from '@testing-library/react'

import { Input } from "./Input";

describe("Rodando testes para Input", () => {

  test("Verifica placeholder no input", () => {
    render(<Input placeholder="placeholderCassio" />)
    expect(screen.getByPlaceholderText('placeholderCassio')).toHaveAttribute('placeholder', 'placeholderCassio');
  });

  test("Renderizou o Input component", async () => {
    render(<Input placeholder="cassio" />);
    const input = screen.getByPlaceholderText("cassio") as HTMLInputElement;
    userEvent.type(input, "Hello world!");
    await waitFor(() => expect(input.value).toBe("Hello world!"));
  });
});