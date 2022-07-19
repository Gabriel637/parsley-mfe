import React from "react";
import { ThemeProvider } from "styled-components";
import { render, RenderResult } from "@testing-library/react";
import theme from "../src/styles/theme";

const renderWithTheme = (component: JSX.Element, options = {}): RenderResult =>
  render(<ThemeProvider theme={theme}>{component}</ThemeProvider>, options);

export { renderWithTheme as render };
