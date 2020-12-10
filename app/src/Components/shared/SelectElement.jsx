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
import { Box } from '@material-ui/core';

export default function SelectElement({ data, prompt, handleChange, state }) {
  return (
    <>
      <InputLabel id='selectLabel'>ID</InputLabel>
      <Select
        labelId='selectLabel'
        id='select'
        value={state}
        name={'_id'}
        onChange={handleChange}
        input={<Input type='number' />}>
        <MenuItem value=''>
          <em>None</em>
        </MenuItem>
        {data.map(e => (
          <MenuItem value={e}>{e}</MenuItem>
        ))}
      </Select>
    </>
  );
}
