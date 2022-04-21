import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import WrapperFlexList from "./index";

describe("WrapperFlexList testing", () => {
  test("should have display flex", () => {
    render(<WrapperFlexList />);
    const gridElement = screen.getByRole("grid");
    expect(gridElement).toBeInTheDocument;
    expect(gridElement).toHaveStyle("display:flex");
  });

  test("it should render a row of item", () => {
    render(<WrapperFlexList direction="row" />);
    const gridElement = screen.getByRole("grid");
    expect(gridElement).toBeInTheDocument;
    expect(gridElement).toHaveStyle("flex-direction: row");
  });

  test("it should render a column of item", () => {
    render(<WrapperFlexList direction="column" />);
    const gridElement = screen.getByRole("grid");
    expect(gridElement).toBeInTheDocument;
    expect(gridElement).toHaveStyle("flex-direction: column");
  });
});
