import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function SelectElement({ data, prompt, handleChange, state }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant='contained' color='primary' onClick={handleClickOpen}>
        {prompt}
      </Button>
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={open}
        onClose={handleClose}>
        <DialogTitle>Select A Value</DialogTitle>
        <DialogContent>
          <FormControl className={classes.formControl}>
            <InputLabel id='demo-dialog-select-label'>ID</InputLabel>
            <Select
              labelId='demo-dialog-select-label'
              id='demo-dialog-select'
              value={state}
              name={'_id'}
              onChange={handleChange}
              input={<Input />}>
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              {data.map(e => (
                <MenuItem value={e}>{e}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Cancel
          </Button>
          <Button onClick={handleClose} color='primary'>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
