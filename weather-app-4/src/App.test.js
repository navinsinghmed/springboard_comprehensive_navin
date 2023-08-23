import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from "@testing-library/react";
import {  } from './App';

it("renders without crashing", function () {
    render(<App />);
});

function onlyLettersAndSpaces(str) {
  return /^[A-Za-z\s]*$/.test(str);
}

const { getByText } = render(<App />); 
onlyLettersAndSpaces({ getByText });