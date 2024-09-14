import React from 'react'
import classes from './Square.module.css'

export default function Square(props) {
  return (
    <div className={classes.square} style={{backgroundColor: props.color}}>
      <h3 className={classes.letter}>{props.letter}</h3>
    </div>
  )
}
