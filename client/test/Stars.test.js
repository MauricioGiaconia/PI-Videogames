import React from "react";
import { render, fireEvent} from '@testing-library/react';
import Stars from "../src/components/Stars/Stars";

describe('Componente Stars', () =>{
    it ('La estrella Debe tener el valor 1', () => {
        const {getByText} = render(<Stars numStars='1'
                                        onClick = {() => {console.log('Testing!')}}></Stars>);

        const star = getByText('★');
        expect(star).toBeInstanceOf(HTMLSpanElement);
        const starValue = star.getAttribute('value');
        expect(starValue).toBe("1");
    });
    it ('La estrella debe llamar a su evento onClick al ser clickeada', () => {
        const onClickTest = jest.fn();

        const {getByText} = render(<Stars numStars='1'
                                        onClick = {() => onClickTest()}></Stars>);

        const star = getByText('★');
        
        fireEvent.click(star);
        
        expect(onClickTest).toHaveBeenCalled();
    })
})