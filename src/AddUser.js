import React, { useState } from 'react';
import { GlobalHooksProvider, createGlobalHook, useGlobalHook } from '@devhammed/use-global-hook'
import userStateHook from './store';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from 'antd';


function AddUser() {
  const { users, loading, addUser, delUser } = useGlobalHook('userStore');


  const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: 1,
      marginRight: 1,
    },
    dense: {
      marginTop: 2,
    },
    menu: {
      width: 200,
    },
    button: {
      margin: 1,
    },
  })
  
  // const handleChange = name => event => {
  //   setValues({ ...values, [name]: event.target.value });
  // };

  console.log(users)

  //const classes = useStyles();
  // const [values, setValues] = React.useState({});

  // function handleChange(e) {
  
  //   e.setValues(e.target.values);
  // }

  return (
    <form  noValidate autoComplete="off">
      <TextField
        required
        id="outlined-required"
        label="Required"
        defaultValue="Hello World"
        margin="normal"
        variant="outlined"
      //  onChange={handleChange('name')}
      />

      <Button variant="contained" color="primary" >
        Submit
      </Button>
    </form>
  )
}
export default AddUser;




