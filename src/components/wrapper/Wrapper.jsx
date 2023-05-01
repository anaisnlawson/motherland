import React from 'react'
import classes from "./wrapper.css";

export default function Wrapper(props) {
  return <div className={classes.Container}>{props.children}</div>;
}
