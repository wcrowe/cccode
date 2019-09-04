import React from 'react';
import { GlobalHooksProvider, createGlobalHook, useGlobalHook } from '@devhammed/use-global-hook'
import userStateHook from './store';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';


function AddUser() {
  const { users, loading, addUser, delUser } = useGlobalHook('userStore');


  const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    dense: {
      marginTop: theme.spacing(2),
    },
    menu: {
      width: 200,
    },
  }));

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  console.log(users)
  const handleSubmit = () => {
    console.log(users)
    addUser('John Doe', 'Clearwater');
  }

  return (
    <form className={classes.container} noValidate autoComplete="off">
           <TextField
        required
        id="outlined-required"
        label="Required"
        defaultValue="Hello World"
        className={classes.textField}
        margin="normal"
        variant="outlined"
        onChange={handleChange('name')}
      />
 
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  )
}
export default AddUser;




