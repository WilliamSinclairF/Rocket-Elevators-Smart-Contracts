import React, { useState } from 'react';
import {
  Checkbox,
  TextField,
  Button,
  FormGroup,
  FormControlLabel,
  Container,
} from '@material-ui/core';
import SelectElement from '../shared/SelectElement';

import buildings from '../../buildings.json';

const buildingIds = buildings.map(b => b.building.id);

export default function TestInputs({ inputs, labels }) {
  console.log(buildingIds);
  const initialState = { ...inputs.state, _testPassed: false };
  const [inputState, setInputState] = useState(initialState);
  const { handleInputChange, handleSubmit } = inputs;

  const handleChange = e => {
    handleInputChange(e);
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setInputState({
      ...inputState,
      [e.target.name]: value,
    });
  };

  const handleDrizzleSubmit = e => {
    handleSubmit(e);
    setInputState({
      _buildingAddress: '',
      _conformityCertificate: '',
      _elevatorBreakTest: '',
      _elevatorCableTest: '',
      _elevatorDoorTest: '',
      _operatingPermit: '',
      _testPassed: false,
    });
  };

  return (
    <Container>
      <FormGroup>
        <SelectElement data={buildingIds} prompt={'Select Building ID'} />
        {inputs.inputs.map((input, index) => {
          return input.internalType === 'bool' ? (
            <FormControlLabel
              key={'label' + input.name}
              control={
                <Checkbox
                  onChange={handleChange}
                  checked={inputState._testPassed}
                  name={input.name}
                  key={input.name}
                />
              }
              label={labels[index]}
              labelPlacement='top'
            />
          ) : (
            <FormControlLabel
              key={'label' + input.name}
              control={
                <TextField
                  name={input.name}
                  key={input.name}
                  value={inputState[`${input.name}`]}
                  onChange={handleChange}
                />
              }
              label={labels[index]}
              labelPlacement='top'
            />
          );
        })}
        <Button
          variant='contained'
          color='primary'
          onClick={handleDrizzleSubmit}>
          Add Record
        </Button>
      </FormGroup>
    </Container>
  );
}
