import React from "react";
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles(() => 
  createStyles({
    "button": {
      borderColor: "FFB549",
      color: "FFB549",
      fontWeight: 600, //数値はダブルクウォーテーションなどで囲む必要はない
      marginBottom: "8px",
      '&:hover': {
        backgroundColor: "FFB549",
        color: "red"
      }
    }
  }) 
);

const Answer = (props) => {
  const classes = useStyles();

  return(
    <Button
      className={classes.button} variant="outlined" 
      onClick={() => props.select(props.content, props.nextId)}>
      {props.content}
    </Button>
  )

}

export default Answer