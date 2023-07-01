import { render, screen, getByText, fireEvent, queryByText, getByLabelText } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import {MemoryRouter} from 'react-router-dom';
import App from './App';
import Home from './Home';

test('renders loading page', () => {
    const {getByText} = render(
        <MemoryRouter initialEntries={['/home']}>
            <App />
        </MemoryRouter>
    );
    expect(getByText("Loading...")).toBeInTheDocument();
});
test('renders app home page', async() => {
    const {getByText} = await render(
        <MemoryRouter initialEntries={['/home']}>
            <App />
        </MemoryRouter>
    );
    setTimeout(() => {
        expect(getByText("Welcome to our cafe!")).toBeInTheDocument();
    }, 5000)
});
test('testing nav bars', async()=> {
    const {getByText,queryByText} = await render(
        <MemoryRouter initialEntries={['/home']}>
            <App />
        </MemoryRouter>
    );
    setTimeout(()=> {
        fireEvent.click(queryByText('Drink'));
        expect(getByText('Select an item from the menu:')).toBeInTheDocument();
        fireEvent.click(queryByText('Snacks'));
        expect("Menu").toBeInTheDocument();
        fireEvent.click(queryByText('Add Item'));
        expect('Add an Item').toBeInTheDocument();
    }, 5000)
})
test('testing add item form', async()=> {
    const {getByText,queryByText} = await render(
        <MemoryRouter initialEntries={['/home']}>
            <App />
        </MemoryRouter>
    );
    setTimeout(()=> {
        fireEvent.click(queryByText('Add Item'));
        const typeInput = getByLabelText('Type');
        const nameInput = getByLabelText('Name');
        const descriptionInput = getByLabelText('Description');
        const recipeInput = getByLabelText('Recipe');
        const serveInput = getByLabelText('Serve');
        const btn = queryByText('Submit');
        
        fireEvent.change(nameInput, {target: {value: 'testname'}});
        fireEvent.change(descriptionInput, {target: {value: 'test-description'}});
        fireEvent.change(recipeInput, {target: {value: 'test-recipe'}});
        fireEvent.change(serveInput, {target: {value: 'test-serve'}});
        
        fireEvent.click(btn);
        expect(getByText('testname')).toBeInTheDocument();
    }, 5000)
})

