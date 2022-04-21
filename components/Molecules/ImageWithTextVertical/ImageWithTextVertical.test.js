import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ImageWithTextVertical from "./index";

describe('ImageWithTextVertical testing',()=>{
  test("should center child elements", () => {
    render(<ImageWithTextVertical />);
    const boxElement = screen.getByRole("box");
    expect(boxElement).toBeInTheDocument;
    expect(boxElement).toHaveStyle("text-align:center");
  });
  
  test("should have src image", () => {
    render(<ImageWithTextVertical image="hello" />);
    const imgElement = screen.getByRole("img");
    expect(imgElement).toBeInTheDocument;
    expect(imgElement).toHaveAttribute("src");
  });
  
  test("should have text props", () => {
    render(<ImageWithTextVertical text="hello" textSize="h3" />);
    const TypographyElement = screen.getByRole("typography");
    expect(TypographyElement).toBeInTheDocument;
    expect(TypographyElement).toHaveTextContent(/^hello$/);
    // expect(TypographyElement).toHaveAttribute("variant");
  });
})
