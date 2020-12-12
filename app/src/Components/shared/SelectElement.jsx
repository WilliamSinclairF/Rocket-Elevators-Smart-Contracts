import React from 'react';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { FormControl, InputLabel } from '@material-ui/core';

export default function SelectElement({
  data,
  handleChange,
  state,
  selectLabel,
}) {
  return (
    <FormControl>
      <InputLabel>{selectLabel}</InputLabel>
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
          <MenuItem value={e}>#{e}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
