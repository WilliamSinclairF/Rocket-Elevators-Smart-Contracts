import React from 'react';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default function SelectElement({ classes, data, handleChange, state }) {
  return (
    <>
      <FormControlLabel
        control={
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
        }
        label={'Id'}
        labelPlacement='bottom'
      />
    </>
  );
}
