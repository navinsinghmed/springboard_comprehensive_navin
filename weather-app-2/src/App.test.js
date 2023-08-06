import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from "@testing-library/react";
import {  } from './App';

it("renders without crashing", function () {
    render(<App />);
});


test('confirms that entry is text in weather app blank', () =>  
{
  const { getByText } = render(<App />)
  function alphanumeric(getByText)
  { 
    var letters = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
    if(inputtxt.value.match(letters))
  {
    return true;
  }
  else
  {
    return false;
  }
})
