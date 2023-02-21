import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";
import React from "react";
import Header from "./components/Header";
import App from "./App";
afterEach(cleanup);
//describe('App Component', () => {
//  it('renders a mixed list of countries', () =>{
//    const { container } = render(<App />);
//    expect(container).toMatchSnapshot();
//  });
//  it('shuffles countries after button click', () =>{
//    render(<App />);
//    const button = screen.getByRole("button", {name: 'Generate countries'})
//    userEvent.click(button);
//    const cardImg = screen.getAllByRole('img')
//  })
//  
//});

it('displays title', () => {
  const { getByTestId, getByText } = render(<App />)
  expect(getByTestId('home-title')).toHaveTextContent('Memory  Game')
})
