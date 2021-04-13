import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const TextInput = (props) => {
  return (
    <TextField 
      fullWidth = {true} //常に幅いっぱいのテキストフィールドにするもの
      label = {props.label}
      margin = {"dense"}
      maltiline = {props.maltiline} //これは一行の時はfalsで良いのですが、複数行の時はtrueにする
      rows = {props.rows} //数値を設定すると数値分のテキストフィールドになる
      value = {props.value}
      type = {props.type}
      onChange = {props.onChange} 
    />
  )
}

export default TextInput