import React, { useEffect, useState } from 'react'
import classes from './LineOfSquares.module.css'
import Square from '../Square/Square';

function LineOfSquares(props) {

    const [colors, setColors] = useState([]);

    // при першому завантаженні компонента
    useEffect(() => {
        const initialColors = props.text.split('').map(() => randomColor());
        setColors(initialColors);
    }, [props.text]);

   // випадковий колір
    const randomColor = () => {
        const colors = ['#7890BF', '#3C8A67', '#c4a701']; // синій, зелений, жовтий
        const randomIndex = Math.floor(Math.random() * colors.length); 
        return colors[randomIndex];
    };

    // оновлення кольорів (переміщення заливки)
    const updateColors = () => {
        setColors((prevColors) => {
        const newColors = [...prevColors];
        // останній колір на першу позицію
        newColors.unshift(newColors.pop());
        return newColors;
        });
    };

    useEffect(() => {
        const interval = setInterval(updateColors, 500);
        return () => clearInterval(interval); // Чистимо інтервал при розмонтуванні
      }, [colors]);

      const squares = props.text.split('').map((char, index) => (
        <Square key={index} letter={char.toUpperCase()} color={colors[index]} />
      ));
    
      return <div className={classes.line_of_squares}>{squares}</div>;

}

export default LineOfSquares
