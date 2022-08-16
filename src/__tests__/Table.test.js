import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import Table from "../Table/Table";
import "@testing-library/jest-dom";

const testData = [{
    name: "Jane Doe",
    age: 12,
    address: "13th street in Maadi",
    date: "2012-04-23T18:25:43.511Z",
    email: "jane@halanchallenge.com",
}];

test("should render text component", () => {
    render(<Table customers={testData}/>);
    var textElem = screen.getByTestId("customersTable");
    expect(textElem).toBeInTheDocument();
  });