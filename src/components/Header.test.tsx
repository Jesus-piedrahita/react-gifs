import { render } from "@testing-library/react";
import { describe, test, expect } from "vitest";

import { Header } from "./Header";


describe('Header', () => {
    test('should render the title', () => {
        const title = 'Buscador de gifs';
        render(<Header title={title} description="hola" />);
        expect(document.querySelector('h1')?.textContent).toBe(title);
    })
    test('should render the description', () => {
        const description = 'Descubre y comparte el gifs perfecto';
        render(<Header title={'hola'} description={description} />);
        expect(document.querySelector('p')?.textContent).toBe(description);
    })
})